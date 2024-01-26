import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalPage } from './principal.page';
import { ConferencistasComponent } from './conferencistas/conferencistas.component';
import { ConferencistadetalleComponent } from './conferencistadetalle/conferencistadetalle.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalPage
  },
  {
    path: ':id',
    component: ConferencistadetalleComponent  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalPageRoutingModule {}
