import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverDetailsComponent } from './deliver-details.component';

describe('DeliverDetailsComponent', () => {
  let component: DeliverDetailsComponent;
  let fixture: ComponentFixture<DeliverDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliverDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
