import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { BodyComponent } from './body/body.component';
import { FicheProduitComponent } from './fiche-produit/fiche-produit.component';
import { ImageComponent } from './image/image.component';
import { ProduitComponent } from './produit/produit.component';
import { NomProduitComponent } from './nom-produit/nom-produit.component';
import { DescriptionComponent } from './description/description.component';
import { PrixComponent } from './prix/prix.component';
import { LienComponent } from './lien/lien.component';
import { PiedPageComponent } from './pied-page/pied-page.component';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    BodyComponent,
    FicheProduitComponent,
    ImageComponent,
    ProduitComponent,
    NomProduitComponent,
    DescriptionComponent,
    PrixComponent,
    LienComponent,
    PiedPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
