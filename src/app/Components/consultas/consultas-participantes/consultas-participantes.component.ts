import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ConsultasService } from '../../../Services/consultas.service';
import { ParticipantePrueba } from '../../../Models/Pruebas/participantePrueba.model';
import { Cambio } from '../cambio';
import { MatRadioChange } from '@angular/material';
import {saveAs} from 'file-saver';


@Component({
  selector: 'app-consultas-participantes',
  templateUrl: './consultas-participantes.component.html',
  styleUrls: ['./consultas-participantes.component.css']
})
export class ConsultasParticipantesComponent implements OnInit {

  cambios: [Cambio] = [null];
  tipoConsulta: string;
  consulta: {};

  onChange(cambio: MatRadioChange) {
    this.tipoConsulta = cambio.value;
 } 

  constructor(public consultasService: ConsultasService) {}

  ngOnInit() {
  }

  traerTodos() {
    this.consultasService.getTodos()
        .subscribe(res => {
          //this.consultasService.participantes = res as Participante[];
          this.consultasService.participantes = res as ParticipantePrueba[];
          console.log(res);
    });
  }
  
  getParticipante(form: NgForm){
    if (form.invalid) {
      return;
    }
    
    this.consultasService.getParticipantes(form.value.parameter, this.tipoConsulta)
        .subscribe(res => {
          //this.consultasService.participantes = res as Participante[];
         this.consulta=  this.consultasService.participantes = res as ParticipantePrueba[];
          console.log(res);
    });
  }

  prepararCambio(id, nombre, campo: string){
    let cambio = new Cambio(id, nombre, campo);
    console.log(campo);
    this.cambios.push(cambio);
  }

  guardar(){
    for(let cambio of this.cambios){

      if(cambio == null){
        continue
      }
      this.consultasService.editParticipante(cambio.id, cambio.nuevo, cambio.campo)
        .subscribe();
    }

    this.traerTodos();
    this.cancelar();
  }

  cancelar(){
    this.cambios = [null];
  }

  eliminar(id, nombre: string){
    if(confirm("Se borrará el participante " + nombre)) {
      this.consultasService.borrarParticipante(id)
        .subscribe();
    }
    
    this.traerTodos();
    this.cancelar();
  }

  descarga(){
    console.log("entra");
    console.log(this.consulta);
    var fileName = 'Consulta.xlsx'
    this.consultasService.descarga(fileName,this.consulta).subscribe(
      data => saveAs(data,fileName),
      error => console.error(error)
    );
  }
}