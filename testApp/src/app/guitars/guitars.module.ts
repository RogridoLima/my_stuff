import { LesPaulComponent } from './les-paul/les-paul.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuitarsComponent } from './guitars.component';
import { GuitarsRoutingModule } from './guitars-routing.module';
import { StratocasterComponent } from './stratocaster/stratocaster.component';

@NgModule({
  imports: [
    CommonModule,
    GuitarsRoutingModule,
  ],
  declarations: [GuitarsComponent, StratocasterComponent, LesPaulComponent]
})

export class GuitarsModule {}
