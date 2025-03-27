import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environment/environment'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'vite_project';

  ngOnInit() {
     console.log(environment.production ? 'Production' : '開發中')
  }
}
