import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VehiclesService } from './../services/vehicles.service.service';
import { Vehicle } from './../models/vehicles.model';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { faker } from '@faker-js/faker';
import { VehicleListComponent } from './vehicle-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('VehicleListComponent', () => {
  let component: VehicleListComponent;
  let fixture: ComponentFixture<VehicleListComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NgbModule],
      declarations: [VehicleListComponent],
      providers: [VehiclesService],
    }).compileComponents();

    fixture = TestBed.createComponent(VehicleListComponent);
    component = fixture.componentInstance;

    for (let i = 0; i < 3; i++) {
      const vehicles = new Vehicle(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      );
      component.vehicles.push(vehicles);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have getData function', () => {
    const service: VehiclesService = TestBed.get(VehiclesService);
    expect(service.find).toBeTruthy();
  });

  it('should have 4 <tr> elements', () => {
    expect(debug.queryAll(By.css('tr'))).toHaveSize(4);
  });
});
