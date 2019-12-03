import { Component, OnInit, Input, NgModule } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { apiModel } from '../apiModel';
import { Observable, fromEventPattern } from 'rxjs';
import { Router, ActivatedRoute, Data, ParamMap } from '@angular/router';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.css']
})

export class ViewMoreComponent implements OnInit {
  allData: apiModel[];
  selected: any;
  posts: any[];
  id: number;
  i: number;
  constructor(private dataService: DataService,
              private router: Router,
              private route: ActivatedRoute) { }
              private service: PostService
              
   ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
     this.selected = +params.get('id');
    });
    
    this.dataService.getData()
    .subscribe ((res) =>{
      console.log(res);
      this.FindPhoto(res);
    })    
   
    
    
    
  };
  // looping through the array and matching selected ID with corresponding items
  private FindPhoto(dataArr: Array<any>)
  
  {
    
    for (let i = 0; i < dataArr.length;  i++)
    {

      if (dataArr[i].id === this.selected){
        
          this.allData = dataArr[i];
          
      }
    
    }
  };
  

// saving edited data
butSave(form: NgForm){
  
this.allData = form.controls.id.value;

const newData: apiModel = { id: form.controls.id.value,
                            title: form.controls.title.value, 
                            thumbnailUrl: form.controls.thumbnailUrl.value,
                            url: form.controls.url.value,
                            albumId: form.controls.albumId.value
                          };

   this.dataService.updateData(newData).subscribe
    ((res) => 
    {
      this.allData = newData;
      
      console.log(newData);
    })
    
    
  };
  // back to dashboard
  backEdit(){ 
    window.history.back();
  }
  
  
  

  
  
  
}
