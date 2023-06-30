import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationsService } from 'src/app/shared/services/accommodations.service';
import { AccommodationsComponent } from './accommodations.component';

describe('AccommodationsComponent', () => {
  let component: AccommodationsComponent;
  let fixture: ComponentFixture<AccommodationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
    });
    fixture = TestBed.createComponent(AccommodationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAccommodations() from the accommodationService', () => {
    const accommodationService = TestBed.inject(AccommodationsService);
    const spy = spyOn(
      accommodationService,
      'getAccommodations'
    ).and.callThrough();
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should display h2 header with the correct title', () => {
    const h2Element = fixture.nativeElement.querySelector('h2');
    expect(h2Element.textContent).toBe('Nos Hébergements');
  });
});
