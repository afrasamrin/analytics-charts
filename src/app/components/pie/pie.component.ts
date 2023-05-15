import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { ServiceService } from 'src/app/service/service.service';


@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent {

  chart: any;
  pie:any=[];
  a:any=[];
  constructor(private serviceService: ServiceService) { } 

ngOnInit() : void {
  this.serviceService.getCharts().subscribe((a)=>{
    this.a = a;
  
  // this.serviceService.newdonut.subscribe(a => (
  //   this.donut=a
  // ));
  // console.log(this.donut);
  for ( const item of  this.a)
  this.pie.push(item['pie']);
  console.log(this.pie)


  this.chart = new Chart('pie', {
    type: 'pie',
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: false,
          text: 'Searches by Devices'
        }
      }
    },
    data: {
      labels: ['Desktop','Mobile','Web'],
      datasets: [
        { 
          data: this.pie,
          //data: [55,45,55],
          backgroundColor: ['rgb(137, 207, 240)','rgb(0, 150, 255)','rgb(31, 81, 255)']
          
        },
      ]
    }
  });
})

}

}