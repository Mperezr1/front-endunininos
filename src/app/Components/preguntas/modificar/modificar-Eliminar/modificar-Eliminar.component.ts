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

  constructor(public PreguntaService: PreguntasService) { }

  ngOnInit() {
  }

  getPregunta(form: NgForm){
    if (form.invalid) {
      return;
    }
    
    this.PreguntaService.getPregunta(form.value.pregunta)
        .subscribe(res => {
          this.PreguntaService.preguntas = res as PreguntasModel[];
          alert('Se ha eliminado una pregunta ' + form.value.preguntaE);
          console.log(res);
    });
  }

  AddPost(form: NgForm){
    if (form.invalid) {
      return;
    }
    this.PreguntaService.addPost(form.value);    
    alert('Se ha agregado una pregunta ' + form.value.preguntaE);
    form.resetForm();
  }

  deletePost(form: NgForm){
    console.log("entro "+ form.value.preguntaE);
    if (form.invalid) {
      return;
    }
    this.PreguntaService.deletePregunta(form.value.preguntaE);    
    alert('Se ha eliminado una pregunta ' + form.value.preguntaE);
    form.resetForm();
  }
  } 


