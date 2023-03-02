import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { ContactoComponent } from './Componentes/contacto/contacto.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CabeceraNavComponent } from './Componentes/cabecera-nav/cabecera-nav.component';
import { PiePaginaComponent } from './Componentes/pie-pagina/pie-pagina.component';
import { ServiciosCardsComponent } from './Componentes/servicios-cards/servicios-cards.component';
import { RedesSocialesComponent } from './Componentes/redes-sociales/redes-sociales.component';
import { ValoresComponent } from './Componentes/valores/valores.component';
import { ProyectosComponent } from './Componentes/proyectos/proyectos.component';
import { NoticiasComponent } from './Componentes/noticias/noticias.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContactoComponent,
    CabeceraNavComponent,
    PiePaginaComponent,
    ServiciosCardsComponent,
    RedesSocialesComponent,
    ValoresComponent,
    ProyectosComponent,
    NoticiasComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: "", component: InicioComponent},
      {path: "inicio",component:InicioComponent},
      {path: "contacto",component:ContactoComponent},
      {path: "servicios", component:ProyectosComponent},
      {path: "noticias", component:NoticiasComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
