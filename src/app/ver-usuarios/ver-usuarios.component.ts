import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UsuariosService } from 'src/app/usuarios/usuarios.service';


@Component({
  selector: 'app-ver-usuarios',
  templateUrl: './ver-usuarios.component.html',
  styleUrls: ['./ver-usuarios.component.css']
})
export class VerUsuariosComponent {
  usuario:any;
  usuarios:any;
  constructor(
    private usuarioSrv:UsuariosService,
    private fb:FormBuilder ) { }
  
    obtenerUsuario(){
      this.usuarioSrv.obtener_usuarios().subscribe(
        (response:any) => {
          this.usuario = response.usuarios
          console.log(this.usuario);
  
        }, error => {
          console.log(error)
        }
      )
    }
  
    eliminar(id:any){
      console.log(id)
    }
    obtenerUsuarioEgreso(){
      this.usuarioSrv.obtener_usuarios_egreso().subscribe(
        (response:any) => {
          this.usuario = response.usuarios
          console.log(this.usuario);
        }, error => {
          console.log(error)
        }
  
      )
    }
  }

  



