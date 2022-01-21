import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'myworkspace-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent { }
