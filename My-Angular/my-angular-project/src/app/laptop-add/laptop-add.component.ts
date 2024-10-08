import { Component } from '@angular/core';
import { LaptopService } from '../laptop.service';
import { Laptop } from '../laptop.model';
@Component({
  selector: 'app-laptop-add',
  templateUrl: './laptop-add.component.html',
  styleUrl: './laptop-add.component.css'
})
export class LaptopAddComponent {
  newLaptop: Laptop = { id: 0, brand: '', model: '', price: 0 };

  constructor(private laptopService: LaptopService) { }

  addLaptop(): void {
    // this.laptopService.addLaptop(this.newLaptop);
    // this.newLaptop = { id: 0, brand: '', model: '', price: 0 };
    console.log('Adding laptop:', this.newLaptop);
    this.laptopService.addLaptop(this.newLaptop);
    this.newLaptop = { id: 0, brand: '', model: '', price: 0 };
  // this.router.navigate(['/']);
  }
}

