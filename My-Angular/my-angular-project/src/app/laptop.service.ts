import { Injectable } from '@angular/core';
import {Laptop} from './laptop.model';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {
  private laptops: Laptop[] = [
    { id: 1, brand: 'Dell', model: 'XPS 13', price: 1000 },
    { id: 2, brand: 'Apple', model: 'MacBook Pro', price: 2000 },
    { id: 3, brand: 'HP', model: 'Spectre x360', price: 1500 }
  ];
  constructor() { }

  getLaptops(): Laptop[] {
    return this.laptops;
  }

  getLaptop(id: number): Laptop | undefined {
    return this.laptops.find(laptop => laptop.id === id);
  }

  addLaptop(laptop: Laptop): void {
    // this.laptops.push({ ...laptop, id: this.laptops.length + 1 });
    console.log('Before adding:', this.laptops);
    this.laptops.push({ ...laptop, id: this.laptops.length + 1 });
    console.log('After adding:', this.laptops);
  }

  updateLaptop(updatedLaptop: Laptop): void {
    const index = this.laptops.findIndex(laptop => laptop.id === updatedLaptop.id);
    if (index !== -1) {
      this.laptops[index] = updatedLaptop;
    }
  }

  deleteLaptop(id: number): void {
    this.laptops = this.laptops.filter(laptop => laptop.id !== id);
  }
}

