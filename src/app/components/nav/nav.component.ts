import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {navListType} from '../../Types/nav'
import { NgClass, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-nav',
  imports: [NgFor,NgClass,RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
  //實作初始化
export class NavComponent  implements OnInit {
  @Input() sendNav: navListType[] | undefined;
  @Input() sendPageTitle: string | undefined;
  @Input() sendIsActive: boolean | undefined;
  @Output() newPageTitle = new EventEmitter<string>();
  actionLis(path: string) {
    this.newPageTitle.emit(path)
  }
  ngOnInit(): void {}
}

// @InPut() => import {Input} 引入Input
// @InPut() 傳值參數:屬性;
// implements OnInit =>import {OnInit}引入Input OnInit
// 引入RouterLink
// 引入NgClass

//Output () 傳值參數名稱 ＝new EventEmitter<屬性>() ;
//Html =>(傳值參數名稱)="函式（$event）"
