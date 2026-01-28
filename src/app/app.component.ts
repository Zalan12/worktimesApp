import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { LoadingService } from './services/loading.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, NavbarComponent,ProgressbarComponent,CommonModule],
=======
  imports: [RouterOutlet, NavbarComponent, ProgressbarComponent, CommonModule],
>>>>>>> d9d13c4c0c43c0e1df7b9d06f5d62517314f620c
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'worktimes';
<<<<<<< HEAD
  loading$=inject(LoadingService).loading$;
=======
  loading$ = inject(LoadingService).loading$;


  constructor(
  ) { }

>>>>>>> d9d13c4c0c43c0e1df7b9d06f5d62517314f620c
}
