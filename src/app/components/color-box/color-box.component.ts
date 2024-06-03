import { Component } from '@angular/core';

@Component({
  selector: 'app-color-box',
  templateUrl: './color-box.component.html',
  styleUrl: './color-box.component.scss'
})
export class ColorBoxComponent {
  colors: string[] = ['red', 'green', 'blue', 'yellow', 'purple'];
  currentColor: string = 'red';

  changeColor(color: string) {
    this.currentColor = color;
  }
}