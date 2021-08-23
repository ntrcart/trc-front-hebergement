import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HebergementCmsComponent } from './hebergement-cms.component';

describe('HebergementCmsComponent', () => {
  let component: HebergementCmsComponent;
  let fixture: ComponentFixture<HebergementCmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HebergementCmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HebergementCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
