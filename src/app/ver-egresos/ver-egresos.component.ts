import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import {EgresosService } from 'src/app/egresos/egresos.service';


@Component({
  selector: 'app-ver-egresos',
  templateUrl: './ver-egresos.component.html',
  styleUrls: ['./ver-egresos.component.css']
})
export class VerEgresosComponent {
  egreso:any;
  egresos:any;
  constructor(
    private egresoSrv:EgresosService,
    private fb:FormBuilder ) { }
  
    obtenerEgreso(){
      this.egresoSrv.obtener_egresos().subscribe(
        (response:any) => {
          this.egresos = response.egresos
          console.log(this.egresos);
  
        }, error => {
          console.log(error)
        }
      )
    }
  
    eliminar(id:any){
      console.log(id)
    }
    obtenerEgresoUsuario(){
      this.egresoSrv.obtener_egresos_usuario().subscribe(
        (response:any) => {
          this.egresos = response.egresos
          console.log(this.egresos);
        }, error => {
          console.log(error)
        }
  
      )
    }
  }
  
