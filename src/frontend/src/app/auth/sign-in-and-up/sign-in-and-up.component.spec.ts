import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInAndUpComponent } from './sign-in-and-up.component';

describe('SignInAndUpComponent', () => {
  let component: SignInAndUpComponent;
  let fixture: ComponentFixture<SignInAndUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInAndUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInAndUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
