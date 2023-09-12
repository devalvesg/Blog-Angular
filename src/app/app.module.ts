import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { TituloPrincipalComponent } from 'src/app/components/titulo-principal/titulo-principal.component';
import { CardPrincipalComponent } from 'src/app/components/card-principal/card-principal.component';
import { CardsSecundariosComponent } from 'src/app/components/cards-secundarios/cards-secundarios.component';
import { ContentComponent } from './pages/content/content.component';


@NgModule({
  declarations: [
    AppComponent, HomeComponent, NavbarComponent,TituloPrincipalComponent, CardPrincipalComponent, CardsSecundariosComponent, ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
