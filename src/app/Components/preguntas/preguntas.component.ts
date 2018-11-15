import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from "@angular/forms";
import { PreguntasService } from '../../Services/preguntas.service';
import { AuthService} from '../../Services/auth.service';
import { PreguntasModel } from '../../Models/pregunta.model';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

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

  ngOnInit() {}

  constructor(public preguntasService: PreguntasService, private authService: AuthService) {
    this.getPreguntas();
  }

  getPreguntas(){
    this.preguntasService.getPreguntas()
    .subscribe(res => {
      this.preguntasService.preguntas = res as PreguntasModel[];
      console.log(res);
    });
  }

  putPregunta(form: NgForm){
    if (form.invalid) {
      return;
    }
    
    this.preguntasService.getPregunta(form.value.pregunta)
        .subscribe(res => {
          this.preguntasService.preguntas = res as PreguntasModel[];
          console.log(res);
    });
  }
}
