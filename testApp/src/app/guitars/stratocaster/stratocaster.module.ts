import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StratocasterComponent } from './stratocaster.component';
import { StratocasterRoutingModule } from './stratocaster-routing.module';

@NgModule({
  imports: [
    CommonModule,
    StratocasterRoutingModule
  ],
  declarations: [
    StratocasterComponent
  ]
})

export class StratocasterModule {}
