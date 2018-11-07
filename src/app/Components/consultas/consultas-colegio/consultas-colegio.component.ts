import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConsultasService } from 'src/app/Services/consultas.service';
import { ParticipantePrueba } from 'src/app/Models/Pruebas/participantePrueba.model';

@Component({
  selector: 'app-consultas-colegio',
  templateUrl: './consultas-colegio.component.html',
  styleUrls: ['./consultas-colegio.component.css']
})
export class ConsultasColegioComponent implements OnInit {

  constructor(public consultasService: ConsultasService) { }

  ngOnInit() {
  }

  getParticipantes(form: NgForm){
    if (form.invalid) {
      return;
    }
    
    this.consultasService.getColegio(form.value.colegio)
        .subscribe(res => {
          //this.consultasService.participantes = res as Participante[];
          this.consultasService.participantes = res as ParticipantePrueba[];
        console.log(res);
    });
  }

}
