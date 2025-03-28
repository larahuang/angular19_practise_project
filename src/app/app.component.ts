import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { environment } from '../environment/environment'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterOutlet,NavbarComponent],
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'vite_project';

  ngOnInit() {
     console.log(environment.production ? 'Production' : '開發中')
  }
}
