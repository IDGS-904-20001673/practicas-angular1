import { Component } from '@angular/core';
import { cliente, pedido } from './interfaces';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent {
  nombre="";
  telefono:number=0;
  fecha="";
  direccion="";
  precio:number=0;
  total:number=0;
  tamanio="";
  ingredientes:string[]=[];
  ing="";
  ing2="";
  ing3="";
  cantidad:number=0;
  sub:number=0;
  pedidos: pedido[]=[];
  clientes: cliente[]=[];

 

  subtotal(){
    this.ingredientes=[];
    if(this.tamanio == "Chica") 
        this.precio=40;
    if (this.tamanio == "Mediana")
        this.precio=80;
    if (this.tamanio == "Grande")
        this.precio=120;

        if(this.ing)
        this.ingredientes.push("Jamon")

        if(this.ing2)
        this.ingredientes.push("Piña")

        if(this.ing3)
        this.ingredientes.push("Champiñones")
        

        if (this.ingredientes.length > 0) {
            for (const pizza of this.ingredientes) {
              if (pizza == "Jamon") {
                this.precio += 10;
              }
              if (pizza == "Piña") {
                this.precio += 10;
              }
              if (pizza == "Champiñones") {
                this.precio += 10;
              }
            }
          } else {
            this.ingredientes.push(this.ing);
          }
          

        this.sub=this.precio*this.cantidad;
       
        this.pedidos.push(
            {
                tamanio:this.tamanio,
                ingredientes:this.ingredientes,
                cantidad:this.cantidad,
                subtotal:this.sub
            })
  }


  eliminarPedido(index: number) {
    this.pedidos.splice(index, 1);
  }
  
  generarCompra(){
    
  Swal.fire({
    title: '¿Deseas continuar?',
    showCancelButton: true,
    confirmButtonText: 'Aceptar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
        for (let i=0; i < this.pedidos.length; i++) {
            this.total =this.total+ this.pedidos[i].subtotal;
          }
          
    this.clientes.push({
        nombre:this.nombre,
        fecha:this.fecha,
        direccion:this.direccion,
        telefono:this.telefono,
        precio:this.total
    }
    )
    this.pedidos=[];
    
    } else if (result.dismiss === Swal.DismissReason.cancel) {

    }
  });

}

}
