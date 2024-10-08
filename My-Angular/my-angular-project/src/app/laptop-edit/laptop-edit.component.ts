import { Component } from '@angular/core';
import { LaptopService } from '../laptop.service';
import { Laptop } from '../laptop.model';
import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-laptop-edit',
  templateUrl: './laptop-edit.component.html',
  styleUrl: './laptop-edit.component.css'
})
export class LaptopEditComponent {
  laptop: Laptop | undefined;

  constructor(
    private route: ActivatedRoute,
    private laptopService: LaptopService,private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.laptop = this.laptopService.getLaptop(id);
  }
  updateLaptop(): void {
    if (this.laptop) {
      this.laptopService.updateLaptop(this.laptop);
      // this.cdRef.detectChanges();
    }
  }
}
