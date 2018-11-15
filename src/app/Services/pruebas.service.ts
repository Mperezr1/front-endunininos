import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

import { Participante } from '../Models/participante.model';
import {Grupo} from "../Models/grupo.model";

@Injectable({ providedIn: "root" })


export class PruebasService {


  readonly URL = "http://localhost:3000/api/pruebas";
  private participantes: Participante[] = [];
  private participantesUpdated = new Subject<Participante[]>();
  
  
    constructor(private http: HttpClient) {}

    getPostUpdateListener() {
      return this.participantesUpdated.asObservable();
    }    


    addPostPP(pp: Participante) {
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