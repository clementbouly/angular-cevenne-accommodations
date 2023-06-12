import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationItemComponent } from './prestation-item.component';

describe('PrestationItemComponent', () => {
  let component: PrestationItemComponent;
  let fixture: ComponentFixture<PrestationItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PrestationItemComponent]
    });
    fixture = TestBed.createComponent(PrestationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
