import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternprofileComponent } from './internprofile.component';

describe('InternprofileComponent', () => {
  let component: InternprofileComponent;
  let fixture: ComponentFixture<InternprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
