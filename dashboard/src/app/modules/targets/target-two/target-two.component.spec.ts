import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetTwoComponent } from './target-two.component';

describe('TargetTwoComponent', () => {
  let component: TargetTwoComponent;
  let fixture: ComponentFixture<TargetTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
