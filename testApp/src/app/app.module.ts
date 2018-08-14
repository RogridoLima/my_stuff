import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FunziesComponent } from './funzies/funzies.component';
import { AComponent } from './a/a.component';
import { ComponentsModule } from './a/components/components/components.component.module';
import { DropdownDefaultComponent } from './a/components/dropdown-default/dropdown-default.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FunziesComponent,
    AComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
