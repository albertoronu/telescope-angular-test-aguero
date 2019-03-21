import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showButton: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  showTable(): void {
    this.showButton = false;
  }

}
