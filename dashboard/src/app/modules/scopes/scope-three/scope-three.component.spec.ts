import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopeThreeComponent } from './scope-three.component';

describe('ScopeThreeComponent', () => {
  let component: ScopeThreeComponent;
  let fixture: ComponentFixture<ScopeThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScopeThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScopeThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
