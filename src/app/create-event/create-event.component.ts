import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../events';

@Component({
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})

export class CreateEventComponent implements OnInit {
  isDirty: boolean = true;
  newEvent: any;

  constructor(private router: Router, private eventService: EventService) {

  }

  saveEvent(formValues: any) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  ngOnInit(): void {
  }
}