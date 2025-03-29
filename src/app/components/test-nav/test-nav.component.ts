import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {navListType} from '../../Types/nav'
import { NgClass, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-test-nav',
  imports: [NgFor,NgClass,RouterLink],
  templateUrl: './test-nav.component.html',
  styleUrl: './test-nav.component.scss'
})
export class TestNavComponent implements OnInit {
  @Input() sendNavLists: navListType[] | undefined;
  @Input() sendPageTitle: string | undefined;
  @Input() sendIsActive: boolean | undefined;
  @Output() newActivePageTItle = new EventEmitter<string>();
 actionList(pageTitle:string) {
    this.newActivePageTItle.emit(pageTitle)
  }
  ngOnInit() {

  }
}
