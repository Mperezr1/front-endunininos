import { Injectable } from '@angular/core';
import { EstadisticaColegios } from '../Models/estadisticas-colegios.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {

private estadisticasColegios: EstadisticaColegios[] = [];
private estadisticasColegiosUpdated =  new Subject<EstadisticaColegios[]>();

constructor(private http: HttpClient) { }


//Se congen los datos del back-end
getEstadisticasColegios() {

  this.http.get<{ message: string; posts: EstadisticaColegios[] }>( 'api/estadisticasList' )
      .subscribe(postData => {
        this.estadisticasColegios = postData.posts;
        this.estadisticasColegiosUpdated.next([...this.estadisticasColegios]);
      });
}

postConsultaEstadistica(
  seriesDatas: string[],
  atributoSeleccionadoIn:string,
  param: string[],
  barCharLabeslIn:string[], 
  barCharTypeIn:string, 
  barChartLengedIn: boolean, 
  barCharDataIn: [{data:number[], label:string}])
  {
  
  const post: EstadisticaColegios = {
    seriesData: seriesDatas,
    atributoSeleccionado:atributoSeleccionadoIn,
    parametrosAUsar:param ,
    barChartLabels: barCharLabeslIn, 
    barChartType:barCharTypeIn, 
    barChartLenged: barChartLengedIn, 
    barChartData: barCharDataIn
  }
  this.http
    .post<{ message: string }>("api/estadisticasCreate", post)
    .subscribe(responseData => {
      console.log(responseData.message);
    });
}

//Se retorna un observable el cual tiene los datos actualizados del ultimo get.
getUpdateListener() {
  return this.estadisticasColegiosUpdated.asObservable();
}

}
