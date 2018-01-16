import { Injectable } from '@angular/core';
import { Team } from './team';
import { TEAMS } from './mock-teams';
import { MessageService } from './message.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TeamService {

  constructor(private messageService: MessageService) { }

  getTeams(): Observable<Team[]> {
    this.messageService.add('MessageService: Fetches Teams');
    return of(TEAMS);
  }

  getTeam(id: number): Observable<Team> {
    this.messageService.add(`MessageService: Fetched Team Id=${id}`);
    return of(TEAMS.find(team => team.id === id));
  } 

}
