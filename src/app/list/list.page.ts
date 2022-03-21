import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  list = []

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://optimizaprocess.net/test')
      .subscribe(res => {
        console.log(res);
        this.list = res.results;
      })
  }

}
