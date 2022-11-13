import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: "heroes", component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  // Se agrega dashboard como la ruta por defecto de la aplicacion
  { path: "", redirectTo: "/dashboard" , pathMatch: "full" },
  // Se crea ruta que recibe el id del heroe para mostrar el detalle 
  { path: "detail/:id" , component: HeroDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
