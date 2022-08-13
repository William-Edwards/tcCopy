import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopeTwoComponent } from './scope-two.component';

describe('ScopeTwoComponent', () => {
  let component: ScopeTwoComponent;
  let fixture: ComponentFixture<ScopeTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScopeTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScopeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
