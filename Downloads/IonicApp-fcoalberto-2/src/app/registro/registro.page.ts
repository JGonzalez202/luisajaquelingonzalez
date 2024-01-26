import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
datos : FormGroup;

  constructor(private  formBuilder:FormBuilder) { 
    this.datos= new FormGroup({
      nombre : new FormControl('Jaky',Validators.required),
      matricula :new FormControl('202210961',Validators.required),
      contrasena :new FormControl('1234',[Validators.required,Validators.maxLength(8),Validators.minLength(3)]),
      correo :new FormControl('202210961@hotmail.com',Validators.required),
      telefono :new FormControl('202210961@hotmail.com',Validators.pattern("[0-9]+")),

    })
  }

  ngOnInit() {
  }

  validar(){

  }
}
