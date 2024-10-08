import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopDeleteComponent } from './laptop-delete.component';

describe('LaptopDeleteComponent', () => {
  let component: LaptopDeleteComponent;
  let fixture: ComponentFixture<LaptopDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaptopDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaptopDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
