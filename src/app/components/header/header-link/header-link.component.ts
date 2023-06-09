import { Component, Input } from '@angular/core';
import { Link } from '../header.component';

@Component({
  selector: 'app-header-link',
  templateUrl: './header-link.component.html',
  styleUrls: ['./header-link.component.scss']
})
export class HeaderLinkComponent {
  @Input() link: Link = { path: '', title: '' };

}
