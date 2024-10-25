import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-inicia-sesion',
  standalone: true,
  imports: [IniciaSesionComponent, HeaderComponent],
  templateUrl: './inicia-sesion.component.html',
  styleUrl: './inicia-sesion.component.css'
})
export class IniciaSesionComponent {

}
