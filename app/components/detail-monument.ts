import { Component, Input, OnInit } from '@angular/core';
import { Monument } from '../shared/models/monument';

@Component({
  selector: 'detail-monument',
  template: `
    <StackLayout>
      <Image src="{{monument.image}}"></Image>
      <Label class="primary-label" [text]="monument.name"></Label>
      <Label class="secondary-label" text="distance: 956m"></Label>
      <Label class="primary-label" [text]="monument.status"></Label>      
      <Label class="primary-label" textWrap="true" [text]="monument.desc"></Label>        						
    </StackLayout>
  `
})

export class DetailMonumentComponent implements OnInit{
  @Input() monument: Monument;

  constructor() { 
  }

  ngOnInit() {
    console.log(this.monument)
  }

}