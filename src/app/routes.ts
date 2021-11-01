import { Routes } from '@angular/router'

import {
    EventListComponent,
    EventListResolver,
} from './events/index'

import { CreateSessionComponent } from './create-session/index';

import { EventDetailsComponent } from "./event-details/event-details.component"
import { CreateEventComponent } from './create-event/create-event.component';
import { Error404Component } from './errors/404.component';

import { EventRouteActivator } from './event-details/event-route-activator.service';


export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventListComponent, resolve: { events: EventListResolver } },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    {
        path: 'user', loadChildren: () => import('./user/user.module')
            .then(m => m.UserModule)
    }
];