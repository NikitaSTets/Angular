import { Component } from "@angular/core";
import { EventService, ISession } from "../events";
import { AuthService } from "../user/login/auth.service";

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavBarComponent {
    searchTerm: string = "";
    foundSessions!: ISession[];

    constructor(public authService: AuthService, private eventService: EventService) {
        
    }

    searchSessions(searchTerm: string) {
        this.eventService.searchSessions(searchTerm).subscribe(sessions => {
            this.foundSessions = sessions;
        });
    }
}