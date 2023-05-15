import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { ServiceService } from 'src/app/service/service.service';


@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent {
  chart: any;
  public d :any = [];
  linex : any = [];
  liney : any = [];
  

  constructor(private serviceService: ServiceService) { } 
   

  ngOnInit(): void {
    this.serviceService.getCharts().subscribe((a)=>{
      this.d = a;
      // console.log('line'); 
      // console.log(this.d); 
      for(const item of this.d){
        this.linex.push(item['linex'])
        this.liney.push(item['liney'])
        }
      
    })
   
    // this.serviceService.newlinex.subscribe(a => (
    //   this.linex=a
    // ));
    // console.log(this.linex);
    // this.serviceService.newliney.subscribe(a => (
    //   this.liney=a
    // ));
    // console.log(this.liney);
    }
    
  ngAfterViewInit() {
    let ctx: any = document.getElementById('lineChart') as HTMLElement;
    var data = {
      labels: ['January', 'February', 'March', 'April', 'May','June','July','August', 'September', 'October', 'November', 'December'],
   
      datasets: [
        {
          label: '2023',
          //data: this.linex,
          data: [10, 50, 25, 70, 40, 99, 45, 29, 70, 60,50,98],
          backgroundColor: 'blue',
         borderColor: 'lightblue',
          fill: false,
          lineTension: 0.4,
          
        },
        {
          label: '2022',
          //data: this.liney,
          data: [20, 35, 40, 60, 50,80,45,90,70,60,90, 94],
          backgroundColor: 'lightblue',
          borderColor: 'lightblue',
          fill: false,
          lineTension: 0.4,
          borderDash: [10,5]
          
        },
      ],
    };

    //options
    var options = {
      responsive: true,
      title: {
        display: false,
        position: 'top',
        text: 'How many searches you get yearly?',
        fontSize: 18,
        fontColor: '#111',
      },
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          fontColor: '#333',
          fontSize: 16,
        },
      },
    };

    var chart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options,
    });
  }
}
