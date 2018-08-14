import { TaylorComponent } from './taylor/taylor.component';
import { MartimComponent } from './martim/martim.component';
import { AcousticGuitarsComponent } from './acoustic-guitars.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcousticGuitarsRoutingModule } from './acoustic-guitars-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AcousticGuitarsRoutingModule,
  ],
  declarations: [
    AcousticGuitarsComponent,
    MartimComponent,
    TaylorComponent
  ]
})

export class AcousticGuitarModule {}
