import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { HeadermasterComponent } from './headermaster/headermaster.component';

@NgModule({
  declarations: [
    OrdenesComponent,
    HeadermasterComponent
  ],
  exports:[
    OrdenesComponent,
    HeadermasterComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
  
})
export class ComponentsModule { }
