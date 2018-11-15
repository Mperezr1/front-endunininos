import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Participante } from '../Models/participante.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService implements OnInit{
  participantes: Participante[] = [];

getAcudientes(){

  return this.http.get( 'http://localhost:3000/api/profile/acudientes' );

}
ngOnInit(): void {
}

constructor(private http: HttpClient) { }

}
