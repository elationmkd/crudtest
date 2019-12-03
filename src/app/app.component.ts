import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'officialProjAPI';
  
  constructor(private dataService: DataService){}
}


