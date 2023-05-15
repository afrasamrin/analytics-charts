import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { ServiceService } from 'src/app/service/service.service';


@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent  {

  chart: any;
  donut:any=[];
  public d:any=[];
  constructor(private serviceService: ServiceService) { } 

ngOnInit() : void {
  this.serviceService.getCharts().subscribe((a)=>{
    this.d = a;
  
  // this.serviceService.newdonut.subscribe(a => (
  //   this.donut=a
  // ));
  // console.log(this.donut);
  for ( const item of  this.d)
  this.donut.push(item['donut']);
  console.log(this.donut)

    this.chart = new Chart('outlabeledChart', {
          type: 'doughnut',
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: false,
                text: 'Session Durations'
              }
            }
          },
          data: {
            labels: ['> 5 mins','10 mins < 5 mins','< 10 mins'],
            datasets: [
              { 
                data: this.donut,
                //data: [55,45,55],
                backgroundColor: ['rgb(137, 207, 240)','rgb(0, 150, 255)','rgb(31, 81, 255)']
                
              },
            ]
          }
        });
      }) 
}


}