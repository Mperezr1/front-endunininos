import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ConsultasService } from '../../Services/consultas.service';
import { ParticipantePrueba } from '../../Models/Pruebas/participantePrueba.model';

@Component({
  selector: 'app-mosaico',
  templateUrl: './mosaico.component.html',
  styleUrls: ['./mosico.component.css']
})
export class MosaicoComponent implements OnInit {

  constructor(public consultasService: ConsultasService) {}

  ngOnInit() {}

  getParticipante(form: NgForm){
    if (form.invalid) {
      return;
    }
    
    this.consultasService.getParticipantes(form.value.grupo, 'Grupo')
        .subscribe(res => {
          this.consultasService.participantes = res as ParticipantePrueba[];
          console.log(res);
    });
  }
}
