import { Component } from '@angular/core';
import { Post } from '../../../interfaces/post.interface';
import { PostsService } from '../../../shared-posts/services/posts.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  
  posts: Post[] = [];
  
  constructor(private postsService: PostsService){
    postsService.getPosts().then((posts) => {
      console.debug('piecioshka, HomePageComponent', { posts });
      if(posts){
        this.posts = posts;
      }
    })
  }

}
