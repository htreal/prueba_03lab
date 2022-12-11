import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UsuariosService } from 'src/app/usuarios/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  formulario:any;
  usuario:any;
  usuario_enviar = {
    nombre:null,
    apellido:null,
    rut:null,
    correo:null,
    password:null
  }
  usuarios:any;
  constructor(
    private usuarioSrv:UsuariosService,
    private fb:FormBuilder ) { }

  ngOnInit(): void {
    this.usuario = this.fb.group({
      nombre:['',[Validators.required]],
      apellido:['',[Validators.required]],
      rut:['',[Validators.required]],
      correo:['',[Validators.required]],
      password:['',[Validators.required]],
    });
  }

  //obtener los las validaciones
  get usuarioReactivo(){
    return this.usuario.controls;
  }

  botonEnviar(){
    this.usuario_enviar.nombre = this.usuarioReactivo.nombre.value
    this.usuario_enviar.apellido = this.usuarioReactivo.apellido.value
    this.usuario_enviar.rut = this.usuarioReactivo.rut.value
    this.usuario_enviar.correo = this.usuarioReactivo.correo.value
    this.usuario_enviar.password = this.usuarioReactivo.password.value

console.log(this.usuario_enviar)
    this.usuarioSrv.crear_usuario(this.usuario_enviar).subscribe(
      (response:any) => {
        this.usuarios = response.egresos;
        console.log("Los datos recibidos son")
        console.log(this.usuario)
      }, error =>{
        console.log(error)
      }
    )
    //console.log(this.egresoReactivo);
  }

  obtenerUsuario(){
    this.usuarioSrv.obtener_usuarios().subscribe(
      (response:any) => {
        this.usuarios = response.usuarios
        console.log(this.usuario);

      }, error => {
        console.log(error)
      }
    )
  }

  eliminar(id:any){
    console.log(id)
  }
}
