import { Component, OnInit } from '@angular/core';
import { CommonService } from './services/common.service';
import { GeneralService } from './services/general.service';
import { PalavrasService } from './services/palavras.service';
import { VerbosService } from './services/verbos.service';
import { ConversesService } from './services/converses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Vamos praticar';

  constructor(
    private commonService: CommonService,
    private generalService: GeneralService,
    private palavrasService: PalavrasService,
    private verbosService: VerbosService,
    private conversesService: ConversesService){}

  ngOnInit() {
    // Load all data when opening application
    this.commonService.get();
    this.verbosService.get();
    this.generalService.get();
    this.palavrasService.get();
    this.conversesService.get();
  }

}
