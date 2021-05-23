import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursos:Curso[]=[
    {
      nombre:'Curso ruso',
      nota1:1.3,porc1:15,
      nota2:2.0,porc2:10,
      nota3:3.2,porc3:15,
      nota4:2.5,porc4:20,
      nota5:4.0,porc5:25

    },
    {
      nombre:'Curso japones',
      nota1:5.3,porc1:15,
      nota2:6.0,porc2:10,
      nota3:3.2,porc3:15,
      nota4:5.5,porc4:20,
      nota5:4.0,porc5:25
    },
    {
      nombre:'Curso español',
      nota1:5.3,porc1:15,
      nota2:6.0,porc2:10,
      nota3:3.2,porc3:15,
      nota4:5.5,porc4:20,
      nota5:4.0,porc5:25
    }
      
    ]
  constructor() { }
  getCursos(){
    return this.cursos;
  }
}
