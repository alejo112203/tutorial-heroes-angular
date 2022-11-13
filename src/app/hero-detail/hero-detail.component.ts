import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // Recibe un valor que proviene de otro componente
  @Input()
  hero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
