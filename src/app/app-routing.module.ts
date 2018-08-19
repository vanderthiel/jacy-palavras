import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GeneralComponent } from './components/general/general.component';
import { VerbosComponent } from './components/verbos/verbos.component';
import { PalavrasComponent } from './components/palavras/palavras.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'general', component: GeneralComponent },
  { path: 'verbos', component: VerbosComponent },
  { path: 'palavras', component: PalavrasComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}