import { Component } from "@angular/core";
import { AuthService } from "../user/login/auth.service";

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavBarComponent {

    constructor(public authService: AuthService) {
        

    }
}