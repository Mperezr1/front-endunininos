import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { EstadisticasService } from '../../../Services/estadisticas.service';
import { Subscription } from 'rxjs';
import { EstadisticaColegios } from '../../../Models/estadisticas-colegios.model';


@Component( {
  selector: 'app-estadisticas-list',
  templateUrl: './estadisticas-list.component.html',
  styleUrls: ['./estadisticas-list.component.css']
})
export class EstadisticasListComponent implements OnInit {

  //Datos para la primera grafica
  private estadisticasSub: Subscription;
  public barChartData = [{data:[], label: ""}];
  public barChartLenged = false;
  public barChartType = "bar";
  public barChartLabels = ['No participaron', 'Han participado'];
  
  //Datos para la segunda grafica  /EA = ESTADO ACTUAL
  private estadisticasSub2: Subscription;
  public barChartDataEA = [{data:[], label: ""}];
  public barChartLengedEA = true;
  public barChartTypeEA = "bar";
  public barChartLabelsEA = ['Activo', 'Egresado', 'Inactivo'];

  constructor(public estadisticasService: EstadisticasService) { }

  ngOnInit() {
    this.estadisticasService.getEstadisticasParticipacionAnual();
    this.estadisticasSub = this.estadisticasService.getUpdateListener().subscribe((posts: EstadisticaColegios) => {
        this.barChartData = posts.barChartData;
        this.barChartLenged = posts.barChartLenged;
        this.barChartType = posts.barChartType;
        this.barChartLabels = posts.barChartLabels;
      });
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.estadisticasSub.unsubscribe();
  }
}
