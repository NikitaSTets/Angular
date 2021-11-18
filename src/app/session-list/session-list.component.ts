import { Component, Input, OnChanges } from '@angular/core';
import { VoterService } from '../event-details/voter.service';
import { ISession } from '../events';
import { AuthService } from '../user/login/auth.service';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnChanges {

  @Input() sessions: ISession[] | undefined = [];
  @Input() filterBy!: string;
  @Input() sortBy!: string;
  @Input() eventId!: number;

  visibleSesions: ISession[] | undefined = [];

  constructor(public auth: AuthService, private voterService: VoterService) {

  }

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name'
        ? this.visibleSesions?.sort(sortByNameAsc)
        : this.visibleSesions?.sort(sortByVotesDesc)
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

  toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(this.eventId, session, this.auth.currentUser.userName);
    } else {
      this.voterService.addVoter(this.eventId, session, this.auth.currentUser.userName)
    }

    if (this.sortBy === 'votes') {
      this.visibleSesions?.sort(sortByVotesDesc);
    }
  }

  userHasVoted(session: ISession) {
    return this.voterService.userHasVoted(session, this.auth.currentUser.userName)
  }
}

function sortByNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) return 1;
  else if (s1.name === s2.name) return 0;
  else return -1;
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length
}