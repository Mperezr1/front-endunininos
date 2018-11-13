import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService implements OnInit{

getAcudientes(){

  this.http.get<{ message: string; participacionAn: any[] }>( 'http://localhost:3000/api/profile/acudientes' )
      .subscribe(postData => {
        console.log(postData);
      });

}
ngOnInit(): void {
}

constructor(private http: HttpClient) { }

}
