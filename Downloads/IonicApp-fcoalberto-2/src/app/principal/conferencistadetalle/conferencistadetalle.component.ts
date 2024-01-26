
import { IonicModule } from '@ionic/angular';

import { Component, OnInit } from '@angular/core';
import { DatasetconferencistasService } from '../conferencistas/datasetconferencistas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conferencistadetalle',
  templateUrl: './conferencistadetalle.component.html',
  styleUrls: ['./conferencistadetalle.component.scss'],
})

export class ConferencistadetalleComponent  implements OnInit {
  ids: any={};
  idrecuepa:string="";
  constructor(private datasetconferencistasserv:DatasetconferencistasService,private rutaactual:ActivatedRoute) { }

  ngOnInit() {
  this.rutaactual.paramMap.subscribe(p=>{
  this.idrecuepa =  p.get('id')+"";
  let i:number=  parseInt(this.idrecuepa);
  this.ids = this.datasetconferencistasserv.obtenerid(i-1);
  console.log(this.ids);
  })
 
  }

}
