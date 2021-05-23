import { Component, Input, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {

  @Input()curso:Curso=new Curso();
  
  constructor() { }

  ngOnInit(): void {
  }

  prom(){
    return Math.round((this.curso.nota1*this.curso.porc1+this.curso.nota2*this.curso.porc2+this.curso.nota3*this.curso.porc3+this.curso.nota4*this.curso.porc4+this.curso.nota5*this.curso.porc5)/(this.curso.porc1+this.curso.porc2+this.curso.porc3+this.curso.porc4+this.curso.porc5)*10)/10;
  }

  cara(){
    if(this.prom()<6)
      return 'triste';
    else
      return 'feliz';
  }

  color(){
    if(this.prom()<4.5)
      return 'hotpink';
    else if(this.prom()<6)
      return 'lightyellow';
    else
      return 'white';
  }

}
