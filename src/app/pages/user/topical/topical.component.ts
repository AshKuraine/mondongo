import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
@Component({
  selector: 'app-topical',
  templateUrl: './topical.component.html',
  styleUrls: ['./topical.component.css']
  
})
export class TopicalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  color: ThemePalette = 'primary';
}
