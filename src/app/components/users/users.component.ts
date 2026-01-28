<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { User } from '../../interfaces/user';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
=======
import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { User } from '../../interfaces/user';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { Button } from 'primeng/button';
>>>>>>> d9d13c4c0c43c0e1df7b9d06f5d62517314f620c

@Component({
  selector: 'app-users',
  standalone: true,
<<<<<<< HEAD
  imports: [TableModule,ButtonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{

  users:User[]=[];

  constructor(
    private api:ApiService
  ){}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers()
  {
    this.api.selectAll('users').subscribe({
      next:(res)=>{
        this.users=res as User[];
      },
      error:(err)=>{
        console.log(err.error.error)
=======
  imports: [CommonModule, TableModule, Button],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  constructor(
    private api: ApiService
  ){} 

  users: User[] = [];

  ngOnInit() {
    this.getUsers()
  }

  getUsers(){
    this.api.selectAll('users').subscribe({
      next: (res) => {
        console.log(res);
        this.users = res as User[];
      },
      error: (err) => {
        console.error(err.error.error);
>>>>>>> d9d13c4c0c43c0e1df7b9d06f5d62517314f620c
      }
    })
  }
}
