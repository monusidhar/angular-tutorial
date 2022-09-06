import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signupForm: any;
  constructor(private http: HttpClient, private postService: PostsService) {

  }
  ngOnInit(){ 
    this.signupForm = new FormGroup({
      'username' : new FormControl(null),
      'email' : new FormControl('user@gmail.com'),
    })
    this.getData();
  }

  onSubmit(){
    this.postService.createAndStorePosts(this.signupForm.value).subscribe(res => console.log(res));
  }

  getData(){
   this.postService.fetchPosts().subscribe(res => console.log(res));
  }
}
