import { Component,Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularfos';
  fontColor = 'blue';
    sayHelloId = 1;
    canClick = false;
    message = 'Welcome to Angular Development';
    sayMessage() {
        alert(this.message);
    }
}
