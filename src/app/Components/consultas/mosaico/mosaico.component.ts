import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ConsultasService } from '../../../Services/consultas.service';
import { Participante } from '../../../Models/participante.model';

@Component({
  selector: 'app-mosaico',
  templateUrl: './mosaico.component.html',
  styleUrls: ['./mosaico.component.css']
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
          this.consultasService.participantes = res as Participante[];
          console.log(res);
    });
  }
}
