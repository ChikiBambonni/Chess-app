import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts/highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';
HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);

import * as stokfish from 'stockfish';

@Component({
  selector: 'app-engine-gauge',
  templateUrl: './engine-gauge.component.html',
  styleUrls: ['./engine-gauge.component.scss']
})
export class EngineGaugeComponent implements OnInit {

  worker;

  chart: Highcharts.Chart;

  gaugeOptions = {
    chart: {
      type: 'solidgauge',
      backgroundColor: 'transparent'
    },
    title: null,
    pane: {
      center: ['50%', '70%'],
      size: '130%',
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor: '#fff',
        innerRadius: '75%',
        outerRadius: '100%',
        shape: 'arc',
        borderColor: 'transparent'
      }
    },
    tooltip: {
      enabled: false
    },
    yAxis: {
      min: 0,
      max: 1,
      stops: [
        [0.1, '#e74c3c'], // red
        [0.5, '#f1c40f'], // yellow
        [0.9, '#2ecc71'] // green
      ],
      minorTickInterval: null,
      tickPixelInterval: 400,
      tickWidth: 0,
      gridLineWidth: 0,
      gridLineColor: 'transparent',
      labels: {
        enabled: false
      },
      title: {
        enabled: false
      }
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      solidgauge: {
        innerRadius: '75%',
        dataLabels: {
          y: -45,
          borderWidth: 0,
          useHTML: true
        }
      }
    },
    series: [{
      data: [0.83],
      dataLabels: {
        formatter: function () {
          return `<span style="color: #ffffff">${this.y > 0 ? '+' : '-'} ${this.y}<span>`;
        }
      }
    }]
  };

  constructor() { }

  ngOnInit() {
    this.chart = Highcharts.chart('chartElement', this.gaugeOptions as any);
  }
}
