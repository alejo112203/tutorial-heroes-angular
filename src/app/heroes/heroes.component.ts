import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  
  //selectedHero?: Hero;

  // Se inyecta el servicio hero service para poder acceder a los datos de los heroes
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  // Se cargan los heroes al momento que se esta construyendo el componente
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    // Nos suscribimos al observable de heroes para manejar la obtencion de los datos de manera asincrona
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes
    });
  }

  // onSelect(hero:Hero): void {
  //     this.selectedHero = hero;
  //     // Se envia mensaje a servicio a servicio de mensajes
  //     // Tambien ser arma un template literal con ${} que concatena el hero id a una cadena
  //     this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  // }

}
