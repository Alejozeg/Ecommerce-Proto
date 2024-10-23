

import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']  // Corrección aquí
})
export class CardsComponent {
  img ='https://picsum.photos/640/640?r='+ Math.random()

}
