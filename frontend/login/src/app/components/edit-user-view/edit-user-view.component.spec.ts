import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserViewComponent } from './edit-user-view.component';

describe('EditUserViewComponent', () => {
  let component: EditUserViewComponent;
  let fixture: ComponentFixture<EditUserViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditUserViewComponent]
    });
    fixture = TestBed.createComponent(EditUserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
