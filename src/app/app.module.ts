import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {CommonService} from './services/common.service';
import {GeneralService} from './services/general.service';
import {PalavrasService} from './services/palavras.service';
import {VerbosService} from './services/verbos.service';
import { HttpModule } from '../../node_modules/@angular/http';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import { GeneralComponent } from './components/general/general.component';
import { PalavrasComponent } from './components/palavras/palavras.component';
import { VerbosComponent } from './components/verbos/verbos.component';
import { HomeComponent } from './components/home/home.component';
import { ConverseComponent } from './components/converse/converse.component';
import { ConversesService } from './services/converses.service';

@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    PalavrasComponent,
    VerbosComponent,
    HomeComponent,
    ConverseComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, AppRoutingModule
  ],
  providers: [CommonService, GeneralService, PalavrasService, VerbosService, ConversesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
