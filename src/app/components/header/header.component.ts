import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isActive: boolean = false;
  isShow: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onActive() {
    this.isActive = !this.isActive;
  }

  onShowMenu() {
    this.isShow = true;
  }

  onDisable() {
    this.isShow = false;
  }

}
