import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanybrowseComponent } from './companybrowse.component';

describe('CompanybrowseComponent', () => {
  let component: CompanybrowseComponent;
  let fixture: ComponentFixture<CompanybrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanybrowseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanybrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
