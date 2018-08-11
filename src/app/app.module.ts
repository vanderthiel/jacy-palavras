import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {CommonService} from './services/common.service';
import {GeneralService} from './services/general.service';
import {PalavrasService} from './services/palavras.service';
import {VerbosService} from './services/verbos.service';
import { HttpModule } from '../../node_modules/@angular/http';
import { AppRoutingModule } from './/app-routing.module';
import { GeneralComponent } from './components/general/general.component';
import { PalavrasComponent } from './components/palavras/palavras.component';
import { VerbosComponent } from './components/verbos/verbos.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    PalavrasComponent,
    VerbosComponent
  ],
  imports: [
    BrowserModule, HttpModule, AppRoutingModule
  ],
  providers: [CommonService, GeneralService, PalavrasService, VerbosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
