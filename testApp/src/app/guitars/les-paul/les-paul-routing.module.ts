import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LesPaulComponent } from './les-paul.component';

const routes: Routes = [
  {path: '', component: LesPaulComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LesPaulRoutingModule { }
