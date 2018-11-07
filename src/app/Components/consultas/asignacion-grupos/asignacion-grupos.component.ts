import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../../../Services/consultas.service';
import { NgForm } from "@angular/forms";
import { ParticipantePrueba } from '../../../Models/Pruebas/participantePrueba.model';

@Component({
  selector: 'app-asignacion-grupos',
  templateUrl: './asignacion-grupos.component.html',
  styleUrls: ['./asignacion-grupos.component.css']
})
export class AsignacionGruposComponent implements OnInit {
  public documento:string;
  public documento2:string;

  public consulta;
  public id;
  constructor(public consultasService: ConsultasService) { }

  ngOnInit() {
  }

  setGrupo(form: NgForm) {
    console.log("entra");
    console.log(form.value.idGrupo);
    this.consulta.forEach(element => {
      this.documento2=element.documento;
    });
    console.log(this.documento2);
    if (form.invalid) {

      return;
    }
    this.consultasService.asignacionService(this.documento2,form.value.idGrupo);
    alert('Se ha asignado  al grupo ' +form.value.idGrupo);
    
  }

  getParticipante(form: NgForm){
    this.documento = form.value.numeroDocumento;
    console.log(form.value.numeroDocumento);
    if (form.invalid) {
      return;
    }
    
    this.consultasService.getDocumento2(form.value.numeroDocumento)
        .subscribe(res => {
          //this.consultasService.participantes = res as Participante[];
          this.consulta = this.consultasService.participantes = res as ParticipantePrueba[];
          
          console.log(res);
    });

  }
}
