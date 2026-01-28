<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component } from '@angular/core';
>>>>>>> d9d13c4c0c43c0e1df7b9d06f5d62517314f620c
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
<<<<<<< HEAD
export class LogoutComponent implements OnInit{
  constructor(
    private auth:AuthService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.logout()
  }

  logout()
  {
      this.auth.logout();
      this.router.navigateByUrl('/login');
=======
export class LogoutComponent {
  constructor(
    private auth: AuthService,
    private router: Router  
  ){}

  ngOnInit(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
>>>>>>> d9d13c4c0c43c0e1df7b9d06f5d62517314f620c
  }
}
