import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { Collection } from '../../dto/collection';
import { General } from '../../dto/general';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  groups: Array<Collection<General>>;
  currentGroup: Collection<General>;

  hideSolution: boolean = false;

  constructor(private generalService: GeneralService) { }

  ngOnInit() {
    this.generalService.get().subscribe(data => this.groups = data);
  }

  selectGroup(group: Collection<General>){
    this.currentGroup = group;
  }

  practice(){
    this.hideSolution = !this.hideSolution;
  }

  clear(){
    this.currentGroup.content.forEach(el => el.oplossing = null);
  }

}
