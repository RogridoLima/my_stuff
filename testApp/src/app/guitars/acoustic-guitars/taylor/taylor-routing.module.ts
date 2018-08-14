import { TaylorComponent } from './taylor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: TaylorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaylorRoutingModule { }
export const TaylorRoutingComponents = [TaylorComponent];
