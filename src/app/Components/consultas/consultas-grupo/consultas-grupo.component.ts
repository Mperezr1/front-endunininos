import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ConsultasService } from '../../../Services/consultas.service';
import { ParticipantePrueba } from 'src/app/Models/Pruebas/participantePrueba.model';

@Component({
  selector: 'app-consultas-grupo',
  templateUrl: './consultas-grupo.component.html',
  styleUrls: ['./consultas-grupo.component.css']
})
export class ConsultasGrupoComponent implements OnInit {

  constructor(public consultasService: ConsultasService) { }

  ngOnInit() {
  }

  getParticipantes(form: NgForm){
    if (form.invalid) {
      return;
    }
    
    this.consultasService.getGrupo(form.value.grupo)
        .subscribe(res => {
          //this.consultasService.participantes = res as Participante[];
          this.consultasService.participantes = res as ParticipantePrueba[];
        console.log(res);
    });
  }
}
