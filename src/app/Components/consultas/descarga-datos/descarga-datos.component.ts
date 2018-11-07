import { Component, OnInit } from '@angular/core';
import { DescargaDatosService } from '../../../Services/descarga-datos.service';
import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs";
import { HttpClient,HttpResponse,HttpHeaders } from "@angular/common/http";
import { ResponseType } from '@angular/http';
import { map, switchMap, throttle } from 'rxjs/operators';
import { Http, Response } from "@angular/http"
import {saveAs} from 'file-saver';


@Component({
  selector: 'app-descarga-datos',
  templateUrl: './descarga-datos.component.html',
  styleUrls: ['./descarga-datos.component.css'],
  providers:[DescargaDatosService]

})
export class DescargaDatosComponent implements OnInit {

  constructor(public descargasService: DescargaDatosService) { }

  ngOnInit() {
  }
  descargaParticipantes(){
    // const blob = await this.callService.getEvidenceFile(event.target.value, true);
// const url = window.URL.createObjectURL(blob);
    var fileName = 'Participantes.xlsx'
    this.descargasService.descargaParticipantesService(fileName).subscribe(
      data => saveAs(data,fileName),
      error => console.error(error)
    );
  }
}
