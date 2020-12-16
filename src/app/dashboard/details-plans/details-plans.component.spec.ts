import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPlansComponent } from './details-plans.component';

describe('EditPlansComponent', () => {
  let component: DetailsPlansComponent;
  let fixture: ComponentFixture<DetailsPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
