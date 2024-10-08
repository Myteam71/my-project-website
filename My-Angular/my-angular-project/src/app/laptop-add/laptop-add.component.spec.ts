import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopAddComponent } from './laptop-add.component';

describe('LaptopAddComponent', () => {
  let component: LaptopAddComponent;
  let fixture: ComponentFixture<LaptopAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaptopAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaptopAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
