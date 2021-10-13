import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";

@Component({
    selector: 'events-list',
    templateUrl: './events-list-component.html'
})

export class EventListComponent implements OnInit {
    events: any[] = []

    constructor(private eventService: EventService) {
    }

    ngOnInit() {
        this.events = this.eventService.getEvents();
    }
}