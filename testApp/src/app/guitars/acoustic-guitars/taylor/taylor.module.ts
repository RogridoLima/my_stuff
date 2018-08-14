import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaylorRoutingComponents, TaylorRoutingModule } from './taylor-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TaylorRoutingModule
  ],
  declarations: [
    TaylorRoutingComponents
  ]
})

export class TaylorModule {}
