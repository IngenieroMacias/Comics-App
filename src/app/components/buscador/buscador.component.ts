import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../servicios/heroes.service';
import {Router} from '@angular/router';
import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  heroes:any[]=[];
  termino:string;
  constructor(private _activatedRoute:ActivatedRoute,private _heroesService:HeroesService, private _router:Router) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params=>{
     this.termino=params['termino'];
     this.heroes=this._heroesService.buscarHeroes(params['termino']);
     console.log(this.heroes);
    
    })
  }

  verHeroe(id:number){
    this._router.navigate(['heroe',id]);
   }

}
