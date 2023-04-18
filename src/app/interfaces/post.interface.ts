import { Author } from './author.interface';

export interface Post {
  id: string;
  createdTime: string;
  author: Author;
  body: string;
  images: string[];
}
