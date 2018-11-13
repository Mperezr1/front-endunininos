import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { PreguntasService } from '../../../Services/preguntas.service';
import { PreguntasModel } from '../../../Models/pregunta.model';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  constructor(public PreguntaService: PreguntasService) { 
    PreguntaService.getPreguntas();
  }

  ngOnInit() {
  }

  getPregunta(form: NgForm){
    if (form.invalid) {
      return;
    }
    
    this.PreguntaService.getPregunta(form.value.pregunta)
        .subscribe(res => {
          this.PreguntaService.preguntas = res as PreguntasModel[];
          alert('Se ha eliminado una pregunta ' + form.value.nombre);
          console.log(res);
          form.resetForm();
    });
  }

  AddPost(form: NgForm){
    if (form.invalid) {
      return;
    }
    this.PreguntaService.addPost(form.value);    
    alert('Se ha agregado una pregunta ' + form.value.pregunta);
    form.resetForm();
  }

  deletePost(form: NgForm){
    console.log("entro "+ form.value.pregunta);
    if (form.invalid) {
      return;
    }
    this.PreguntaService.deletePregunta(form.value.pregunta);  
    alert('Se ha eliminado una pregunta ' + form.value.pregunta);
  }
  } 


