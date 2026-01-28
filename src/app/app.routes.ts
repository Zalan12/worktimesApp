import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
<<<<<<< HEAD
import { UsersComponent } from './components/users/users.component';
import { WorktimesComponent } from './components/worktimes/worktimes.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { LogoutComponent } from './components/logout/logout.component';

export const routes: Routes = [

    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'registration',
        component:RegistrationComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'users',
        component:UsersComponent
    },
    {
        path:'worktimes',
        component:WorktimesComponent
    },
    
    {
        path:'statistics',
        component:StatisticsComponent
    },
    
{
        path:'logout',
        component:LogoutComponent
    },
    {
        path:'',redirectTo:'/login',
        pathMatch:'full'
    }
    
=======
import { StatisticsComponent } from './components/statistics/statistics.component';
import { WorktimesComponent } from './components/worktimes/worktimes.component';
import { UsersComponent } from './components/users/users.component';
import { LogoutComponent } from './components/logout/logout.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'worktimes',
        component: WorktimesComponent
    },
    {
        path: 'statistics',
        component: StatisticsComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'logout',
        component: LogoutComponent
    },
    {
        path: 'registration',
        component: RegistrationComponent
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
>>>>>>> d9d13c4c0c43c0e1df7b9d06f5d62517314f620c
];
