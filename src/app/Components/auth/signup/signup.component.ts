import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  onSignup(form:NgForm) {
    if(form.invalid){
      alert("Por favor llene el formulario.");
    }else{
    this.authService.createUser(form.value.nombre, form.value.apellido, form.value.email, form.value.password, form.value.documento, form.value.contacto);
    }
  }

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
