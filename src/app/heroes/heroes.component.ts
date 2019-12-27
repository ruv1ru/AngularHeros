import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  title: string;
  selectedHero: Hero;

  heroes = HEROES;

  constructor() { }

  ngOnInit() {
    this.title = 'list of heros';
  }

  onHeroSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
