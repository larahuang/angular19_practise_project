import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {navListType} from '../../Types/nav'

import { RouterLink } from '@angular/router';
import { NgClass, NgFor,NgStyle } from '@angular/common';
@Component({
  selector: 'app-create-nav',
  imports: [NgFor,RouterLink,NgClass,NgStyle],
  templateUrl: './create-nav.component.html',
  styleUrl: './create-nav.component.scss'
})
export class CreateNavComponent implements OnInit {
  @Input() sendCreateLists: navListType[] | undefined;
  @Input() sendPageTitle: string | undefined;
  @Input() sendIsActive: boolean | undefined;
  @Input() sendBgStyle: string | undefined;

  @Output() newPageTitle = new EventEmitter<string>();
  activeList(pageTitle:string) {
  this.newPageTitle.emit(pageTitle)
  }
  ngOnInit(): void {}
}
