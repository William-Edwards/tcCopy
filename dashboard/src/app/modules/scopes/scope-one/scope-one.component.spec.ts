import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopeOneComponent } from './scope-one.component';

describe('ScopeOneComponent', () => {
  let component: ScopeOneComponent;
  let fixture: ComponentFixture<ScopeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScopeOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScopeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
