import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MenuComponent } from './formularios/menu/menu.component';
import { ResistenciasModule } from './formularios/resistencias/resistencias.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DospuntosModule } from './formularios/dospuntos/dospuntos.module';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ResistenciasModule,
    BrowserAnimationsModule,
    DospuntosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
