import { Component, Input } from '@angular/core';
import { Link } from '../header.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-header-link',
  templateUrl: './header-link.component.html',
  styleUrls: ['./header-link.component.scss'],
  imports: [RouterModule],
})
export class HeaderLinkComponent {
  @Input() link: Link = { path: '', title: '' };

}
