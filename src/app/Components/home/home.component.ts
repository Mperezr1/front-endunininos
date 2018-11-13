import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { CronogramaService } from '../../Services/cronograma.service';
import { Actividad } from '../../Models/programa.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  programaActual = "Calendario"; 

  constructor(public cronogramaService: CronogramaService) { }

  ngOnInit(){
    this.realizarGet("Calendario");
  }  
  
  realizarGet(programa: string){
    this.cronogramaService.getCronograma(programa)
        .subscribe(res => {
          this.cronogramaService.actividades = res as Actividad[];
          console.log(res);
    });
  }

  agregarActividad(form: NgForm){
    alert(form.value.nombre + "  " +form.value.fecha + "  Calendario");
    if (form.invalid || form.value.nombre == null || form.value.fecha == null) {
      return;
    }
    const actividad : Actividad = {
      nombre : form.value.nombre,
      fecha: form.value.fecha
    }

    this.cronogramaService.putCronograma(actividad, "Calendario")
      .subscribe(res => {
        this.cronogramaService.actividades = res as Actividad[];
        console.log(res);
      form.resetForm();
    });
  }

  borrarActividad(actividad: Actividad){
    if(confirm("Se borrará la actividad " + actividad.nombre)) {
      this.cronogramaService.borrarActividad(actividad.nombre, this.programaActual)
        .subscribe(res => {
          this.cronogramaService.actividades = res as Actividad[];
          console.log(res);
        });
    }
    
    
  }

}
