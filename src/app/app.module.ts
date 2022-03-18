import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Highlighter } from './Highlighter/basic.directive';
import { NumbersComponent } from './numbers/numbers.component';
import { BetterDirectiveDirective } from './Highlighter/better-directive.directive';
import { StructuralDirectiveDirective } from './Highlighter/structural-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    NumbersComponent,
    Highlighter,
    BetterDirectiveDirective,
    StructuralDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
