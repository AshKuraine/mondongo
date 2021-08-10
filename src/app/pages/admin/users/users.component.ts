import { Component, OnInit } from '@angular/core';
export interface Users{
  nro: number;
  nombre: string;
  apellidoPat: string;
  apellidoMat: string;
  dni: string;
}

const ELEMENT_DATA: Users[]= [
  {nro:1, nombre:'Erick Adrian', apellidoPat:'Lazaro',apellidoMat:'Llacua',dni:'77777777'},
  {nro:2, nombre:'Abraham Moises', apellidoPat:'Mamani',apellidoMat:'Shucra',dni:'77777777'},
  {nro:3, nombre:'Gustavo Shunior', apellidoPat:'Moreno',apellidoMat:'Titx',dni:'77777777'},
]
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['nro', 'nombre', 'apellidoPat', 'apellidoMat','dni'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }


}
