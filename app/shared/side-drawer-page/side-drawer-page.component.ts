import { Component, ViewChild, AfterViewInit, NgZone, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';

import { Page } from 'ui/page';
import { isAndroid, isIOS } from 'platform';
import { ActionItem } from 'ui/action-bar';
import { RadSideDrawerComponent, SideDrawerType } from 'nativescript-telerik-ui/sidedrawer/angular';
import { PushTransition, SlideInOnTopTransition } from 'nativescript-telerik-ui/sidedrawer';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../reducers';
import { User } from '../models/user';

@Component({
  selector: 'side-drawer-page',
  templateUrl: 'shared/side-drawer-page/side-drawer-page.component.html',
  styleUrls: ['shared/side-drawer-page/side-drawer-page.component.css']
})
export class SideDrawerPageComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild(RadSideDrawerComponent) drawerComponent: RadSideDrawerComponent;
  user$: Observable<User>;

  /**
   * On tap of any side-drawer item, hiding content if this flag is true.
   */
  isContentVisible: boolean = true;

  /**
   * For android using SlideOnTop transition and for iOS, push transition.
   */
  drawerTransition: any;

  /**
   * Navigation Menu Items
   */
  navMenu: any[] = [
    { name: 'Mapa', commands: ['/'] },
    { name: 'Logros', commands: ['/achievements'] },
    { name: 'Puntos interes', commands: ['/monuments'] },
    { name: 'Perfil', commands: ['/profile'] },
    { name: '[oculta] Load Monu', commands: ['/load-monu'] },
    { name: 'Feedback', commands: ['/feedback'] }
  ];

  private drawer: SideDrawerType;

  constructor(
    private routerExtensions: RouterExtensions,
    private activatedRoute: ActivatedRoute,
    private page: Page,
    private ngZone: NgZone,
    private store: Store<fromRoot.State>
  ) {
    this.user$ = store.select('user');
    this.setActionBarIcon(this.page);
    this.setDrawerTransition();
  }
  ngOnInit() {
    console.log('ngOnInit SideDrawerPage'); 
  }

  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
  }

  ngOnDestroy() {
    this.drawer.off('drawerClosed');
  }

  toggleSideDrawer() {
    this.drawer.toggleDrawerState();
  }

  /**
   * Navigates to next page after drawer is closed.
   */
  navigateTo(routeCommands: any[]) {
    this.drawer.closeDrawer();
    let currentUrl = this.routerExtensions.router.routerState.snapshot.url;
    let newUrlTree = this.routerExtensions.router.createUrlTree(routeCommands);
    let newUrl = this.routerExtensions.router.serializeUrl(newUrlTree);
    if (currentUrl !== newUrl) {
      this.isContentVisible = false;

      this.drawer.on('drawerClosed', () => {
        this.ngZone.run(() => {
          this.routerExtensions.navigate(routeCommands,
            {
              clearHistory: true,
              animated: false
            });
          this.isContentVisible = true;
          this.drawer.off('drawerClosed');
        });
      });
    }
  }

  private setDrawerTransition() {
    if (isAndroid) {
      this.drawerTransition = new SlideInOnTopTransition();
    }

    if (isIOS) {
      this.drawerTransition = new PushTransition();
    }
  }

  private setActionBarIcon(page: Page) {
    if (isAndroid) {
      page.actionBar.navigationButton = this.getNavigationButton();
    }

    if (isIOS) {
      page.actionBar.actionItems.addItem(this.getNavigationButton());
    }
  }

  private getNavigationButton() {
    let navActionItem = new ActionItem();
    navActionItem.icon = 'res://ic_menu_black';
    if (navActionItem.ios) {
      navActionItem.ios.position = 'left';
    }
    navActionItem.on('tap', this.toggleDrawer.bind(this));
    return navActionItem;
  }

  private toggleDrawer() {
    this.drawer.toggleDrawerState();
  }
}
