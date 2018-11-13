import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ParticipanteService } from '../../Services/participante.service'
import { ParticipantePrueba, Acudiente } from '../../Models/Pruebas/participantePrueba.model'
import { ColegioPrueba, Contacto } from '../../Models/Pruebas/colegioPrueba.model'
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.css']
})
export class ParticipantesComponent implements OnInit {
  //informacion acudientes
  private acudientes: Acudiente[] = []; //Lista de acudientes
  private nombreCompleto : string;
  //informacion colegio
  private contactosColegio: Contacto[] = []; //Lista de contactos colegio
  private nombreCompletoContacto: string;
  private celular: string;
  constructor(public ppService: ParticipanteService, public authService: AuthService, private http: HttpClient) { }

  private selectedFile = null;

  ngOnInit() {
  }

  isAdmin() {
    if(this.authService.actualPriority === 2){
      return true;
    }else{
      return false;
    }
  }

  
  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const newColegio: ColegioPrueba = {
      nombre: form.value.nombreColegio,
      contactos: this.contactosColegio,
      barrio: form.value.barrioColegio
    }
    const pp : ParticipantePrueba = {
      nombre : form.value.nombre,
      documento : form.value.documento,
      colegio: newColegio,
      acudientes: this.acudientes
    }
    this.ppService.addPost(pp);
    alert('Se ha agregado el participante ' + form.value.nombre);
    this.contactosColegio = [];
    this.acudientes = []; 
    form.resetForm();
  }
  addTask(event){
    event.preventDefault();
    console.log("acudientes")
    const newAcudiente:Acudiente = {
      nombreCompleto: this.nombreCompleto,
     /* tipoDocumento: this.tipoDocumento,
      documento: this.documento,
      relacion: this.relacion,
      celular: this.celular,
      email: this.email,
      nivelFormacion: this.nivelFormacion,
      areaConocimiento: this.areaConocimiento,
      ocupacion: this.ocupacion,
      lugarTrabajo: this.lugarTrabajo,
      telefonoTrabajo: this.telefonoTrabajo
      */
    };
    this.acudientes.push(newAcudiente);
    this.acudientes.forEach(element => {
      console.log(element);
    });
    
  }
  
  addContactos(event){
    console.log("contactos")

    event.preventDefault();
    const newContacto:Contacto = {
      nombreCompleto: this.nombreCompletoContacto,
      celular: this.celular
     /* tipoDocumento: this.tipoDocumento,
      documento: this.documento,
      relacion: this.relacion,
      celular: this.celular,
      email: this.email,
      nivelFormacion: this.nivelFormacion,
      areaConocimiento: this.areaConocimiento,
      ocupacion: this.ocupacion,
      lugarTrabajo: this.lugarTrabajo,
      telefonoTrabajo: this.telefonoTrabajo
      */
    };
    this.contactosColegio.push(newContacto);
    this.contactosColegio.forEach(element => {
      console.log(element);
    }); 
  }

  onFileSelected(event){
    this.selectedFile = event.target.files[0];
  }

  onUpload(){  }
}
