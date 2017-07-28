import { NgModule } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { AppComponent } from './app.component';
import { routes, navigatableComponents } from './app.routing';
import { SharedModule } from './shared';
import { StateService } from './shared/state/state.service';
import { StateFS } from './shared/state/state';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes),
    SharedModule
  ],
  declarations: [
    AppComponent,
    ...navigatableComponents
  ],
  providers: [StateService, StateFS],
  bootstrap: [AppComponent]
})
export class AppModule {

}
