
import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {


  pages:any=[];
  view:any=[];
  b:any=[];
  obj:any=[{}];
        constructor(private serviceService: ServiceService) { } 
      
      ngOnInit() : void {
        this.serviceService.getCharts().subscribe((a)=>{
          this.b = a;

          for ( const item of  this.b){
            if( item['page'] != null){
            this.pages.push(item['page']);
            this.view.push(item['views']);
            }
          }
    //.ceil(obj.discountPercentage * obj.price - obj.price) )

           console.log(this.pages)
           console.log(this.view)
        })
 
      }
        
}
