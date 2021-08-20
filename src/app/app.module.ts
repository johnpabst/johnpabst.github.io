import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DraftOrderModuleComponent } from './draft-order-module/draft-order-module.component';
import { GenerateOrderComponent } from './generate-order/generate-order.component';
import { DraftOrderCardComponent } from './draft-order-module/draft-order-card/draft-order-card.component';

@NgModule({
  declarations: [
    AppComponent,
    GenerateOrderComponent,
    DraftOrderModuleComponent,
    DraftOrderCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
