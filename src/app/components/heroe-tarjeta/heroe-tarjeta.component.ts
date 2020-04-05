import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() hero:any={};
  @Input() index:number;
  @Output() heroeSeleccionado:EventEmitter<number>
  constructor(private _router:Router) {
    this.heroeSeleccionado=new EventEmitter();
   }
  ngOnInit() {
  }

  verHeroe(){
    this._router.navigate(['/heroe',this.index])
    // this.heroeSeleccionado.emit(this.index);
   }

}