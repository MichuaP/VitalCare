import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCorreoComponent } from './login-correo.component';

describe('LoginCorreoComponent', () => {
  let component: LoginCorreoComponent;
  let fixture: ComponentFixture<LoginCorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginCorreoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
