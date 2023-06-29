import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { HeaderLinkComponent } from './header-link.component';

describe('HeaderLinkComponent', () => {
  let component: HeaderLinkComponent;
  let fixture: ComponentFixture<HeaderLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeaderLinkComponent, RouterTestingModule]
    });
    fixture = TestBed.createComponent(HeaderLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
