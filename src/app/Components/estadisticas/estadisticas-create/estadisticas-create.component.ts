import { Component, OnInit, Injectable } from '@angular/core';
import { NgForm } from "@angular/forms";
import { EstadisticasService } from '../../../Services/estadisticas.service';
import { EstadisticaColegios } from '../../../Models/estadisticas-colegios.model';

@Component( {
  selector: 'app-estadisticas-create',
  templateUrl: './estadisticas-create.component.html',
  styleUrls: ['./estadisticas-create.component.css']
})
export class EstadisticasCreateComponent implements OnInit {

    atributosD = ['Colegio Actual'] //,'Estrato','Fecha de nacimiento', 'Grado Actual', 'Ubicacion (Barrio)'];

  parametrosColegioActual = ['Cantidad estudiantes', 'Cantidad colegios'];

  parametros1ColegioActual = ['Nombre igual a'];

  barriosColegioActual =  ['santa maria', 'patio bonito', 'manila','ciudad del rio','barrio colombia','tesoro'];

  colegios = ['colombo americano', 'colombo frances', 'colombo ingles','la compañia de maria', 'montessori', 'the columbus school','seminario corazonista','inem'];
 
  public crearGraficaDeBarras(form: NgForm) {

    const parametrosEnviar: string[] = [];
    const barChartLabelsAEnviar: string[] = [];

    //Estos parametros ayudan a que se pueda elegir mas facilmente que estadistica hacer en el back-end 
    if(form.value.checkBoxNombre){
      parametrosEnviar.push('nombre');
      barChartLabelsAEnviar.push(form.value.inputColegioNombre);
    }
    if(form.value.checkBoxApell){
      parametrosEnviar.push('apellido');
      barChartLabelsAEnviar.push(form.value.inputColegioApell);
    }
    if(form.value.checkBoxEstrato){
      parametrosEnviar.push('estrato');
      barChartLabelsAEnviar.push(form.value.inputColegioEstrato);
    }
    if(form.value.checkBoxBarrio){
      parametrosEnviar.push('barrio');
      barChartLabelsAEnviar.push(form.value.eleccionBarrioColegioA);
    }
    // if(form.value.checkBoxEdadMayQ){
    //   parametrosEnviar.push('edadMayQ');
    //   barChartLabelsAEnviar.push(form.value.inputColegioEdadMayorQ);
    // }
    // if(form.value.checkBoxEdadMenQ){
    //   parametrosEnviar.push('edadMenQ');
    //   barChartLabelsAEnviar.push(form.value.inputColegioEdadMenorQ);
    // }

       //Hay que verificar si los campos estan checkeados
    const publicacionAEstadistica: EstadisticaColegios = {

      seriesData: this.colegios,
      atributoSeleccionado: form.value.parametro1EjeY,
      parametrosAUsar: parametrosEnviar,
      barChartLabels: barChartLabelsAEnviar,
      barChartType: 'bar', 
      barChartLenged: true,
      barChartData: [{data: null, label:null}]
    }
    this.estadisticasService.postConsultaEstadistica(publicacionAEstadistica.seriesData, publicacionAEstadistica.atributoSeleccionado, publicacionAEstadistica.parametrosAUsar, publicacionAEstadistica.barChartLabels,publicacionAEstadistica.barChartType,publicacionAEstadistica.barChartLenged,publicacionAEstadistica.barChartData);

  }

  public selColegioActual(form: NgForm){
    if(form.value.atributoSeleccionado === "Colegio Actual"){
      return true;
    }
    return false;
  }
  
  public selApellido(form: NgForm){
    if(form.value.parametro1EjeY === "Cantidad estudiantes"){
      return true;
    }
    return false;
  }

  public selEdadParam(form: NgForm){
    if(form.value.parametro1EjeY === "Cantidad estudiantes"){
      return true;
    }
    return false;
  }


  constructor(public estadisticasService: EstadisticasService) { }

  ngOnInit() {
  }

}