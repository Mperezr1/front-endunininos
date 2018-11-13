import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

import { Participante } from "../Models/participante.model";


@Injectable({ providedIn: "root" })


export class ParticipanteService {


  readonly URL = "http://localhost:3000/api/participantes";
  private participantes: Participante[] = [];
  private participantesUpdated = new Subject<Participante[]>();
  
  
    constructor(private http: HttpClient) {}

    getPostUpdateListener() {
      return this.participantesUpdated.asObservable();
    }
  
    addPost(pp: Participante) {
      this.http
        .post<{ message: string }>(this.URL, pp)
        .subscribe(responseData => {
          console.log(responseData.message);
          this.participantes.push(pp);
          this.participantesUpdated.next([...this.participantes]);
        });
    }
  }