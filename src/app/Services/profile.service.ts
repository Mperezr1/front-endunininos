import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService implements OnInit{

getAcudientes(){

  this.http.get<{ message: string; participacionAn: any[] }>( 'https://quiet-retreat-14647.herokuapp.com/api/profile/acudientes' )
      .subscribe(postData => {
        console.log(postData);
      });

}
ngOnInit(): void {
}

constructor(private http: HttpClient) { }

}
