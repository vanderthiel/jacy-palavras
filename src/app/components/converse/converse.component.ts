import { Component, OnInit } from '@angular/core';
import { Collection } from '../../dto/collection';
import { Converse } from 'src/app/dto/converse';
import { ConversesService } from 'src/app/services/converses.service';

@Component({
  selector: 'app-converse',
  templateUrl: './converse.component.html',
  styleUrls: ['./converse.component.scss']
})
export class ConverseComponent implements OnInit {

  groups: Array<Collection<Converse>>;
  current: Collection<Converse>;

  hideSolution: boolean = false;
  hideDescriptions: boolean = false;

  constructor(private conversesService: ConversesService) { }

  ngOnInit() {
    this.conversesService.get().subscribe(data => this.groups = data);
  }

  selectGroup(group: Collection<Converse>){
    this.current = group;
  }

}
