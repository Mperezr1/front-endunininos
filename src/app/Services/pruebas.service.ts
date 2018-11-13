import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

import { ParticipantePrueba } from "../Models/Pruebas/participantePrueba.model";
import {Grupo} from "../Models/Pruebas/grupoPrueba.model";

@Injectable({ providedIn: "root" })


export class PruebasService {


  readonly URL = "http://localhost:3000/api/pruebas";
  private participantes: ParticipantePrueba[] = [];
  private participantesUpdated = new Subject<ParticipantePrueba[]>();
  
  
    constructor(private http: HttpClient) {}

    getPostUpdateListener() {
      return this.participantesUpdated.asObservable();
    }    


    addPostPP(pp: ParticipantePrueba) {
      this.http
        .post<{ message: string }>(this.URL, pp)
        .subscribe(responseData => {
          console.log(responseData.message);
        });
    }
    addPostGR(pp: Grupo) {
      console.log("entra al servicio");
      this.http
        .post<{ message: string }>("http://localhost:3000/api/pruebas",pp )
        .subscribe(responseData => {
          console.log(responseData.message);
        });
    }
  }