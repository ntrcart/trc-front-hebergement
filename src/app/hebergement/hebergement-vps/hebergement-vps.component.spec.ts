import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HebergementVpsComponent } from './hebergement-vps.component';

describe('HebergementVpsComponent', () => {
  let component: HebergementVpsComponent;
  let fixture: ComponentFixture<HebergementVpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HebergementVpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HebergementVpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
