import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FunziesComponent } from './funzies/funzies.component';
import { AComponent } from './a/a.component';

const routes: Routes = [
  {path: '', redirectTo: '/a', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'funzies', component: FunziesComponent},
  {path: 'a', component: AComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
