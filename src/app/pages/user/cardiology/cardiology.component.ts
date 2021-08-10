import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
@Component({
  selector: 'app-cardiology',
  templateUrl: './cardiology.component.html',
  styleUrls: ['./cardiology.component.css']
})
export class CardiologyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  color: ThemePalette = 'primary';
}
