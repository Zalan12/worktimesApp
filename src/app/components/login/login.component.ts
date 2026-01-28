<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';
=======
import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { User } from '../../interfaces/user';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
>>>>>>> d9d13c4c0c43c0e1df7b9d06f5d62517314f620c
import { AuthService } from '../../services/auth.service';
import { CheckboxModule } from 'primeng/checkbox';


@Component({
  selector: 'app-login',
  standalone: true,
<<<<<<< HEAD
  imports: [FormsModule, InputTextModule, FloatLabel,PasswordModule,ButtonModule,CheckboxModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  user:User={
=======
  imports: [InputTextModule, FloatLabelModule, FormsModule, PasswordModule, ButtonModule, CheckboxModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private api: ApiService,
    private router: Router,
    private auth: AuthService
  ) { }

  keepLoggedIn: boolean = false;
  user: User = {
>>>>>>> d9d13c4c0c43c0e1df7b9d06f5d62517314f620c
    id: '',
    name: '',
    email: '',
    password: '',
<<<<<<< HEAD
    confirm:'',
=======
>>>>>>> d9d13c4c0c43c0e1df7b9d06f5d62517314f620c
    role: '',
    secret: '',
    reg: new Date(),
    status: false
  }

<<<<<<< HEAD
  constructor(
    private api:ApiService,
    private auth:AuthService,
    private router:Router
  ){}

  ngOnInit(): void {
    
  }

  login(){

    let data={
      email:this.user.email,
      password:this.user.password
    }

    this.api.login('users',data).subscribe({
      next:(res)=>{
        this.auth.login((res as any).token);
        alert("Sikeres belépés!");
        this.router.navigateByUrl('/home');
      },
      error:(err)=>{
        console.log(err);
        alert(err.error.error)
      }
    })
  }
=======
  login() {

    let data = {
      email: this.user.email,
      password: this.user.password
    }

    this.api.login('users', data).subscribe({
      next: (res) => {
        if (this.keepLoggedIn) {
          this.auth.storeUser((res as any).token);
        }
        this.auth.login((res as any).token);
        alert('Login successful');
        this.router.navigate(['/home']);
      },
      error: (err) => {
        alert('Login failed');
        console.log(err);
      }

    });
  }

>>>>>>> d9d13c4c0c43c0e1df7b9d06f5d62517314f620c
}
