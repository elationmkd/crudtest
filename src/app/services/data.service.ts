import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { apiModel } from '../apiModel';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { ViewMoreComponent } from '../view-more/view-more.component';
import { findLast } from '@angular/compiler/src/directive_resolver';
import { DashboardComponent } from '../dashboard/dashboard.component';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public url: string =  "https://jsonplaceholder.typicode.com/photos";
  data;
  apiModel: any;
  userpic: any;
  apiModelList: apiModel[];
  update: apiModel[];
  constructor(private httpClient: HttpClient) { }
  // get
  getData(): Observable<any> {
 
    {
      this.data = this.httpClient.get<any[]>(this.url);
    }
    return this.data;
    
  };
  // deleting data from dashboard
  deleteData(id: number): Observable<any> {
    return this.httpClient.delete(this.url + '/' + id)
    
  }
  // saving data from the inline edit
  updateData(data: apiModel):Observable<any> {
    return this.httpClient.patch(this.url + '/' + data.id,
                                  JSON.stringify(data))
  }
  //pushing updated data
  updatedData(id: number){
    
  }
  
    //user submit 
  createPicture(userpic){
    return this.httpClient.post(this.url, userpic)
  }


 
}