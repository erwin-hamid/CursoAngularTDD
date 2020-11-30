import { Component, OnInit } from '@angular/core';
import { User } from './models/user.interface';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myVar = 'Hola Mundo'
  saludo = 'Hola Erwin'

  par(numero:number):boolean{
    return numero % 2 === 0 ? true : false
  }

  users:User[] = []
  constructor(private _userService:UserService){
  }

  ngOnInit(){
    this.getUsers()
  }

  getUsers(){
    this._userService.getAll().subscribe(users => {
      this.users = users
    })
  }
}
