import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FormularioContactoComponent } from '../../components/formulario-contacto/formulario-contacto.component';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,FormularioContactoComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

}
