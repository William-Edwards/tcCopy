import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetOneComponent } from './target-one.component';

describe('TargetOneComponent', () => {
  let component: TargetOneComponent;
  let fixture: ComponentFixture<TargetOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
