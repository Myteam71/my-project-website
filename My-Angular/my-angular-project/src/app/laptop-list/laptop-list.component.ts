import { Component, OnInit } from '@angular/core';
import { LaptopService } from '../laptop.service';
import { Laptop } from '../laptop.model';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent implements OnInit{
  laptops: Laptop[] = [];

  constructor( private laptopServices:LaptopService,  private cdRef: ChangeDetectorRef){}

  ngOnInit(): void {
    this.loadLaptops();
  } 
  loadLaptops(): void {
    this.laptops = this.laptopServices.getLaptops();
    this.cdRef.detectChanges();
  }
  
  

  deleteLaptop(id:number):void{
    this.laptopServices.deleteLaptop(id);
    this.loadLaptops();
  }
}