import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { LoginComponent } from './pages/login/login.component';
import { Producto5Component } from './Productos/producto5/producto5.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },  // Ruta principal
  {
    path: "tienda",
    component: TiendaComponent,
    title: "Tienda Neoclothes"
  },
  {
    path: "nosotros",
    component: NosotrosComponent,
    title: "Nosotros Neoclothes"
  },

  {
    path: "contacto",
    component: ContactoComponent,
    title: "Contacto Neoclothes"
  },
  {
    path: "login",
    component: LoginComponent,
    title: "login"
  },
  {
    path: "product/:id",
    component: Producto5Component,
    title: "product/:id"
  }
];
