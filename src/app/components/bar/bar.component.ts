import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {

  public chart: any;
  public db: any = [];
  barx: any = [];
  bary: any = [];

  constructor(private serviceService: ServiceService) { }


  ngOnInit(): void {


    this.serviceService.getCharts().subscribe((data) => {
      this.db = data;
      console.log('connected');
      console.log(this.db);

      for (const item of this.db) {
        this.barx.push(item['barx'])
        this.bary.push(item['bary'])

      }

      //this.barx.push(item['barx']);
      //console.log(this.barx)
      //console.log(`${key}: ${dummy[key]}`);

      this.chart = new Chart('myChart', {
        type: 'bar',
        options: {
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
              min: 0,
            }
          },
          plugins: {
            title: {
              display: false,
              text: 'Yearly Comparison'
            }
          }
        },
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [
            {
              label: '2023',
              data: this.barx,
              //data: [10, 50, 25, 120, 150, 139, 45, 129, 70, 120,150,98],
              backgroundColor: 'lightblue',

            },
            {
              label: '2022',
              data: this.bary,
              //data: [20, 135, 40, 60, 150,80,145,90,120,110,90, 94],
              backgroundColor: 'rgba(54, 162, 235, 0.2)',

            }
          ]
        }
      }


      )
    })

  }
  

}