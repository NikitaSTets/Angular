import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../events';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnChanges {

  @Input() sessions: ISession[] | undefined = [];
  @Input() filterBy!: string;
  visibleSesions: ISession[] | undefined = [];

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
    }
  }

  filterSessions(filter: string) {
    if (filter === 'all') {
      this.visibleSesions = this.sessions?.slice(0);
    } else {
      this.visibleSesions = this.sessions?.filter(s => {
        return s.level.toLocaleLowerCase() == filter
      });
    }
  }
}