import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from '../models/vehicles.model';

@Injectable({
  providedIn: 'root',
})
export class VehiclesService {
  urlServer: string;

  constructor(private http: HttpClient) {
    this.urlServer =
      'https://gist.githubusercontent.com/josejbocanegra/17bb8c76405e43655d551a90800c8a81/raw/d41b4acc3457e51e7533fad6d5e9925ee9676457/202212_MISW4104_Grupo1.json';
  }

  find(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.urlServer, {});
  }
}
