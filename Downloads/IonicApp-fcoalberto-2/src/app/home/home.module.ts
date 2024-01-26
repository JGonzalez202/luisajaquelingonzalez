import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HomePageRoutingModule } from './home-routing.module';
import { LoginComponent } from './login/login.component';
import { RecoverComponent } from './recover/recover.component';
import { IntegraComponent } from './integra/integra.component';
import { RegistraComponent } from './registra/registra.component';
import { AccessComponent } from './access/access.component';
import { InstitucionesComponent } from '../principal/instituciones/instituciones.component';
import { RegistroComponent } from './registro/registro.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { ProgramaComponent } from './programa/programa.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule, ReactiveFormsModule,
    HttpClientModule, // Importa HttpClientModule aquí

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
    ],
  declarations: [HomePage,LoginComponent,RecoverComponent,IntegraComponent,RegistraComponent,
    AccessComponent,InstitucionesComponent, RegistroComponent, ActividadesComponent, ProgramaComponent]
})
export class HomePageModule {}
