import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({providedIn: 'root'})
export class PostsService{
    constructor( private http: HttpClient){}

    createAndStorePosts(postData: any){
       return this.http.post('https://dummy.restapiexample.com/api/v1/create',postData)
    }

    fetchPosts(){
       return this.http.get('https://dummy.restapiexample.com/api/v1/employees')
    }
}