import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  bandera = true;

  constructor() { }

  ngOnInit() {
  }

  buscars()
  {
    this.bandera= false;
    console.log(this.bandera);
  }
}
