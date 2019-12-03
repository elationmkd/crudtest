import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-upload-picture',
  templateUrl: './upload-picture.component.html',
  styleUrls: ['./upload-picture.component.css']
})
export class UploadPictureComponent implements OnInit {
  userpic: string = "";
  url: string = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private dataService: DataService,
              private HttpClient:HttpClient) {}

  ngOnInit() {
  }

  uploadBackFunc(){
    window.history.back();
  }
    //saving a icture
  uploadPic(){
    this.dataService.createPicture({ albumId: 'title',
                                     id: 'url',
                                     title: 'title',
                                     url: 'url',
                                     thumbnailUrl: 'url' })
                                     
  }
}


