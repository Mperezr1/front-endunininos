import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-registro-admin',
  templateUrl: './registro-admin.component.html',
  styleUrls: ['./registro-admin.component.css']
})
export class RegistroAdminComponent implements OnInit {

onSignup(form: NgForm){
  if(form.invalid){
    alert("Por favor llene el formulario.");
  }else{
  this.authService.createAdmin(form.value.nombre, form.value.apellido, form.value.email, form.value.password, form.value.documento, form.value.contacto);
  }
}

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
