import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Post } from '../../../interfaces/post.interface';

import { PostListItemComponent } from './post-list-item.component';

describe('PostListItemComponent', () => {
  let component: PostListItemComponent;
  let fixture: ComponentFixture<PostListItemComponent>;
  let $component: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostListItemComponent);
    component = fixture.componentInstance;
    $component = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should show body of the post', () => {
    // const fixture = TestBed.createComponent(PostListItemComponent);
    // const app = fixture.componentInstance;
    // expect(app.post?.body).toEqual()
  
  //update model
    component.post = {
      body:'testing',
      author:{},
      images: [] as string[]
    } as Post;
  //sync model <=> view
    fixture.detectChanges();
  
    
  //read view
    const text = $component.querySelector('.card-text')?.textContent?.trim();
    
    expect(text).toEqual('testing');
  })
});
