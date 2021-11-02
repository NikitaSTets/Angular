import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { appRoutes } from './routes';

import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { Error404Component } from './errors/404.component';

import { ToastrService } from './common/toastr.service';

import { AuthService } from './user/login/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  EventListResolver,
  EventService,
  EventsAppComponent,
  EventListComponent
} from './events/index';

import {
  EventDetailsComponent,
  EventRouteActivator
} from './event-details/index';

import { CreateSessionComponent } from './create-session/index';
import { SessionListComponent } from './session-list/session-list.component';
import { CollapsibleWellComponent } from './collapsible-well/collapsible-well.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    AuthService,
    EventListResolver,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: chechDirtyState
    },
  ],
  bootstrap: [EventsAppComponent]
})

export class AppModule { }

export function chechDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want cancel?')
  }

  return true;
}