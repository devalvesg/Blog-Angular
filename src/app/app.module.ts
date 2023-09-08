import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TituloPrincipalComponent } from './components/titulo-principal/titulo-principal.component';
import { CardPrincipalComponent } from './components/card-principal/card-principal.component';
import { CardsSecundariosComponent } from './components/cards-secundarios/cards-secundarios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TituloPrincipalComponent,
    CardPrincipalComponent,
    CardsSecundariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
