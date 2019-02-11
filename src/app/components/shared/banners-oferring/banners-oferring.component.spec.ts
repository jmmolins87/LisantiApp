import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannersOferringComponent } from './banners-oferring.component';

describe('BannersOferringComponent', () => {
  let component: BannersOferringComponent;
  let fixture: ComponentFixture<BannersOferringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannersOferringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannersOferringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
