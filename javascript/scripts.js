$(document).ready(function() {
  Highcharts.theme = {
    credits: false,
    chart: {
      backgroundColor: null,
      style: {
        fontFamily: 'AvantGardeGothicC'
      }
    },
    title: null,
    legend: null,
    plotOptions: {
      area: {
        fillOpacity: 0.5,
      },
      series: {
        color: 'rgba(20,205,163,0.4)',
        lineColor: 'rgb(20,205,163)',
        lineWidth: 1,
        stacking: 'normal',
        dataLabels: {
          enabled: false,
          align: 'right',
        },
      },
    },
    title: null,
    xAxis: {
      labels: {
        style: {
          fontSize: '10px'
        }
      }
    },
    yAxis: {
      minorTickInterval: 2,
   minorTickLength: 0,
      tickPixelInterval:50,
      title: false,
      labels: {
        style: {
          fontSize: '10px'
        }
      }
    },
  };

Highcharts.setOptions(Highcharts.theme);

  $(function () {
      Highcharts.setOptions({
        global: {
          useUTC: false
        },
      });

      Highcharts.chart('container', {
        chart: {
          type: 'area',
          animation: Highcharts.svg,
          marginRight: 10,
          events: {
            load: function () {
              var series = this.series[0];
              setInterval(function() {
                var v;
                var	valInterval = Math.random();
                if (valInterval > 1.8){
                  v = {
                    y:  valInterval,
                    x: (new Date()).getTime(),
                    marker: {
                      symbol: 'url(images/avachar.png)'
                    }
                  };
                }
                else {
                  v = {
                    y:  valInterval,
                    x: (new Date()).getTime()
                  };
                }
                series.addPoint(v, true, true);
              }, 1000);
            }
          }
        },
        xAxis: {
          opposite: false,
          title: false,
          type: 'datetime',
          tickWidth: 1,
          tickColor: "#7a7a7a",
          minorGridLineColor: "#7a7a7a",
          minorGridLineDashStyle: "Dash",
          minorTickColor: "#7a7a7a",
          gridLineWidth:1,
          gridLineColor: "#7a7a7a",
          gridLineDashStyle: "Dash",
        },
        yAxis: {
          title: false,
          type: 'linear',
          tickWidth: 1,
          tickColor: "#7a7a7a",
          minorGridLineColor: "#7a7a7a",
          minorGridLineDashStyle: "Dash",
          minorTickColor: "#7a7a7a",
          gridLineWidth:1,
          gridLineColor: "#7a7a7a",
          gridLineDashStyle: "Dash",
          crosshair: {
          color: 'rgb(31,191,155)',
          dashStyle: "Solid",
          snap: true,
          width: 1,
        }
      },
      tooltip: {
        formatter: function () {
          return '<b>' + this.series.name + '</b><br/>' +
          Highcharts.dateFormat('%d-%m-%Y %H:%M:%S', this.x) + '<br/>' +
          Highcharts.numberFormat(this.y, 4);
        },

      },
      legend: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      series: [{
        name: 'Random data',
        data: (function () {
          var data = [],
          time = (new Date()).getTime(),
          i;

          for (i = -60; i <= 0; i += 1) {
            val = Math.random();
            if (val >1.8){
              data.push({
                x: time + i * 1000,
                y: val,
                marker: {
                  symbol: 'url(images/avachar.png)'
                }
              });
            }
            else {
              data.push({
                x: time + i * 1000,
                y: val
              });
            }
          }
          return data;
        }())
      }]
    });
  });
});
