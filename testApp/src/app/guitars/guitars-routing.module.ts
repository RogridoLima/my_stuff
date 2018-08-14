import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StratocasterComponent } from './stratocaster/stratocaster.component';
import { LesPaulComponent } from './les-paul/les-paul.component';

const routes: Routes = [
  {path: '', redirectTo: 'stratocaster', pathMatch: 'prefix'},
  {path: 'stratocaster', component: StratocasterComponent, outlet: 'guitars'},
  {path: 'les-paul', component: LesPaulComponent, outlet: 'guitars'},
  {path: 'acoustic-guitars', loadChildren: './acoustic-guitars/acoustic-guitars.module#AcousticGuitarModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuitarsRoutingModule { }
