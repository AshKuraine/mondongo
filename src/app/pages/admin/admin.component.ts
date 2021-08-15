import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  isOpen = true;
  events: string[] = [];
  opened: boolean = true;

  toggle() {
     this.isOpen = !this.isOpen;
   }
}
