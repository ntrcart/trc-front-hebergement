import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HebergementCPanelComponent } from './hebergement-cpanel.component';

describe('HebergementCPanelComponent', () => {
  let component: HebergementCPanelComponent;
  let fixture: ComponentFixture<HebergementCPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HebergementCPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HebergementCPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
