
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateNavComponent} from './components/create-nav/create-nav.component';
import { environment } from '../environment/environment'
import { navListType,navListActiveType } from './Types/nav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterOutlet,NavbarComponent,CreateNavComponent],
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
  bgStyle:string ='red'
  ngOnInit() {
     console.log(environment.production ? 'Production' : '開發中')
  }
}
