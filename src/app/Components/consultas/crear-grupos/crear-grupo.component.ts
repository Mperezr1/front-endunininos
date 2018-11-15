import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PruebasService } from 'src/app/Services/pruebas.service';
import { Grupo } from '../../../Models/grupo.model';

@Component({
  selector: 'app-crear-grupo',
  templateUrl: './crear-grupo.component.html',
  styleUrls: ['./crear-grupo.component.css']
})
export class CrearGrupoComponent implements OnInit {
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

  agregarGrupo(form: NgForm){
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