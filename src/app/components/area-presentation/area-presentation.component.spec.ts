import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaPresentationComponent } from './area-presentation.component';

describe('AreaPresentationComponent', () => {
  let component: AreaPresentationComponent;
  let fixture: ComponentFixture<AreaPresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AreaPresentationComponent]
    });
    fixture = TestBed.createComponent(AreaPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
