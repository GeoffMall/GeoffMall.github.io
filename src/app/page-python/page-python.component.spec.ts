import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePythonComponent } from './page-python.component';

describe('PagePythonComponent', () => {
  let component: PagePythonComponent;
  let fixture: ComponentFixture<PagePythonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagePythonComponent]
    });
    fixture = TestBed.createComponent(PagePythonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
