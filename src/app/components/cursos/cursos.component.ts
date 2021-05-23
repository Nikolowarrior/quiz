import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos:Curso[]=[];

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursos=this.cursosService.getCursos();
  }

}

