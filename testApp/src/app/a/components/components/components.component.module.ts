import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components.component';
import { DropdownDefaultComponent } from '../dropdown-default/dropdown-default.component';

@NgModule({
  declarations: [
    ComponentsComponent,
    DropdownDefaultComponent
  ],
  imports: [
    BrowserModule,
  ],
})
export class ComponentsModule { }
