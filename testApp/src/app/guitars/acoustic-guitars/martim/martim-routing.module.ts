import { MartimComponent } from './martim.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: MartimComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MartimRoutingModule { }
export const MartimRoutingComponents = [MartimComponent];
