import { Component, OnInit } from '@angular/core';
import { PalavrasService } from '../../services/palavras.service';
import { Collection } from '../../dto/collection';
import { Palavra } from '../../dto/palavra';

@Component({
  selector: 'app-palavras',
  templateUrl: './palavras.component.html',
  styleUrls: ['./palavras.component.scss']
})
export class PalavrasComponent implements OnInit {

  groups: Array<Collection<Palavra>>;
  currentGroup: Collection<Palavra>;

  constructor(private palavrasService: PalavrasService) { }

  ngOnInit() {
    this.palavrasService.get().subscribe(data => this.groups = data);
  }

  selectGroup(group: Collection<Palavra>){
    this.currentGroup = group;
  }

}
