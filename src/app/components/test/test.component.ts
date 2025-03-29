import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { navListType } from '../../Types/nav';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-test',
  imports: [NgFor,RouterLink],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements OnInit {
  @Input() sendNavList: navListType[] | undefined;
  @Input() sendPageTitle: string | undefined;
  @Input() sendIsActive: boolean | undefined;

  @Output() newSendPageTitle = new EventEmitter()
  actionList(title:string) {
    this.newSendPageTitle.emit(title)
  }
  ngOnInit(): void {}
}
