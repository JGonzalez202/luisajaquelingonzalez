import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent  implements OnInit {

  email:string = "";
  password:string = "";
  loginForm = new FormGroup({

    nombre:new FormControl(''),
    matricula: new FormControl(''),
    password: new FormControl(''),
    telefono: new FormControl(''),
    email: new FormControl('')


  });
//private httpClient: HttpClient --private ruta:Router
  constructor( ) { }

  ngOnInit() {}

/*
  enviarValor() {
   // idusuario": 19090,
	 // "nombre": " Luisa Jaquelin",
		//"paterno": "González",
		//"materno": "González",
		//"telefono": "5511221100",
		//"correo": "albertlg23@gmail.com",
		//"contrasena": "12345",
		//"id_perfil": 1,
		//"id_institutucion": 1
    const idusuario = 3400;//this.loginForm.controls.nombre.value;
    const nombre = " Luisa Jaquelin_pruebaAPI";//this.loginForm.controls.nombre.value;
    const paterno = "González";//this.loginForm.controls.nombre.value;
    const materno = "González";//this.loginForm.controls.nombre.value;
    const telefono = "5511221100";//this.loginForm.controls.nombre.value;
    const correo = "api@gmail.com";//this.loginForm.controls.nombre.value;
    const contrasena = "12345";//this.loginForm.controls.nombre.value;
    const id_perfil = "1";//this.loginForm.controls.nombre.value;
    const id_institutucion = "1";//this.loginForm.controls.nombre.value;

    // Lógica para enviar el valor a través de la API
    this.httpClient.post('http://localhost:3501/api/v1/insertar/usuarios',
     { idusuario,nombre,paterno,materno,telefono,correo,contrasena,id_perfil,id_institutucion })
      .subscribe((response) => {
        console.log('Respuesta de la API:', response);
        // Puedes manejar la respuesta según tus necesidades
      });
  }
  */
  guardar(){
    
    console.log(this.loginForm.value);
    console.log(this.loginForm.controls.email.value);
    this.email = this.loginForm.controls.email.value + "";
    this.password = this.loginForm.controls.password.value + "";

    if(this.password === "123456"){
      console.log("Acceso permitido");
     // this.ruta.navigate(['/home/actividades'])
    } else{
      console.log("Acceso denegado");
    }

    
  }
  // Método para realizar una solicitud GET con fetch
  consultarSocio() {
    // Construye la URL con los parámetros del formulario
    const url = `http://localhost:3501/api/consulta/usuarios`;

    // Realiza la solicitud a la API utilizando Axios
    axios.get(url
  /*{
  params: {
    parametro1: this.formData.parametro1,
    parametro2: this.formData.parametro2
  }
}*/)
      .then(response => {
        // Maneja la respuesta de la API aquí
        console.log('Respuesta de la API consulta:', response.data);
      })
      .catch(error => {
        // Maneja los errores aquí
        console.error('Error al realizar la solicitud:', error);
      });
  }

 insertarSocio() {
    // URL a la que se enviará la solicitud POST
    const url = 'http://localhost:3501/api/insertar/usuarios';

    // Datos que se enviarán en el cuerpo de la solicitud POST
    const datos = {
      idusuario :5555,
      nombre :" Luisa Jaquelin_pruebaAPI",
      paterno : "González",
      materno : "González",
      telefono : "5511221100",
      correo : "api@gmail.com",
      contrasena : "12345",
      id_perfil :"1",
      id_institutucion :"1"
      };

    // Realiza la solicitud POST a la API utilizando Axios
    axios.post(url, datos)
      .then(response => {
        // Maneja la respuesta de la API aquí
        console.log('Insert ok', response.data);
      })
      .catch(error => {
        // Maneja los errores aquí
        console.error('Error al realizar la inserccion:', error);
      });
  }
  actualizarSocio() {
    const id= "5555"
//    nuevoValor: string
    // URL del recurso a actualizar en la API
    const url = `http://localhost:3501/api/actualizar/usuarios/${id}`;

    // Datos que se enviarán en el cuerpo de la solicitud POST
    const datos = {
	  nombre: " 5555 ",
		paterno: "555",
		materno: "555",
		telefono: "5511221100",
		correo: "albertlg23@gmail.com",
		contrasena: "12345",
	  id_perfil: 1,
		id_institutucion: 12
    };

    // Realiza la solicitud POST a la API utilizando Axios
    axios.put(url, datos)
      .then(response => {
        // Maneja la respuesta de la API aquí
        console.log('Socio actualizado:', response.data);
      })
      .catch(error => {
        // Maneja los errores aquí
        console.error('No se actualizo:', error);
      });
  }  
borrarSocio() {
    const id= "5555"
//    nuevoValor: string
    // URL del recurso a actualizar en la API
    const url = `http://localhost:3501/api/usuarios/${id}`;

    
    // Realiza la solicitud POST a la API utilizando Axios
    axios.delete(url)
      .then(response => {
        // Maneja la respuesta de la API aquí
        console.log('Socio eliminado:', response.data);
      })
      .catch(error => {
        // Maneja los errores aquí
        console.error('Error al realizar la solicitud:', error);
      });
  }  
}



