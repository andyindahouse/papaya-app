import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { DetailMonumentComponent } from './detail-monument';
import { QuizComponent } from './quiz';


export const COMPONENTS = [
  DetailMonumentComponent,
  QuizComponent
];

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule,
    CommonModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule { }
