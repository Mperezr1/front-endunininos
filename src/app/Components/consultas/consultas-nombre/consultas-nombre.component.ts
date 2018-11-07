import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ConsultasService } from '../../../Services/consultas.service';
import { ParticipantePrueba } from 'src/app/Models/Pruebas/participantePrueba.model';

@Component({
  selector: 'app-consultas-nombre',
  templateUrl: './consultas-nombre.component.html',
  styleUrls: ['./consultas-nombre.component.css']
})
export class ConsultasNombreComponent implements OnInit {

  constructor(public consultasService: ConsultasService) {}

  ngOnInit() {
  } 
  
  
  getParticipante(form: NgForm){
    if (form.invalid) {
      return;
    }
    
    this.consultasService.getNombre(form.value.nombre + " " + form.value.apellido)
        .subscribe(res => {
        //this.consultasService.participantes = res as Participante[];
        this.consultasService.participantes = res as ParticipantePrueba[];
        console.log(res);
    });
  }

}
