import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';

declare let $;

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @ViewChild('divAlert')
  divAlert: ElementRef;

  @Input()
  color = 'success';

  @Input()
  close = false;

  @Input()
  timeout = null;

  constructor() { }

  ngOnInit() {
    if (this.timeout) {
      setTimeout(() => {
        $(this.divAlert.nativeElement).alert('close');
      }, this.timeout);
    }
  }

}
