import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Users } from 'src/app/model/users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showButton = true;

  constructor(public apiService: ApiService) { }

  displayedColumns: string[] = ['id', 'name', 'username', 'website'];
  dataSource: Users[];

  ngOnInit() {
  }

  showTable(): void {
    this.showButton = false;
    this.apiService.getUsers().subscribe(
      (data: any) => {
        this.dataSource = data;
      },
      err => console.error(err)
    );
  }

}

export interface Users {
  id: number;
  name: string;
  username: string;
  website: string;
}
