import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationsListComponent } from './prestations-list.component';

describe('PrestationsListComponent', () => {
  let component: PrestationsListComponent;
  let fixture: ComponentFixture<PrestationsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PrestationsListComponent]
    });
    fixture = TestBed.createComponent(PrestationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
