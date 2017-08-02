import { NgModule } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptUISideDrawerModule } from 'nativescript-telerik-ui/sidedrawer/angular/side-drawer-directives';

import { SideDrawerPageComponent } from './shared/side-drawer-page/side-drawer-page.component';
import { BorderlessBtnDirective } from './shared/side-drawer-page/borderless-btn.directive';

import { StoreModule } from '@ngrx/store';
import { reducer } from './shared/reducers';

import { AppComponent } from './app.component';
import { routes, navigatableComponents } from './app.routing';
import { StateService } from './shared/state/state.service';
import { StateFS } from './shared/state/state';
  
@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptUISideDrawerModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes),
    StoreModule.provideStore(reducer)
  ],
  declarations: [
    AppComponent,
    SideDrawerPageComponent,
    BorderlessBtnDirective,
    ...navigatableComponents
  ],
  providers: [StateService, StateFS],
  bootstrap: [AppComponent]
})
export class AppModule {

}
