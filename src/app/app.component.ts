import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  getIsSigedIn() {
    const token = localStorage.getItem('token');
    console.log(token);
    return token ? true : false;
  }
}
