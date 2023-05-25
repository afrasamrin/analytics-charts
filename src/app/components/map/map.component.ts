import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';


declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})


export class MapComponent implements OnInit {

  public db: any = [];
  public mapViews: any = [];
  public mapState: any = [];
  tabledata: any = [];

  constructor(private serviceService: ServiceService) { }


  drawChart(): void {
    const data = google.visualization.arrayToDataTable( this.tabledata, true)
    
   console.log(data);
    
    // var count = 0;
    // data['Wf'].map((item: any) => {
    //   //data['Wf'].
    //   item.c = this.tabledata[count]
    //   count++;
    // })
    

    const options = {
      region: 'IN',
      displayMode: 'regions',
      resolution: 'provinces',
      colorAxis: {
        colors: ['#a2ddf1', '#54b6f7', '#4290c3', '#306a90', '#1f445d'],
      },
    };

    const chart = new google.visualization.GeoChart(
      document.getElementById('geoChart')
    );
    chart.draw(data, options);
  }


  ngOnInit(): void {

    this.serviceService.getCharts().subscribe((data) => {
      this.db = data;
      console.log('MAP');
      console.log(this.db);//connects database
       
     //to transforms data according to  google geo chart format
      for (const item of this.db) {
        this.mapViews.push(item['map'])
        this.mapState.push(item['state'])
      }

      for (let i = 0; i < this.mapState.length; i++) {
        this.tabledata.push([this.mapState[i]  , this.mapViews[i] ])
      }
      console.log(this.tabledata)
    })
   
    
    google.charts.load('current', {
      packages: ['geochart'],
    });
    google.charts.setOnLoadCallback(this.drawChart.bind(this));
  }


}
