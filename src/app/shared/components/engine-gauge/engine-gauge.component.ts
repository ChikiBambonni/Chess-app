import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

import * as Highcharts from 'highcharts/highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';
HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);

import { gaugeOptions } from './engine-gauge.constants';
import { TrackChanges } from '@core/decorators/changes.decorator';

@Component({
  selector: 'app-engine-gauge',
  templateUrl: './engine-gauge.component.html',
  styleUrls: ['./engine-gauge.component.scss']
})
export class EngineGaugeComponent implements OnInit, OnChanges {

  chart: Highcharts.Chart;
  options = gaugeOptions(-20, 20, 0.83);

  @Input()
  min: number;

  @Input()
  max: number;

  @Input()
  data: number;

  constructor() { }

  ngOnInit() {
    this.chart = Highcharts.chart('chartElement', this.options as any);
  }

  @TrackChanges('selectedTab', 'fetchData')
  ngOnChanges(changes: SimpleChanges) {
  }

  private setExtremes(min: number, max: number) {
    if (this.chart) {
      this.chart.yAxis[0].setExtremes(min, max);
    }
  }
}
