import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PruebasService } from 'src/app/Services/pruebas.service';
import {Grupo} from '../../Models/Pruebas/grupoPrueba.model';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {
  public grupo: Grupo;
  constructor(public pruebasService: PruebasService) { }

  ngOnInit() {
  }

  agregarParticipantePrueba(form: NgForm){
    if (form.invalid) {
      return;
    }

    this.pruebasService.addPostPP(form.value);
    alert('Se ha agregado el participante ' + form.value.nombre);
    form.resetForm();
  }

  agregarGrupoPrueba(form: NgForm){
    if (form.invalid) {
      return;
    }
    console.log(form.value);
    this.grupo = {
      codigoGrupo : form.value.codigoGrupo
    };
    this.pruebasService.addPostGR(this.grupo);
    alert('Se ha agregado el Grupo ' + form.value.codigoGrupo);
    form.resetForm();
  }
  

}