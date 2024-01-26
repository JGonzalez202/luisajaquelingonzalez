import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { AccessComponent } from './access/access.component';
import { RecoverComponent } from './recover/recover.component';
import { InstitucionesComponent } from '../principal/instituciones/instituciones.component';
import { RegistroComponent } from './registro/registro.component';
import { ProgramaComponent } from './programa/programa.component';
import { ActividadesComponent } from './actividades/actividades.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    
  },
  {
    path: 'acceso',
    component: AccessComponent,
    
  },
  {
    path: 'registro',
    component: RegistroComponent,
    
  },
  {
    path: 'programa',
    component: ProgramaComponent,
    
  },
  {
    path: 'actividades',
    component: ActividadesComponent,
    
  },
  {
    path: 'recupera',
    component: RecoverComponent,
    
  },
  {
    path: 'instituciones',
    component: InstitucionesComponent,
    
  },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
