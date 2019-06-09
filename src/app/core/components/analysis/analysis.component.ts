import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('/capi/ChikiBambuki/Openings').subscribe(data => {
      console.log(data);
    });
  }
}
