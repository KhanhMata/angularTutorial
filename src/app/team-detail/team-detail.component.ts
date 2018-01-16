import { Component, OnInit } from '@angular/core';

import { Team } from '../team';
import { TeamService } from '../team.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  team: Team;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private teamService: TeamService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getTeam();
  }

  getTeam(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.teamService.getTeam(id).subscribe(team => this.team = team);
  }

  goBack() {
    this.location.back();
  }
  
}
