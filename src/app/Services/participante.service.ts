import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

import { Participante } from "../Models/participante.model";


@Injectable({ providedIn: "root" })


export class ParticipanteService {


  readonly URL = "https://quiet-retreat-14647.herokuapp.com/api/participantes";
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