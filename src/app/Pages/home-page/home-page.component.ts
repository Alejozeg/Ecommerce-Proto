import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CardsComponent } from '../../components/cards/cards.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CardsComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']  // Corrección aquí
})
export class HomePageComponent {

}
