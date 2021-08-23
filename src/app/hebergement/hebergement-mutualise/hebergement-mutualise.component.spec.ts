import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HebergementMutualiseComponent } from './hebergement-mutualise.component';

describe('HebergementMutualiseComponent', () => {
  let component: HebergementMutualiseComponent;
  let fixture: ComponentFixture<HebergementMutualiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HebergementMutualiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HebergementMutualiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
