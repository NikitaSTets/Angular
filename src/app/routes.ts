import { Routes } from '@angular/router'

import {
    EventListComponent,
    EventListResolver,
    EventResolver
} from './events/index'

import { CreateSessionComponent } from './create-session/index';

import { EventDetailsComponent } from "./event-details/event-details.component"
import { CreateEventComponent } from './create-event/create-event.component';
import { Error404Component } from './errors/404.component';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventListComponent, resolve: { events: EventListResolver } },
    { path: 'events/:id', component: EventDetailsComponent, resolve: { event: EventResolver } },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    {
        path: 'user', loadChildren: () => import('./user/user.module')
            .then(m => m.UserModule)
    }
];