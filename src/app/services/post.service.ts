import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
private url = 'https://jsonplaceholder.typicode.com/photos';
  
  constructor(private httpClient: HttpClient) { }

  getPosts() {  
    return this.httpClient.get(this.url);  
  }
  //updatePost(post){
    //return this.httpClient.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true}))
  //}

  
}
