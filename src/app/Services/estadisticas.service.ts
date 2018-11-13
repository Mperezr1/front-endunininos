import { Injectable } from '@angular/core';
import { EstadisticaColegios } from '../Models/estadisticas-colegios.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {

private estadisticasParAnual: EstadisticaColegios;
private estadisticasParAnualUpdated =  new Subject<EstadisticaColegios>();

private estadisticasParActivo: EstadisticaColegios;
private estadisticasParActivoUpdated =  new Subject<EstadisticaColegios>();



constructor(private http: HttpClient) { }


//Se congen los datos del back-end
getEstadisticasParticipacionAnual() {

  this.http.get<{ message: string; participacionAn: any[] }>( 'https://quiet-retreat-14647.herokuapp.com/api/estadisticasList' )
      .subscribe(postData => {
        const setData: EstadisticaColegios = {
          barChartType: "bar", 
          barChartLabels: ['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016', '2017', '2018'],
          barChartLenged: false,
          barChartData: [{data: postData.participacionAn, label:"Participaciones"}]
        };
        this.estadisticasParAnual = setData;
        this.estadisticasParAnualUpdated.next(this.estadisticasParAnual);
      });

}

getEstadisticasParticipantesActivosPorCole() {
  this.http.get< {message: string, participacionAn: [[number]]}>('https://quiet-retreat-14647.herokuapp.com/api/estadisticasListColegioActivo')
  .subscribe(postData => {
    const colegios = ['colombo americano', 'colombo frances', 'colombo ingles','la compañia de maria', 'montessori', 'the columbus school','seminario corazonista','inem'];
    let chartDataToSet: [{data: [number], label:string}] = [{data: null, label: null}];
    for(var i = 0; i< postData.participacionAn.length; i++){
      chartDataToSet.push({data: postData.participacionAn[i], "label": colegios[i]});
    }
    const setData: EstadisticaColegios = {
      barChartType: "bar", 
      barChartLabels: ['Activo','Egresado','Inactivo'],
      barChartLenged: true,
      barChartData: chartDataToSet
    };
    this.estadisticasParActivo = setData;
    this.estadisticasParActivoUpdated.next(this.estadisticasParActivo);
  });
}


//Este metodo no es utilizado en el momento ya que la db no se pudo migrar con exito.
postConsultaEstadistica(
  barCharLabeslIn:string[], 
  barCharTypeIn:string, 
  barChartLengedIn: boolean, 
  barCharDataIn: [{data:number[], label:string}])
  {
  
  const post: EstadisticaColegios = {
    barChartLabels: barCharLabeslIn, 
    barChartType:barCharTypeIn, 
    barChartLenged: barChartLengedIn, 
    barChartData: barCharDataIn
  }
  this.http
    .post<{ message: string }>("https://quiet-retreat-14647.herokuapp.com/api/estadisticasCreate", post)
    .subscribe(responseData => {
      console.log(responseData.message);
    });
}

//Se retorna un observable el cual tiene los datos actualizados del ultimo get.
getUpdateListener() {
  return this.estadisticasParAnualUpdated.asObservable();
}

getUpdateListenerEA(){
  return this.estadisticasParActivoUpdated.asObservable();
}

}
