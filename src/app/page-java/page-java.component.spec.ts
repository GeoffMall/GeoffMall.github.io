import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageJavaComponent } from './page-java.component';

describe('PageJavaComponent', () => {
  let component: PageJavaComponent;
  let fixture: ComponentFixture<PageJavaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageJavaComponent]
    });
    fixture = TestBed.createComponent(PageJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
