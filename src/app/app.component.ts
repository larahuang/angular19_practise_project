import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { environment } from '../environment/environment'
import { navListType,navListActiveType } from './Types/nav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterOutlet,NavbarComponent,],
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'vite_project';
  navLists: navListType[] = [
    { title: 'Home', path: '/' },
    { title: 'Users', path: 'users' },
    {title:'Login',path:'login'}
  ]
  isActive: navListActiveType["isActive"] = true;
  pageTitle: navListActiveType["pageTitle"] = "Home";
   actionList(title: string) {
    this.pageTitle = title;
  }
  ngOnInit() {
     console.log(environment.production ? 'Production' : '開發中')
  }
}
