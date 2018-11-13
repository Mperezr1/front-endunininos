import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-registro-monitor',
  templateUrl: './registro-monitor.component.html',
  styleUrls: ['./registro-monitor.component.css']
})
export class RegistroMonitorComponent implements OnInit {
  onSignup(form: NgForm){
    if(form.invalid){
      alert("Por favor llene el formulario.");
    }else{
    this.authService.createMonitor(form.value.nombre, form.value.apellido, form.value.email, form.value.password, form.value.documento, form.value.contacto);
    }
  }
  
    constructor(public authService: AuthService) { }
  
    ngOnInit() {
    }

}
