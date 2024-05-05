import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnaespecialidadComponent } from './unaespecialidad.component';

describe('UnaespecialidadComponent', () => {
  let component: UnaespecialidadComponent;
  let fixture: ComponentFixture<UnaespecialidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnaespecialidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnaespecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
