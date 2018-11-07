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

  
  private estadisticasSub: Subscription;
  listForCanvasBarras: EstadisticaColegios[] = [];

  constructor(public estadisticasService: EstadisticasService) { }

  ngOnInit() {
    this.estadisticasService.getEstadisticasColegios();
    this.estadisticasSub = this.estadisticasService.getUpdateListener().subscribe((posts: EstadisticaColegios[]) => {
        this.listForCanvasBarras = posts;
      });
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.estadisticasSub.unsubscribe();
  }
}
