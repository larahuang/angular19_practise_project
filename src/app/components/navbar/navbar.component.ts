import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface navListType{
  title?: string,
  path?: string,
}
@Component({
  selector: 'app-navbar',
  imports: [RouterLink,NgFor],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  navLists: navListType[] = [
    { title: 'Home', path: '/' },
    { title: 'Users', path: 'users' },
    {title:'Login',path:'login'}
  ]

}
