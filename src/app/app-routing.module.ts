import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import {InicioComponent} from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import {RegistroComponent} from './componentes/registro/registro.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'login', component:LoginComponent},
  {path: 'home', component:HomeComponent},
  {path: 'registro', component:RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [InicioComponent, LoginComponent]
