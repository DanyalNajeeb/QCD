import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DNavComponent } from './d-nav.component';

describe('DNavComponent', () => {
  let component: DNavComponent;
  let fixture: ComponentFixture<DNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
