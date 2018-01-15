import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'KhanhNV',
    strength: 100,
    description: 'Khanh IVIata'
  };

  constructor() { }

  ngOnInit() {
  }

}
