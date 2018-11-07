import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ConsultasService } from '../../../Services/consultas.service';
import { ParticipantePrueba } from '../../../Models/Pruebas/participantePrueba.model';

@Component({
  selector: 'app-consultas-documento',
  templateUrl: './consultas-documento.component.html',
  styleUrls: ['./consultas-documento.component.css']
})
export class ConsultasDocumentoComponent implements OnInit {

  constructor(public consultasService: ConsultasService) {}

  ngOnInit() {
  }
  
  getParticipante(form: NgForm){
    if (form.invalid) {
      return;
    }
    
    this.consultasService.getDocumento(form.value.documento)
        .subscribe(res => {
          //this.consultasService.participantes = res as Participante[];
          this.consultasService.participantes = res as ParticipantePrueba[];
          console.log(res);
    });
  }

  editEmployee(form: NgForm){
    console.log('holaa')
  }
}
