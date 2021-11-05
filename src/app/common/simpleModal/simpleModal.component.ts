import { Component, Input } from '@angular/core';

@Component({
  selector: 'simpleModal',
  templateUrl: './simpleModal.component.html',
  styleUrls: ['./simpleModal.component.css']
})
export class SimpleModalComponent {
  @Input() title!: string;
}