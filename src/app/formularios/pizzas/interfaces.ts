export interface cliente{
    nombre:string;
    fecha:string;
    direccion:string;
    telefono:number;
    precio:number;
}

export interface pedido{
    tamanio:string;
    ingredientes:string[];
    cantidad:number;
    subtotal:number;

}

