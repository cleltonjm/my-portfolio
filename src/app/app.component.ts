import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from "./components/projects/projects.component";
import { ServicesComponent } from "./components/services/services.component";
import { SkillsComponent } from "./components/skills/skills.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HomeComponent, FooterComponent, ProjectsComponent, ServicesComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portifolio';
}
