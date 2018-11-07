import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "src/app/Services/auth.service";

export class AuthGuard implements CanActivate{

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        var isAuth;
        this.authService.getAuthStatus().subscribe(res =>{
            isAuth = res;
        });
        if(!isAuth){
            this.router.navigate(['/']);
        }
        
        return isAuth;
    }

    constructor(private authService: AuthService, private router: Router) {

    }

}