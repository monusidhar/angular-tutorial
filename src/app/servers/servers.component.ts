import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styles: ['h1{color:#eee;}']
})
export class ServersComponent implements OnInit {

  allowNewServer:boolean =false;
  serverCreationStatus= 'no server'
  serveName = 'testserver';
  userName: string = 'monusidhar'


  constructor() {
    setTimeout(() => {this.allowNewServer=true;},2000)
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'server was created';
  }

  onUpdateServerName(event:any){
    console.log(event);
    this.serveName = (<HTMLInputElement>event.target).value;
  }
  reset(){
    this.userName = '';
  }

  checkBtn()
  {
    if(this.userName===''){
      return true;
    }else{
      return false;
    }
  }

  

}
