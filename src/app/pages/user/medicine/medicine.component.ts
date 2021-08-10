import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  color: ThemePalette = 'primary';
}
