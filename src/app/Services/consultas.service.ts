import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Participante } from '../Models/participante.model';
import {Grupo} from '../Models/grupo.model';



@Injectable({
  providedIn: 'root'
})

export class ConsultasService {

  readonly URL = "https://quiet-retreat-14647.herokuapp.com/api/consultas";
  readonly URL2 = "https://quiet-retreat-14647.herokuapp.com/api/asignacionGrupos";
  readonly URLEditar = "https://quiet-retreat-14647.herokuapp.com/api/edit";
  //public participantes: Participante[] = [];
  participantes: Participante[] = [];

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get(this.URL);
  }

  getParticipantes(param, tipo: string) {
    return this.http.get(this.URL + tipo + "/" + param);
  }

  getParticipantesAcudiente(param, tipo: string) {
    return this.http.get(this.URL + "Acudiente/" + param);
  }

  editParticipante(id, nuevo, campo: string) {
    return this.http.put(this.URLEditar + "Participante/" + id + "/" + campo + "/" + nuevo, {});
  }

  borrarParticipante(id: string) {
    return this.http.delete(this.URL + "borrarParticipante/" + id);
  }


  getDocumento2(documento: string) {
    return this.http.get(this.URL2 + "Consulta/" + documento);
  }
  asignacionService(documento:string, idGrupo:String){
    console.log("entra al servicio");
    console.log(documento);
    this.http
      .put<{ message: string }>(`${this.URL2}Set/${idGrupo}`+'/'+`${documento}`,documento)
      .subscribe(responseData => {
        console.log(responseData.message);
        console.log(documento);
      });
    
  }

  pasarGrupo(grupo: string){
    const enviarGrupo = {
      pregunta: grupo,
      respuesta: "mosaico"
    };
    this.http
      .post("https://quiet-retreat-14647.herokuapp.com/api/consultas/mosaico",enviarGrupo)
      .subscribe(res => {
        console.log(res+"estoy aqui");
        });
  }

  descarga(fileName:string,consultas:{})  {
    var body = { filename: fileName, consultas:consultas};
    console.log("entra al servicio")
    console.log(body.consultas);
    return  this.http.post(`${this.URL}/Descarga`,body,{
      responseType: 'blob',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
    
  }
}
