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

  hideSolution: boolean = false;
  hideDescriptions: boolean = false;

  constructor(private palavrasService: PalavrasService) { }

  ngOnInit() {
    this.palavrasService.get().subscribe(data => this.groups = data);
  }

  selectGroup(group: Collection<Palavra>){
    this.currentGroup = group;
    this.hideSolution = false;
    this.hideDescriptions = false;
  }

  practice(){
    this.hideSolution = !this.hideSolution;
  }

  hide(){
    this.hideDescriptions = !this.hideDescriptions;
  }

  clear(){
    this.currentGroup.content.forEach(el => el.oplossing = null);
    this.currentGroup.content.forEach(el => el.isGoed = false);
  }

  evaluate(word:Palavra){
    word.isGoed = word.oplossing !== null && word.oplossing !== undefined && word.woord.toLowerCase() === word.oplossing.toLowerCase();
  }

}
