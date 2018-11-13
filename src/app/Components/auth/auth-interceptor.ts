import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "src/app/Services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = this.authService.getToken();  
        const prior = this.authService.getPriority();
        const nombre = this.authService.getUserName();
        const documento = this.authService.getUserName();
        const authRequest = req.clone({
            headers: req.headers.set('Authorization',String(prior)+ " " + authToken + " " + nombre + " " + documento)
        });

        return next.handle(authRequest);
    }

    constructor(private authService: AuthService) {

    }
}