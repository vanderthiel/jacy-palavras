import { Component, OnInit } from '@angular/core';
import { VerbosService } from '../../services/verbos.service';
import { Collection } from '../../dto/collection';
import { Verbo } from '../../dto/verbo';

@Component({
  selector: 'app-verbos',
  templateUrl: './verbos.component.html',
  styleUrls: ['./verbos.component.scss']
})
export class VerbosComponent implements OnInit {

  groups: Array<Collection<Verbo>>;
  currentGroup: Collection<Verbo>;

  constructor(private verbosService: VerbosService) { }

  ngOnInit() {
    this.verbosService.get().subscribe(data => this.groups = data);
  }

  selectGroup(group: Collection<Verbo>){
    this.currentGroup = group;
  }

}
