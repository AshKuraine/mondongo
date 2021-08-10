import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html',
  styleUrls: ['./laboratory.component.css']
})
export class LaboratoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  color: ThemePalette = 'primary';
}
