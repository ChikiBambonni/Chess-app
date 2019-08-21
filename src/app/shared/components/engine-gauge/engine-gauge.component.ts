import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts/highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';
HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);

import { gaugeOptions } from './engine-gauge.constants';

@Component({
  selector: 'app-engine-gauge',
  templateUrl: './engine-gauge.component.html',
  styleUrls: ['./engine-gauge.component.scss']
})
export class EngineGaugeComponent implements OnInit {

  chart: Highcharts.Chart;
  options = gaugeOptions(0.83);

  constructor() { }

  ngOnInit() {
    this.chart = Highcharts.chart('chartElement', this.options as any);
    // this.chart.yAxis[0].setExtremes(100,300);
  }
}
