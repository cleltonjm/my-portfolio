import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  private sectionSubject = new BehaviorSubject<string>('home');
  section$ = this.sectionSubject.asObservable();

  setSection(section: string) {
    this.sectionSubject.next(section);
  }
}
