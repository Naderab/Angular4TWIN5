import { AfterViewInit, Component, DoCheck } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {
  isLogged!: Boolean;
  constructor(private auth: AuthService) {
    this.isLogged = this.auth._isLogged();
  }
  ngDoCheck(): void {
       console.log('here');
       this.isLogged = this.auth._isLogged();
  }
  title = 'Project4TWIN5';
}
