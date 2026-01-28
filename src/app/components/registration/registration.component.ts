<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
=======
import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
>>>>>>> d9d13c4c0c43c0e1df7b9d06f5d62517314f620c
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { User } from '../../interfaces/user';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
<<<<<<< HEAD
  imports: [FormsModule, InputTextModule, FloatLabel,PasswordModule,ButtonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent implements OnInit{
  user:User={
=======
  imports: [InputTextModule, FloatLabelModule, FormsModule, PasswordModule, ButtonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

  user: User = {
>>>>>>> d9d13c4c0c43c0e1df7b9d06f5d62517314f620c
    id: '',
    name: '',
    email: '',
    password: '',
<<<<<<< HEAD
    confirm:'',
    role: '',
    secret: '',
    reg: new Date(),
    status: false
  }

  constructor(
    private api:ApiService,
    private router:Router
  ){}

  ngOnInit(): void {
    
  }

  save()
  {
    let data={
      name:this.user.name,
      email:this.user.email,
      password:this.user.password,
      confirm:this.user.confirm,
      phone:'',
      address:''
    }
    this.api.registration('users',data).subscribe({
      next:(res)=>{
        alert('Sikeres regisztráció! Bejelntkezéshez!');
        this.router.navigateByUrl('/login');
      },
      error:(err)=>{
        alert(err.error.error);
        console.log(err);
      }
    })
=======
    role: '',
    secret: '',
    reg: new Date(),
    status: true
  };

  constructor(
    private api: ApiService,
    private router: Router
  ) { }


  save() {
    let data = {
      name: this.user.name,
      email: this.user.email,
      password: this.user.password,
      confirm: this.user.confirm,
      phone: this.user.phone,
      address: this.user.address
    };

    this.api.registration('users', data).subscribe({
      next: (res) => {
        alert('Registration successful! You can log in now.');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        alert(err.error);
        console.error(err);
      }
    });
>>>>>>> d9d13c4c0c43c0e1df7b9d06f5d62517314f620c
  }
}
