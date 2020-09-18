import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnosFormComponent } from './components/alumnos/alumnos-form.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { CursosComponent } from './components/cursos/cursos.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'alumnos'},
  {path: 'alumnos',component:AlumnosComponent}, 
  {path: 'alumnos/form',component:AlumnosFormComponent}, 
  {path: 'cursos',component:CursosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
