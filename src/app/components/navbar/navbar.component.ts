import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../services/auth.service';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
>>>>>>> d9d13c4c0c43c0e1df7b9d06f5d62517314f620c

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(
    private api: ApiService,
<<<<<<< HEAD
    private auth: AuthService
=======
    private auth: AuthService,
    private router: Router
>>>>>>> d9d13c4c0c43c0e1df7b9d06f5d62517314f620c
  ) { }

  items: MenuItem[] | undefined;
  isLoggedIn: boolean = false;
<<<<<<< HEAD
  ngOnInit() {
    this.api.readAll('users').subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (error) => {
        console.log(error);
      }
    });

    this.auth.isLoggedIn$.subscribe(isloggedIn => {
      this.isLoggedIn = isloggedIn;
      setTimeout(() => {
        this.setupMenu();
      }, 100);
    })

  }

=======

  ngOnInit() {

    this.auth.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
      setTimeout(() => {
        this.setupMenu();
      }, 50);
    });

    if (this.isLoggedIn) {
      this.router.navigate(['/home']);
    }
  }


>>>>>>> d9d13c4c0c43c0e1df7b9d06f5d62517314f620c
  setupMenu() {
    this.items = [

      //always visible
<<<<<<< HEAD

      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: 'home'
      },

      //isloggedin true
      ...(this.isLoggedIn) ?
        [
          {
            label: 'Users',
            icon: 'pi pi-star',
            routerLink: '/users'
          },
          {
            label: 'Worktimes',
            icon: 'pi pi-envelope',
            routerLink: '/worktimes'
          },
          {
            label: 'Statistics',
            icon: 'pi pi-chart-bar',
            routerLink: '/statistics'
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            routerLink: '/logout'
          }
        ]
        :
        [
          {
            label: 'Login',
            icon: 'pi pi-user',
            routerLink: '/login'
          }
          ,
          {
            label: 'Registration',
            icon: 'pi pi-user-plus',
            routerLink: '/registration'
          }

        ]


      //Always visible false


    ]
  }
}
=======
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/home'
      },

      //isloggedin true

      ...this.isLoggedIn ? [
        {
          label: 'Users',
          icon: 'pi pi-star',
          routerLink: '/users'
        },
        {
          label: 'Worktimes',
          icon: 'pi pi-envelope',
          routerLink: '/worktimes'
        },
        {
          label: 'Statistics',
          icon: 'pi pi-chart-bar',
          routerLink: '/statistics'
        },
        {
          label: 'Logout',
          icon: 'pi pi-sign-out',
          routerLink: '/logout'
        },
      ] : [
        //isloggedin false
        {
          label: 'Login',
          icon: 'pi pi-sign-in',
          routerLink: '/login'
        },
        {
          label: 'Register',
          icon: 'pi pi-user-plus',
          routerLink: '/registration'
        }
      ],
    ]

  }
}
>>>>>>> d9d13c4c0c43c0e1df7b9d06f5d62517314f620c
