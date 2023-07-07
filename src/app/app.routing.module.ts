import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { DospuntosComponent } from "./formularios/dospuntos/dospuntos.component";
import { CineComponent } from "./formularios/cine/cine.component";
import { ResistenciasComponent } from "./formularios/resistencias/resistencias.component";
import { PizzasComponent } from "./formularios/pizzas/pizzas.component";

const routes:Routes=[   
    {path:'DospuntosComponent', component:DospuntosComponent},
    {path:'CineComponent', component:CineComponent},
    {path:'ResistenciasComponent', component:ResistenciasComponent},
    {path:'PizzasComponent', component:PizzasComponent}
    
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}

