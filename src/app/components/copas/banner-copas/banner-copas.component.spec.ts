import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCopasComponent } from './banner-copas.component';

describe('BannerCopasComponent', () => {
  let component: BannerCopasComponent;
  let fixture: ComponentFixture<BannerCopasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerCopasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerCopasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
