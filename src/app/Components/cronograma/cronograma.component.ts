import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { CronogramaService } from '../../Services/cronograma.service';
import { Actividad } from '../../Models/programa.model';


@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.component.html',
  styleUrls: ['./cronograma.component.css']
})
export class CronogramaComponent implements OnInit {

  constructor(public cronogramaService: CronogramaService) { }
  programaActual = ""; 

  ngOnInit() {
  }

  getCronograma(form: NgForm){
    if (form.invalid) {
      return;
    }

    alert(form.value.programa);
    this.programaActual = form.value.programa;
    this.cronogramaService.getCronograma(form.value.programa)
        .subscribe(res => {
          this.cronogramaService.actividades = res as Actividad[];
          console.log(res);
          form.resetForm();
    });
  }

  agregarActividad(form: NgForm){
    alert(form.value.nombre + "  " +form.value.fecha + "  " + form.value.programa);
    if (form.invalid) {
      return;
    }
    this.programaActual = form.value.programa;
    const actividad : Actividad = {
      nombre : form.value.nombre,
      fecha: form.value.fecha
    }

    this.cronogramaService.putCronograma(actividad, form.value.programa)
      .subscribe(res => {
        this.cronogramaService.actividades = res as Actividad[];
        console.log(res);
      form.resetForm();
    });
  }

  borrarActividad(actividad: Actividad){
    alert(actividad.nombre);
    
    this.cronogramaService.borrarActividad(actividad.nombre, this.programaActual)
    .subscribe(res => {
      this.cronogramaService.actividades = res as Actividad[];
      console.log(res);
    });
  }
}
