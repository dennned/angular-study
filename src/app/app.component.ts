import { Component } from '@angular/core';

export interface Post {
    title: string
    text: string
    id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    posts: Post[] = [
        {title: 'Studt Angular 0', text: 'Angular test test 0', id:1},
        {title: 'Studt Angular 1', text: 'Angular test test 1', id:2}
    ]

    updatePosts(post: Post) {
        this.posts.unshift(post)
        console.log(post)
    }

    removePost(id: number){
        console.log(id);
        this.posts = this.posts.filter(p => p.id !== id)
    }
}
