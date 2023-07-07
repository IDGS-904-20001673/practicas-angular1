import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { PizzasComponent } from './pizzas.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ PizzasComponent,],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule
  ],
  exports:[
    PizzasComponent,
  ]
})
export class PizzasModule { }
