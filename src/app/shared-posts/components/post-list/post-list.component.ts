import { Component, Input } from '@angular/core';
import { Post } from '../../../interfaces/post.interface';
import postFixture from '../../../../assets/posts.fixture.json'
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  //posts = postFixture;
  
  @Input() posts: Post[] = [];
  
  postTrackBy(_index: number, post: Post){
    return post.id
  }
}
