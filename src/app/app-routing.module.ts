import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EgresosComponent } from './egresos/egresos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { VerEgresosComponent } from './ver-egresos/ver-egresos.component';
import { VerUsuariosComponent } from './ver-usuarios/ver-usuarios.component';

const routes: Routes = [
  {
    path: 'egresos',
    component: EgresosComponent
  },
  {
    path: 'usuarios',
    component: UsuariosComponent
  },
  {
    path: 'ver-egresos',
    component: VerEgresosComponent
  },
  {
    path: 'ver-usuarios',
    component: VerUsuariosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
