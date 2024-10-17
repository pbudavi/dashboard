import { Component } from '@angular/core';
import { DASHBOARD_TAB } from '../../shared/constants/const';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  public activeLink: string = DASHBOARD_TAB;

  changeActiveLink(clickedLink: string, e: Event) {
    e.preventDefault();
    this.activeLink = clickedLink;
  }
}
