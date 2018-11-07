import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Actividad } from '../Models/programa.model';


@Injectable({
  providedIn: 'root'
})

export class CronogramaService {

  readonly URL = "api/";
  actividades: Actividad[] = [];

  constructor(private http: HttpClient) { }

  getCronograma(programa: string) {
    return this.http.get(this.URL + "getCronograma/" + programa);
  }

  putCronograma(actividad: Actividad, programa: string){
    return this.http.put(this.URL + "cronogramaAgregar/" + programa, actividad);
  }

  borrarActividad(actividad: string, programa: string) {
    return this.http.delete(this.URL + "borrarActividad/" + actividad + "/" + programa);
  }
}
