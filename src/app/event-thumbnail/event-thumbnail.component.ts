import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: any
  @Output() eventClick = new EventEmitter()


  handleClickMe() {
    this.eventClick.emit(this.event.name)
  }

  constructor() { }

  ngOnInit(): void {
  }
}