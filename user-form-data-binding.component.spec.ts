import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormDataBindingComponent } from './user-form-data-binding.component';

describe('UserFormDataBindingComponent', () => {
  let component: UserFormDataBindingComponent;
  let fixture: ComponentFixture<UserFormDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFormDataBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFormDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
