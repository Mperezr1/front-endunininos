import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PreguntasModel } from '../Models/pregunta.model';
import { Subject } from "rxjs";
import { nextTick } from "q";

@Injectable({ providedIn: "root" })

export class PreguntasService {

    readonly URL = "https://safe-cliffs-35380.herokuapp.com/api/preguntas";
    readonly URLE = "https://safe-cliffs-35380.herokuapp.com/api/preguntas/modificar-Eliminar";
    preguntas: PreguntasModel[] = [];
    preguntaEliminar: PreguntasModel[] = [];
    private participantesUpdated = new Subject<PreguntasModel[]>();
  
  
    constructor(private http: HttpClient) {}

    getPostUpdateListener() {
      return this.participantesUpdated.asObservable();
    }
  
    addPost(pp: PreguntasModel) {
      this.http
        .post<{ message: string }>(this.URL, pp)
        .subscribe(responseData => {
          console.log(responseData.message);
          this.preguntas.push(pp);
          this.participantesUpdated.next([...this.preguntas]);
        });
    }

    getPregunta(pregunta: string) {
        return this.http.get(this.URL + "Pregunta/" + pregunta);
      }

    getRespuesta(respuesta: string) {
      return this.http.get(this.URL + "Respuesta/" + respuesta);
    }

    deletePregunta(test: string) {
     const preguntaEliminar = {
       pregunta: test,
       respuesta: "Otro parametro"
     };
     this.http
      .post("api/preguntas/modificar/modificar-Eliminar",preguntaEliminar)
      .subscribe(res => {
      console.log(res+"estoy aqui");
      });
    }
}