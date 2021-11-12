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

  ngOnInit(): void {
    this.newEvent = {
      name: 'Test',
      date: '8/8/2028',
      time: '10am',
      price: 799.99,
      location: {
        address: '654 old st',
        city: "Fel",
        country: 'Bel'
      },
      onlineUrl: 'http://asd.com',
      imageUrl: 'http://asd.com/dsad.png'
    }
  }

  saveEvent(formValues: any) {
    this.eventService.saveEvent(formValues).subscribe(() => {

    });
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}