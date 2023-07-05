import { Component } from '@angular/core';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css']
})
export class CineComponent {
  nombre = "";
  compradores: number = 0;
  tarjeta = "";
  boletas: number = 0;
  res: number = 0;
  resB="";

  result() {

    if (this.boletas > this.compradores * 7) {
      this.resB = "No se pudo procesar la compra. La cantidad de boletas por persona debe ser menor o igual a 7.";
      this.res = 0;
    }
    else {
      this.resB="";
      this.res = this.boletas * 12;

      if (this.boletas > 5) {
        this.res = this.res * .85;
      } else if (this.boletas == 3 || this.boletas == 4 || this.boletas == 5) {
        this.res = this.res * .90;
      } else {
        this.res = this.res;
      }
      if (this.tarjeta == "si") {
        this.res = this.res * .90;
      }
    }

  }
}
