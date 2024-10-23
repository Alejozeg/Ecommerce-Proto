import { Component } from '@angular/core';
import { GaleriaTiendaComponent } from '../../components/galeria-tienda/galeria-tienda.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [GaleriaTiendaComponent,HeaderComponent,FooterComponent],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css'
})
export class TiendaComponent {

}
