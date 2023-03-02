import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera-nav',
  templateUrl: './cabecera-nav.component.html',
  styleUrls: ['./cabecera-nav.component.css']
})
export class CabeceraNavComponent {
  Inicio: string = "Inicio";
  Contacto: string = "Contacto";
  Proyectos:string="Proyectos";
  Noticias:string="Noticias";
}
