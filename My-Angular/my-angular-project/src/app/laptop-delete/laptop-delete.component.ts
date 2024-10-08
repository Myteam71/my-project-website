import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaptopService } from '../laptop.service';

@Component({
  selector: 'app-laptop-delete',
  templateUrl: './laptop-delete.component.html',
  styleUrls: ['./laptop-delete.component.css']
})
export class LaptopDeleteComponent {
  id: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private laptopService: LaptopService
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }
  deleteLaptop(): void {
    if (this.id !== undefined) {
      this.laptopService.deleteLaptop(this.id);
    }
  }
}
