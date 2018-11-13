import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService} from '../../Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, OnDestroy {

  private authListenerSubs: Subscription;
  userIsAuthenticated = false;

  isAdmin() {
    if(this.authService.actualPriority === 2){
      return true;
    }else{
      return false;
    }
  }

  isMonitor() {
    if(this.authService.actualPriority === 1){
      return true;
    }else{
      return false;
    }
  }

  onLogout(){
    this.authListenerSubs =  this.authService.getAuthStatus().subscribe(isAuth => {
      this.userIsAuthenticated = false;
  });
    this.authService.logout();
    this.authListenerSubs.unsubscribe();
  }

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
        this.authListenerSubs =  this.authService.getAuthStatus().subscribe(isAuth => {
            this.userIsAuthenticated = true;
        });
    }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

}
