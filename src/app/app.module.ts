import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {CommonService} from './services/common.service';
import {GeneralService} from './services/general.service';
import {PalavrasService} from './services/palavras.service';
import {VerbosService} from './services/verbos.service';
import { HttpModule } from '../../node_modules/@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [CommonService, GeneralService, PalavrasService, VerbosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
