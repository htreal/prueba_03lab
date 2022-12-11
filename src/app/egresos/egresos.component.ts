import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import {EgresosService } from 'src/app/egresos/egresos.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {
  formulario:any;
  egreso:any;
  egreso_enviar = {
    descripcion:null,
    precio:null,
    id_usuario:null
  }
  egresos:any;
  constructor(
    private egresoSrv:EgresosService,
    private fb:FormBuilder ) { }

  ngOnInit(): void {
    this.egreso = this.fb.group({
      descripcion:['',[Validators.required]],
      precio:['',[Validators.required,Validators.min(0)]],
      id_usuario:['',[Validators.required]]
    });
  }

  //obtener los las validaciones
  get egresoReactivo(){
    return this.egreso.controls;
  }

  botonEnviar(){
    this.egreso_enviar.descripcion = this.egresoReactivo.descripcion.value
    this.egreso_enviar.precio = this.egresoReactivo.precio.value
    this.egreso_enviar.id_usuario = this.egresoReactivo.id_usuario.value

console.log(this.egreso_enviar)
    this.egresoSrv.crear_egreso(this.egreso_enviar).subscribe(
      (response:any) => {
        this.egresos = response.egresos;
        console.log("Los datos recibidos son")
        console.log(this.egreso)
      }, error =>{
        console.log(error)
      }
    )
    //console.log(this.egresoReactivo);
  }

  obtenerEgreso(){
    this.egresoSrv.obtener_egresos().subscribe(
      (response:any) => {
        this.egresos = response.egresos
        console.log(this.egreso);

      }, error => {
        console.log(error)
      }
    )
  

  }
  obtenerEgresoUsuario(){
    this.egresoSrv.obtener_egresos_usuario().subscribe(
      (response:any) => {
        this.egresos = response.egresos
        console.log(this.egreso);
      }, error => {
        console.log(error)
      }

    )
  }
  
  }


