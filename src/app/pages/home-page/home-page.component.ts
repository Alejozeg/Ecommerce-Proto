import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CardsComponent } from '../../components/cards/cards.component';
import { GaleriaTiendaComponent } from '../../components/galeria-tienda/galeria-tienda.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CardsComponent,GaleriaTiendaComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']  // Corrección aquí
})
export class HomePageComponent {

}
