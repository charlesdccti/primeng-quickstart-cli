import { Component, OnInit } from '@angular/core';
import { Car } from '../domain/car';
import { CarService } from '../services/carservice';

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.css']
})
export class TableFilterComponent implements OnInit {

  cars: Car[];
  cols: any[];
  yearFilter: number;
  yearTimeout: any;

  constructor(private carService: CarService) { }


  ngOnInit() {
      this.carService.getCarsSmall().then(cars => this.cars = cars);

      this.cols = [
          { field: 'vin', header: 'Vin' },
          { field: 'year', header: 'Year' },
          { field: 'brand', header: 'Brand' },
          { field: 'color', header: 'Color' }
      ];
  }

  onYearChange(event, dt) {
      if (this.yearTimeout) {
          clearTimeout(this.yearTimeout);
      }

      this.yearTimeout = setTimeout(() => {
          dt.filter(event.value, 'year', 'gt');
      }, 250);
  }

}