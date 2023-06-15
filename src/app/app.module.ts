//aqui van las librerias que se trabajan en el proyecto
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { escuelaComponent } from './escuela/escuela.component';
import { ievnComponent } from './ievn/ievn.components';
import { IricComponent } from './escuela/iric/iric.component';

//aqui agregamos nuestras referencias a otros htmls
@NgModule({
  declarations: [
    AppComponent,
    escuelaComponent,
    ievnComponent,
    IricComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
