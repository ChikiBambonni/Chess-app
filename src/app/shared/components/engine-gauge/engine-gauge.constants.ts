export const gaugeOptions = (min: number, max: number, data: number) => {
  return {
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
    min: min,
    max: max,
    stops: [
      [0.9, '#FFD740']
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
    data: [data],
    dataLabels: {
      formatter: function () {
        return `<span style="color: #ffffff">${this.y > 0 ? '+' : ''} ${this.y}<span>`;
      }
    }
  }]
};
};
