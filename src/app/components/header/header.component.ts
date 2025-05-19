import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentSection: string = '';

  constructor(private MenuService: MenuService) {
    this.MenuService.section$.subscribe(section => {
      this.currentSection = section;
    });
  }
}
