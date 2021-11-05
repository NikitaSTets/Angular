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
  @ViewChild('modalcontainer') containerEl!: ElementRef;

  constructor(@Inject(JQ_TOKEN) private $: any) {

  }

  closeModal() {
    console.log(this.containerEl.nativeElement)
    this.$(this.containerEl.nativeElement).modal('hide');
  }
}