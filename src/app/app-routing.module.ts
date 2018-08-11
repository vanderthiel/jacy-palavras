import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GeneralComponent } from './components/general/general.component';
import { VerbosComponent } from './components/verbos/verbos.component';
import { PalavrasComponent } from './components/palavras/palavras.component';

const routes: Routes = [
  { path: 'general', component: GeneralComponent },
  { path: 'verbos', component: VerbosComponent },
  { path: 'palavras', component: PalavrasComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}