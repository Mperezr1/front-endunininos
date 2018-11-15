import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Participante } from '../Models/participante.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService implements OnInit{
  participantes: Participante[] = [];

getAcudientes(){

  return this.http.get( 'https://quiet-retreat-14647.herokuapp.com/api/profile/acudientes' );

}
ngOnInit(): void {
}

constructor(private http: HttpClient) { }

}
