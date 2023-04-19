import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../interfaces/post.interface';
import { config } from '../../../configs/config.dev';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) { }
  
  getPosts(): Promise<Post[] | undefined> {
   return this.http.get<Post[]>(config.postsUrl).toPromise()
  }
}


