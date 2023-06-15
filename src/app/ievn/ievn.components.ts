import { Component } from "@angular/core";

@Component({
    selector:'app-ievn',
    template:`
     <h2>Alumno IEVN904</h2>
    <div>Matricula: {{Alumnos.matricula}}</div>
    <div>Nombre: {{Alumnos.nombre}}</div>
    <div>Edad de nacimiento: {{Alumnos.edad}}</div>
    <div>Correo: {{Alumnos.correo}}</div>
    `
})
export class ievnComponent{
    constructor(){

    }
    Alumnos={
        matricula:1234,
        nombre:'Leo',
        edad:21,
        correo:'Leonel@gmail.com'
       
      };
      
}

