import { Component, HostListener } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from "./components/projects/projects.component";
import { ServicesComponent } from "./components/services/services.component";
import { SkillsComponent } from "./components/skills/skills.component";

import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HomeComponent, FooterComponent, ProjectsComponent, ServicesComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portifolio';
  constructor(private MenuService: MenuService) {}

  currentSection: string = 'home';
  

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['home', 'services', 'skills', 'projects'];
    for (let section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom > 100) {
          this.currentSection = section;
          this.MenuService.setSection(section);
          break;
        }
      }
    }
  }
}
