import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { PreguntasService } from '../../Services/preguntas.service';
import { PreguntasModel } from '../../Models/pregunta.model';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  constructor(public preguntasService: PreguntasService) { }

  ngOnInit() {
  }

  putPregunta(form: NgForm){
    if (form.invalid) {
      return;
    }
    
    this.preguntasService.getPregunta(form.value.pregunta)
        .subscribe(res => {
          //this.consultasService.participantes = res as Participante[];
          this.preguntasService.preguntas = res as PreguntasModel[];
          console.log(res);
    });
  }

  modificar(){
    alert('Falta Implementacion');
  }

}
