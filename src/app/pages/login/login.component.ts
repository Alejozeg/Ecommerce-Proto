import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ApiLoginService } from '../../services/api-login.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {
  email: string = '';
  password: string = '';

  private apiLoginService = inject(ApiLoginService);
  private  rotues = inject(Router);

  // Método que se ejecuta al enviar el formulario
  onSubmit() {
    const loginData = {
      email: this.email,
      password: this.password
    };

    // Llamada al servicio de login
    this.apiLoginService.login(loginData).subscribe({
      next: (response) => {
        // Aquí se maneja la respuesta exitosa
        console.log('Login exitoso:', response);
        Swal.fire({
          icon: "success",
          title: "Login exitoso",
          text: "¡Has ingresado correctamente!",
          footer: '<a href="#">Continúa comprando</a>'
        });
        this.rotues.navigate([''])
      },
      error: (err) => {
        // Aquí se maneja el error
        console.log('Error en el login:', err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Correo o contraseña incorrectos",
          footer: '<a href="#">Verifica tus datos</a>'
        });
      }
    });
  }
}
