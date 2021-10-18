import { Component, Input } from '@angular/core';
import { IEvent } from '../events/shared/event.model';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})

export class EventThumbnailComponent {
  @Input() event!: IEvent;

  getStartTimeClass() {
    if (this.event && this.event.time === '8:00 am') {
      return ['green', 'bold'];
    }

    return [];
  }
}