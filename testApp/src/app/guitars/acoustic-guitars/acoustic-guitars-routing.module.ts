import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MartimComponent } from './martim/martim.component';
import { TaylorComponent } from './taylor/taylor.component';

const routes: Routes = [
  {path: '', redirectTo: 'martim', pathMatch: 'prefix'},
  {path: 'martim', component: MartimComponent},
  {path: 'taylor', component: TaylorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcousticGuitarsRoutingModule { }
