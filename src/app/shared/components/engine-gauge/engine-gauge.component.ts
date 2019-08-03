import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts/highcharts';
const HighchartsMore = require('highcharts/highcharts-more');
const HighchartsSolidGauge = require('highcharts/modules/solid-gauge');
HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);

@Component({
  selector: 'app-engine-gauge',
  templateUrl: './engine-gauge.component.html',
  styleUrls: ['./engine-gauge.component.scss']
})
export class EngineGaugeComponent implements OnInit {

  chart: Highcharts.Chart;

  gaugeOptions = {
    chart: {
      type: 'solidgauge'
    },
    title: null,
    pane: {
        center: ['50%', '85%'],
        size: '100%',
        startAngle: -90,
        endAngle: 90,
        background: {
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
            innerRadius: '60%',
            outerRadius: '90%',
            shape: 'arc'
        }
    },
    tooltip: {
        enabled: false
    },
    yAxis: {
        stops: [
            [0.1, '#55BF3B'], // green
            [0.5, '#DDDF0D'], // yellow
            [0.9, '#DF5353'] // red
        ],
        lineWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        title: {
            y: -70
        },
        labels: {
            y: 16
        }
    },
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 5,
          borderWidth: 0,
          useHTML: true
        }
      }
    }
  };

  constructor() { }

  ngOnInit() {
    this.chart = Highcharts.chart('chartElement', Highcharts.merge(this.gaugeOptions, {
      yAxis: {
          min: 0,
          max: 200,
          title: {
              text: 'Speed'
          }
      },
      credits: {
          enabled: false
      },
      series: [{
        name: 'Speed',
        data: [80],
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y}</span><br/>' +
                '<span style="font-size:12px;opacity:0.4">km/h</span>' +
                '</div>'
        },
        tooltip: {
            valueSuffix: ' km/h'
        }
      }]
    }));
  }
}
