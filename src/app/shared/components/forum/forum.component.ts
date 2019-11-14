import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { PaginationInterface } from '@core/interfaces/pagination.interface';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  displayedColumns: string[] ;
  dataSource: MatTableDataSource<any>;

  items = [
    {
      category: 'General Chess Discussion',
      topics: 15589,
      posts: 123203,
      'Last Post': 24
    }, {
      category: 'Game analysis',
      topics: 159,
      posts: 1203,
      'Last Post': 29
    }, {
      category: 'General Chess Discussion',
      topics: 589,
      posts: 23203,
      'Last Post': 2
    }, {
      category: 'General Chess Discussion',
      topics: 69,
      posts: 3203,
      'Last Post': 21
    }
  ];

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.displayedColumns = Object.keys(this.items[0] || {}); // TODO: fetch data from endpoint
    this.dataSource.data = this.items;
  }
}
