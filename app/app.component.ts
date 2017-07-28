import { Component, OnInit } from "@angular/core";
import { StateService } from './shared/state/state.service';

@Component({
  selector: "my-app",
  template: '<page-router-outlet></page-router-outlet>'
})
export class AppComponent implements OnInit {

  constructor(private state: StateService) {}
  
  ngOnInit() {
    this.state.init();
  }

}
