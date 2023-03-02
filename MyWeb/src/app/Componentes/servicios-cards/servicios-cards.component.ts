import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-servicios-cards',
  templateUrl: './servicios-cards.component.html',
  styleUrls: ['./servicios-cards.component.css'],
})
export class ServiciosCardsComponent {
  TituloServicios:string="Servicios"
  TituloSoporte:string="Soporte Técnico"
  ContenidoSoporte:string='"El soporte técnico que necesitas para mantener tu tecnología en funcionamiento. Siempre listos para ayudarte, con soluciones rápidas y efectivas. Confía en nosotros para resolver tus problemas tecnológicos"'
  TituloSeguridad:string="Intalación y Mantenimieto de CCTV"
  ContenidoSeguridad:string='"Asegura la tranquilidad de tu hogar o negocio con nuestro servicio de instalación y mantenimiento de cámaras de seguridad. Protegemos lo que más valoras con tecnología de vanguardia y atención personalizada"'
  TituloSistemaEsc:string="Sistemas de Escritorio"
  ContenidoSistemaEsc:string='"Potencia el crecimiento de tu empresa con soluciones de software de escritorio a medida. Optimiza procesos, mejora la eficiencia y toma mejores decisiones con nuestras herramientas de software empresarial"'
  TituloSistemaWeb:string="Paginas y sistemas Web"
  ContenidoSistemaWeb:string='"Destaca en línea con una presencia digital impresionante. Creamos páginas web personalizadas que captan la atención y atraen a tu audiencia, para convertir visitantes en clientes leales"'
  TituloMovil:string="Aplicaciones móviles"
  ContenidoMovil:string='"Empodera a tu audiencia en cualquier lugar y en cualquier momento con nuestras aplicaciones móviles a medida. Brindamos soluciones innovadoras que impulsan la satisfacción del usuario y mejoran la experiencia móvil"'
  TituloRedes:string="Administración de redes"
  ContenidoAdminRed:string='"Confía en nuestro servicio de administración de redes para mantener tu negocio en línea. Conectamos, protegemos y optimizamos tu infraestructura para que puedas enfocarte en lo que realmente importa: tu éxito"'
  TituloBoton:string="Información "
}
