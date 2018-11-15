import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { PreguntasService } from '../../../../Services/preguntas.service';
import { PreguntasModel } from '../../../../Models/pregunta.model';

@Component({
  selector: 'app-modificar-Eliminar',
  templateUrl: './modificar-Eliminar.component.html',
  styleUrls: ['./modificar-Eliminar.component.css']
})
export class ModificarEliminarComponent implements OnInit {

  constructor(public preguntasService: PreguntasService) {
    this.getPreguntas();
  }

  ngOnInit() {}

  getPreguntas(){
    this.preguntasService.getPreguntas()
    .subscribe(res => {
      this.preguntasService.preguntas = res as PreguntasModel[];
      console.log(res);
    });
  }

  putPreguntas(form: NgForm){
    if (form.invalid) {
      return;
    }
    
    this.preguntasService.getPregunta(form.value.pregunta)
        .subscribe(res => {
          this.preguntasService.preguntas = res as PreguntasModel[];
          console.log(res);
    });
  }

  borrarPregunta(id,pregunta: string){
    if(confirm("Se borrará la pregunta "+pregunta)){
      this.preguntasService.deletePregunta(id)
        .subscribe();
      this.getPreguntas();
    }
    this.getPreguntas();
  }
} 


