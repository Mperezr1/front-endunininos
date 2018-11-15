import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Subscription } from 'rxjs';
import { AuthService} from '../../Services/auth.service';
import { CronogramaService } from '../../Services/cronograma.service';
import { Actividad } from '../../Models/programa.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  programaActual = "Calendario"; 
  private authListenerSubs: Subscription;
  userIsAuthenticated = false;

  isAdmin() {
    if(this.authService.actualPriority === 2){
      return true;
    }else{
      return false;
    }
  }

  isMonitor() {
    if(this.authService.actualPriority === 1){
      return true;
    }else{
      return false;
    }
  }

  constructor(public cronogramaService: CronogramaService, private authService: AuthService) { }

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
    if (form.invalid || form.value.nombre == null || form.value.fecha == null|| form.value.nombre == "" || form.value.fecha == "") {
      alert("Es necesario agregar nombre y fecha a la actividad para agregarla");
      return;
    }
    alert(form.value.nombre + "  " +form.value.fecha + "  Calendario");
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
