import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderLinkComponent } from './header-link/header-link.component';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, HeaderLinkComponent, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the header with the correct links', () => {
    const linkElements = fixture.debugElement.queryAll(
      By.css('.header__list a')
    );

    expect(linkElements.length).toBe(component.links.length);
  });

  it('should display the "Réservez maintenant" button', () => {
    const buttonElement = fixture.debugElement.query(
      By.css('.header__btn .btn--primary')
    ).nativeElement as HTMLButtonElement;
    expect(buttonElement.textContent).toBe('Réservez maintenant');
  });
});
