import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userpAuthPrueba} from '../Models/Pruebas/userpAuthPrueba.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { regularUser } from '../Models/regularUser.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private token: string;
public actualPriority: number;
private userName: string;
private authStatus = new Subject<boolean>();

getToken() {
  return this.token;
}

getAuthStatus(){
  return this.authStatus.asObservable();
}

getPriority(){
  return this.actualPriority;
}

getUserName(){
  return this.userName;
}

//Esto es para usuarios regulares
createUser(nombreIn: string, apellidoIn: string, emailIn: string, passwordIn: string, documentoIn: number, contactoIn: number){
const authData: regularUser = {
  nombre: nombreIn,
  apellido: apellidoIn,
  prioridad: null, 
  documento: documentoIn,
  contacto: contactoIn,
  email: emailIn, 
  password: passwordIn
}
this.http.post<{message: number, token: string}>("https://safe-cliffs-35380.herokuapp.com/api/auth/signup",authData).subscribe(res => {  
  if(res.message === 0){
    alert("Usuario creado exitosamente.");
    this.login(authData.email, authData.password);
  }else if(res.message === 1){
    alert("Usuario ya existe");
  }else {
    alert("Problema al registrar.");
  }
});
}

createAdmin(nombreIn: string, apellidoIn: string, emailIn: string, passwordIn: string, documentoIn: number, contactoIn: number){
const authData: regularUser = {
  nombre: nombreIn,
  apellido: apellidoIn,
  documento: documentoIn,
  prioridad: null,
  contacto: contactoIn,
  email: emailIn, 
  password: passwordIn
}
this.http.post<{message: number, token: string}>("https://safe-cliffs-35380.herokuapp.com/api/auth/signupAdmin",authData).subscribe(res => {  
  if(res.message === 0){
    alert("Usuario creado exitosamente.");
  }else if(res.message === 1){
    alert("Usuario ya existe");
  }else {
    alert("Problema al registrar.");
  }
});
}

login(emailIn: string, passwordIn: string) {
const authData = {
  email: emailIn, 
  password: passwordIn
}
this.http.post<{token: string, priorty: number}>("https://safe-cliffs-35380.herokuapp.com/api/auth/login",authData).subscribe(res => {
  const tokenIn = res.token;
  this.actualPriority = res.priorty;
  this.token = tokenIn;
  if(tokenIn){
  this.authStatus.next(true);
  this.userName = authData.email;
  this.router.navigate(['/home']);
  }
});
}

logout() {
  this.token = null;
  this.authStatus.next(false);
  this.router.navigate(['/']);
}

constructor(private http: HttpClient, private router: Router) { }
}
