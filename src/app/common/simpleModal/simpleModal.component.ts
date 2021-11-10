import { Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';
import { JQ_TOKEN } from '..';

@Component({
  selector: 'simple-modal',
  templateUrl: './simpleModal.component.html',
  styleUrls: ['./simpleModal.component.css']
})
export class SimpleModalComponent {
  @Input() title!: string;
  @Input() elementId!: string;
  @Input() closeOnBodyClick: string = 'false';
  @ViewChild('modalcontainer') containerEl!: ElementRef;

  constructor(@Inject(JQ_TOKEN) private $: any) {

  }

  closeModal() {
    if (this.closeOnBodyClick.toLocaleLowerCase() === 'true') {
      this.$(this.containerEl.nativeElement).modal('hide');
    }
  }
}