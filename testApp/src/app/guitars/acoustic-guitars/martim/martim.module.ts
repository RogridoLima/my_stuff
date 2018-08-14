import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MartimRoutingComponents, MartimRoutingModule } from './martim-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MartimRoutingModule
  ],
  declarations: [
    MartimRoutingComponents
  ]
})

export class MartimModule {}
