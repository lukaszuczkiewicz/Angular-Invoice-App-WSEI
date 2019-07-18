import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoicingModule } from './invoicing/invoicing.module';
import { HeroModule } from './hero/hero.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ClientsComponent } from './clients/clients/clients.component';
import { ClientsPositionsComponent } from './clients/clients-positions/clients-positions.component';
import { ClientSinglePositionComponent } from './clients/client-single-position/client-single-position.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientsComponent,
    ClientsPositionsComponent,
    ClientSinglePositionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InvoicingModule,
    HeroModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
