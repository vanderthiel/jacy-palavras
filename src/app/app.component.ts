import { Component, OnInit } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Vamos praticar';

  pronouns: Array<string>;

  constructor(private commonService: CommonService){}

  ngOnInit() {
    this.commonService.get().subscribe(data => this.pronouns = data.pronouns);
  }
}
