import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kidstory-web';
}

// @Component({
//   selector: 'app-click-me',
//   template: `
//     <button (click)="onClickMe()">Click me!</button>
//     {{clickMessage}}`
// })
// export class ClickMeComponent {
//   clickMessage = '';
//
//   onClickMe() {
//     this.clickMessage = 'You are my hero!';
//   }
// }


