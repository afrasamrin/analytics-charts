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
    public db :any = [];
    barx : any = [];
    bary : any = [];
    // linex : any = [];
    // liney : any = [];
  
    
    
    
    // dummy = [{"id":1,"linex":45,"liney":78,"bary":45,"pie":36,"donut":4152,"map":14},
    //         {"id":2,"linex":56,"liney":67,"bary":2,"pie":14,"donut":7,"map":2},
    //         {"id":3,"linex":110,"liney":120,"bary":23,"pie":78,"donut":45,"map":34},
    //         {"id":4,"linex":90,"liney":130,"bary":2,"pie":14,"donut":7,"map":2},
    //         {"id":5,"linex":100,"liney":150,"bary":2,"pie":14,"donut":7,"map":2},
    //         {"id":2,"linex":120,"liney":120,"bary":2,"pie":14,"donut":7,"map":2},
    //         {"id":2,"linex":130,"liney":70,"bary":2,"pie":14,"donut":7,"map":2},
    //         {"id":2,"linex":60,"liney":30,"bary":2,"pie":14,"donut":7,"map":2},
    //         {"id":2,"linex":140,"liney":110,"bary":2,"pie":14,"donut":7,"map":2},
    //         {"id":2,"linex":110,"liney":40,"bary":2,"pie":14,"donut":7,"map":2},
    //         {"id":2,"linex":40,"liney":110,"bary":2,"pie":14,"donut":7,"map":2},
    //         {"id":2,"linex":150,"liney":140,"bary":2,"pie":14,"donut":7,"map":2}
    //       ];
    constructor(private serviceService: ServiceService) { } 
   
   
    ngOnInit(): void {


      this.serviceService.getCharts().subscribe((data)=>{
        this.db = data;
        console.log('connected'); 
        console.log(this.db); 

        // this.serviceService._linex.subscribe(a => (
        //   this.linex=a))
        //   this.serviceService._liney.subscribe(a => (
        //     this.liney=a))

           
   
     // console.log(this.db);


  for(const item of this.db){
  this.barx.push(item['barx'])
  this.bary.push(item['bary'])
  // this.linex.push(item['linex'])
  // this.liney.push(item['liney'])
  
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
          labels: ['January', 'February', 'March', 'April', 'May','June','July','August', 'September', 'October', 'November', 'December'],
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
  //   setlinex(){
  //     this.serviceService.changelinex(this.linex);
  //   }
    
  //   setliney(){
  //     this.serviceService.changeliney(this.liney);
  // }  

      
  }