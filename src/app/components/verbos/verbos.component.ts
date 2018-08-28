import { Component, OnInit } from '@angular/core';
import { _ } from 'underscore';
import { VerbosService } from '../../services/verbos.service';
import { Collection } from '../../dto/collection';
import { Verbo } from '../../dto/verbo';
import { VerbForm } from '../../dto/verb-form';
import { CommonService } from '../../services/common.service';
import { Common } from '../../dto/common';

@Component({
  selector: 'app-verbos',
  templateUrl: './verbos.component.html',
  styleUrls: ['./verbos.component.scss']
})
export class VerbosComponent implements OnInit {

  common: Common;
  groups: Array<Collection<Verbo>>;
  currentGroup: Collection<Verbo>;
  selectedVerb: Verbo;
  currentVerb: Array<VerbForm>;

  hideSolution: boolean = false;
  hideDescriptions: boolean = false;

  constructor(private verbosService: VerbosService, private commonService: CommonService) { }

  ngOnInit() {
    this.verbosService.get().subscribe(data => this.groups = data);
    this.commonService.get().subscribe(data => this.common = data);
  }

  selectGroup(group: Collection<Verbo>){
    this.currentGroup = group;
    this.hideSolution = false;
    this.hideDescriptions = false;
    this.currentVerb = null;
    this.selectedVerb = null;
  }

  practice(){
    this.hideSolution = !this.hideSolution;
  }

  hide(){
    this.hideDescriptions = !this.hideDescriptions;
  }

  clear(){
    this.currentGroup.content.forEach(el => {
      el.werkwoordOplossing = null;
      el.stamOplossing = null;
      el.voltooidOplossing = null;
      el.isGoedWerkwoord = false;
      el.isGoedStam = false;
      el.isGoedVoltooid = false;
    });
  }

  evaluateWerkwoord(word:Verbo){
    word.isGoedWerkwoord = word.werkwoordOplossing !== null && word.werkwoordOplossing !== undefined && word.werkwoord.toLowerCase() === word.werkwoordOplossing.toLowerCase();
  }

  evaluateStam(word:Verbo){
    word.isGoedStam = word.stamOplossing !== null && word.stamOplossing !== undefined && word.stam.toLowerCase() === word.stamOplossing.toLowerCase();
  }

  evaluateVoltooid(word:Verbo){
    word.isGoedVoltooid = word.voltooidOplossing !== null && word.voltooidOplossing !== undefined && word.voltooid.toLowerCase() === word.voltooidOplossing.toLowerCase();
  }

  details(verb:Verbo){
    if(this.selectedVerb && this.selectedVerb.werkwoord === verb.werkwoord) {
      this.selectedVerb = null;
      this.currentVerb = null;
    } else {
      this.selectedVerb = verb;
      this.currentVerb = _.zip(this.common.pronouns, verb.heden, verb.verleden).map(function(coll) { 
        return _.object(["person","present","past"],coll);
      });
    }
  }
}
