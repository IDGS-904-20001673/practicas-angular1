import { Component } from '@angular/core';

//este es un decorador
@Component({
  //esto indica como se va a llamar el componente
  //y los archivos que estan relacionados a ellos
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro-angular-idgs904';
  duplivaValor(valor:number):number{
    return valor*2;
  }
  Alumnos={
    matricula:1234,
    nombre:'Angel',
    fechaNacimiento:new Date(),
    pagoIns:2759.1
  };
  

}
