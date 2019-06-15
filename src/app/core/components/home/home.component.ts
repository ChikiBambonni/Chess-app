import { Component, OnInit } from '@angular/core';

import { UserService } from '@core/mock-backend/services/user.service';
import { User } from '@core/interfaces/user.interfaces';
import { of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: User = null;

  onlineFriends = [{
    status: 'online',
    title: 'friend 1'
  }, {
    status: 'online',
    title: 'friend 2'
  }, {
    status: 'online',
    title: 'friend 3'
  }, {
    status: 'online',
    title: 'friend 5'
  }];

  offlineFriends = [{
    status: 'offline',
    title: 'friend 7'
  }, {
    status: 'offline',
    title: 'friend 8'
  }, {
    status: 'offline',
    title: 'friend 9'
  }, {
    status: 'offline',
    title: 'friend 15'
  }];

  ELEMENT_DATA = [
    { position: 1,	 name: 'Carlsen, Magnus', country: 'NOR', rating: 2845, year: 1990 },
    { position: 2,	 name: 'Caruana, Fabiano	', country: 'USA', rating: 2819, year: 1992 },
    { position: 3,	 name: 'Ding, Liren', country: 'CHN', rating: 2809, year: 1992 },
    { position: 4,	 name: 'Giri, Anish', country: 'NED', rating: 2797, year: 1994 },
    { position: 5,	 name: 'Mamedyarov, Shakhriyar', country: 'AZE', rating: 2793, year: 1985 },
    { position: 6,	 name: 'Anand, Viswanathan', country: 'IND', rating: 2774, year: 1969 },
    { position: 7,	 name: 'Nepomniachtchi, Ian', country: 'RUS', rating: 2773, year: 1990 },
    { position: 8,	 name: 'Vachier-Lagrave, Maxime', country: 'FRA', rating: 2773, year: 1990 },
    { position: 9,	 name: 'Grischuk, Alexander', country: 'RUS', rating: 2771, year: 1983 },
    { position: 10,	 name: 'Aronian, Levon', country: 'ARM', rating: 2763, year: 1982 },
    { position: 11,	 name: 'Aronian, Levon', country: 'ARM', rating: 2763, year: 1982 },
    { position: 12,	 name: 'Aronian, Levon', country: 'ARM', rating: 2763, year: 1982 },
    { position: 13,	 name: 'Aronian, Levon', country: 'ARM', rating: 2763, year: 1982 },
    { position: 14,	 name: 'Aronian, Levon', country: 'ARM', rating: 2763, year: 1982 },
    { position: 15,	 name: 'Aronian, Levon', country: 'ARM', rating: 2763, year: 1982 },
  ];

  displayedColumns: string[] = ['position', 'name', 'country', 'rating', 'year'];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  sortData($event) {
    console.log($event);
  }

  changePage($event) {
    console.log('--------', $event);
  }
}
