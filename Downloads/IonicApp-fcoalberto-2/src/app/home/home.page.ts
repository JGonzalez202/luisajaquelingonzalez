import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
 

export class HomePage {

  slider = [ {
    title:'portada',
    description:'Presentación del foro',
    image:"assets/icon/Portada.jpg"
},
{
    title:'convocatoria',
    description:'Convocatoria del foro',
    image:"assets/icon/Convocatoria.jpg"
},
{
    title:'objetivos',
    description:'Presentación del foro',
    image:"assets/icon/Objetivos.jpg"
},
]

constructor(private ruta:Router) { 

}

  registro(){
    this.ruta.navigate(["/home/registro"]);
  }

  actividades(){
    this.ruta.navigate(["/home/actividades"]);
  }

  programa(){
    this.ruta.navigate(["/home/programa"]);
  }

}
