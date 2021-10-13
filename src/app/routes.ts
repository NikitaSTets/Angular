import { Routes } from '@angular/router'

import { EventListComponent } from "./events/events-list.component";
import { EventDetailsComponent } from "./event-details/event-details.component"
import { CreateEventComponent } from './create-event/create-event.component';
import { Error404Component } from './errors/404.component';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent },
    { path: 'events', component: EventListComponent },
    { path: 'events/:id', component: EventDetailsComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
];