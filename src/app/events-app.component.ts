import { Component } from "@angular/core";
import { AuthService } from "./user/login/auth.service";

@Component({
    selector: 'events-app',
    template: `
    <nav-bar> </nav-bar> 
    <router-outlet> </router-outlet>
    `
})

export class EventsAppComponent {

    constructor(private authService: AuthService) {

    }

    ngOnInit() {
        this.authService.checkAuthenticationStatus();
    }
}