import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopasComponent } from './copas.component';

describe('CopasComponent', () => {
  let component: CopasComponent;
  let fixture: ComponentFixture<CopasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
