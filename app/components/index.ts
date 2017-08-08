import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailMonumentComponent } from './detail-monument';

export const COMPONENTS = [
  DetailMonumentComponent
];


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule { }
