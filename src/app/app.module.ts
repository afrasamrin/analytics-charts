import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//import { HighchartsChartModule } from 'highcharts-angular';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieComponent } from './components/pie/pie.component';
import { LineComponent } from './components/line/line.component';
import { DonutComponent } from './components/donut/donut.component';
import { BarComponent } from './components/bar/bar.component';
import { MapComponent } from './components/map/map.component';
import { PagesComponent } from './components/pages/pages.component';
//import { GoogleChartsModule } from 'angular-google-charts';
// import { Ng2GoogleChartsModule, GoogleChartsSettings } from 'ng2-google-charts';
// import { GeochartComponent } from './geochart/geochart.component';
 import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './service/service.service';


@NgModule({
  declarations: [
    AppComponent,
    PieComponent,
    LineComponent,
    DonutComponent,
    BarComponent,
    MapComponent,
    PagesComponent
   // GeochartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //HighchartsChartModule,
    //GoogleChartsModule,
    CommonModule,
    HttpClientModule
    //Ng2GoogleChartsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
