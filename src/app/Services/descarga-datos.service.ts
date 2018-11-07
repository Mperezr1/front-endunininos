import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs";
import { HttpClient,HttpResponse,HttpHeaders } from "@angular/common/http";
import { ResponseType } from '@angular/http';
import { map, switchMap, throttle } from 'rxjs/operators';
import { Http, Response } from "@angular/http"
@Injectable({
  providedIn: 'root'
})
export class DescargaDatosService {
      // set headers for the file and response to be Blob
  public headers = new Headers({ 'Content-Type': 'application/json' });
 
   
  constructor(private http: HttpClient) { }
  readonly URL = "https://safe-cliffs-35380.herokuapp.com/api/descarga";
  descargaParticipantesService(fileName:string)  {
    var body = { filename: fileName};
    console.log("entra al servicio")

    return  this.http.post(`${this.URL}Participantes`,body,{
      responseType: 'blob',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
    
  }
}
