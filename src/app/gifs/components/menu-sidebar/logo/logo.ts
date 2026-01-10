import { environment } from './../../../../../environments/environment';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'menu-sidebar-logo',
  imports: [],
  templateUrl: './logo.html',
  styles: ``,
})
export class Logo {

  titleCompany = signal(environment.titleCompany);
  subTitleCompany = signal(environment.subtitleCompany);
}
