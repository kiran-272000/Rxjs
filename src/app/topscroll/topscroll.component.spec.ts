import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopscrollComponent } from './topscroll.component';

describe('TopscrollComponent', () => {
  let component: TopscrollComponent;
  let fixture: ComponentFixture<TopscrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopscrollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
