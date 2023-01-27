import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonlightDisplayComponent } from './moonlight-display.component';

describe('MoonlightDisplayComponent', () => {
  let component: MoonlightDisplayComponent;
  let fixture: ComponentFixture<MoonlightDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoonlightDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoonlightDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
