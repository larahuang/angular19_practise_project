import { NgFor,NgClass } from '@angular/common';
import { Component,OnInit ,Input,Output, EventEmitter} from '@angular/core';
import { RouterLink } from '@angular/router';
import { navListType } from '../../Types/nav';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink,NgFor,NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  @Input() sendNavLists!: navListType[];
  @Input() sendPageTitle!: string;
  @Input() sendIsActive!: boolean;

   @Output() newPageTitle = new EventEmitter<string>();
 //點擊頁面按鈕函式
  sendActionList(path: string) {
    this.newPageTitle.emit(path);
  }
  ngOnInit(): void {}
}
