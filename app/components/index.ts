import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { DetailMonumentComponent } from './detail-monument';
import { ItemListMonumentComponent } from './item-list-monument';
import { QuizComponent } from './quiz';


export const COMPONENTS = [
  DetailMonumentComponent,
  ItemListMonumentComponent,
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
