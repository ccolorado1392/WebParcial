import { VehiclesService } from './../services/vehicles.service.service';
import { Totales, Vehicle } from './../models/vehicles.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss'],
})
export class VehicleListComponent implements OnInit {
  vehicles: Vehicle[] = [];
  totales: Totales[] = [];
  constructor(private vehiclesService: VehiclesService) {}

  ngOnInit(): void {
    this.vehiclesService.find().subscribe((data) => {
      this.vehicles = data;
      let grouped = this.groupByMarca(data);
      let keys = Object.keys(grouped);
      for (let index = 0; index < keys.length; index++) {
        const marca = keys[index];
        const group = grouped[keys[index]] as Vehicle[];
        this.totales.push(new Totales(marca, group.length));
      }
    });
  }

  groupByMarca(array: Vehicle[]) {
    return array.reduce((r, a) => {
      r[a.marca] = r[a.marca] || [];
      r[a.marca].push(a);
      return r;
    }, Object.create(null));
  }
}
