import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url_backend = environment.url_backend+'/usuario';

  constructor(
    private http:HttpClient
  ) { }
  crear_usuario(datos:any){
    return this.http.post(`${this.url_backend+'/crear-usuario' }`,datos)
  }
  obtener_usuarios(){
    return this.http.get(`${this.url_backend+'/obtener-usuarios' }`)
}
  obtener_usuarios_egreso(){
    return this.http.get(`${this.url_backend+'/obtener-usuarios_egreso' }`)
  }
}
