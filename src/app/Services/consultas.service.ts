import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ParticipantePrueba } from '../Models/Pruebas/participantePrueba.model';
import { Participante } from '../Models/participante.model';
import { Subject } from "rxjs";

import {Grupo} from '../Models/Pruebas/grupoPrueba.model';
import { mapToExpression } from '@angular/compiler/src/render3/view/util';



@Injectable({
  providedIn: 'root'
})

export class ConsultasService {

  readonly URL = "https://safe-cliffs-35380.herokuapp.com/api/consultas";
  readonly URL2 = "https://safe-cliffs-35380.herokuapp.com/api/asignacionGrupos";
  //public participantes: Participante[] = [];
  participantes: ParticipantePrueba[] = [];

  constructor(private http: HttpClient) { }

  getNombre(nombre: string) {
    return this.http.get(this.URL + "Nombre/" + nombre);
  }

  getDocumento(documento: string) {
    return this.http.get(this.URL + "Documento/" + documento);
  }



  getColegio(colegio: string) {
    return this.http.get(this.URL + "Colegio/" + colegio);
  }

  getGrupo(grupo: string) {
    return this.http.get(this.URL + "Grupo/" + grupo);
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

}
