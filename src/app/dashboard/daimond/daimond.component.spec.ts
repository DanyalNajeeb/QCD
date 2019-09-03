import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaimondComponent } from './daimond.component';

describe('DaimondComponent', () => {
  let component: DaimondComponent;
  let fixture: ComponentFixture<DaimondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaimondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaimondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
