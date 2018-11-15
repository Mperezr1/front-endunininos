import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfileService } from 'src/app/Services/profile.service';
import { Subscription } from 'rxjs';
import { AuthService} from '../../Services/auth.service';
import { Participante } from '../../Models/participante.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  private authListenerSubs: Subscription;
  userIsAuthenticated = false;
  participantes: Participante[] = [];
  private consulta :Participante[] = [];
  nombre;
  constructor(private profileService: ProfileService, private authService: AuthService) { }

  ngOnInit() {
    this.authListenerSubs =  this.authService.getAuthStatus().subscribe(isAuth => {
      this.userIsAuthenticated = true;
      
  });
     this.profileService.getAcudientes().subscribe(posdata=>{
     this.consulta= this.profileService.participantes = posdata as Participante[];
     this.consulta.forEach(element => {
       console.log(element)
     });
     console.log(this. nombre);
      })
  }

  isParent() {
    if(this.authService.actualPriority === 0){
      return true;
    }else{
      return false;
    }
  }


  ngOnDestroy(){
    //this.authListenerSubs.unsubscribe();
  }

}
