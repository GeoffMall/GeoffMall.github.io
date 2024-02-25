import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGoComponent } from './page-go.component';

describe('PageGoComponent', () => {
  let component: PageGoComponent;
  let fixture: ComponentFixture<PageGoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageGoComponent]
    });
    fixture = TestBed.createComponent(PageGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
