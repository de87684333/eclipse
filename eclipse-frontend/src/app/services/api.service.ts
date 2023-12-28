import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { DataModel } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<DataModel[]> {
    const data = [];
    for (let i = 1; i < 31; i++) {
      const day = i < 10 ? `0${i}` : i;

      for (let j = 0; j < 24; j++) {
        const hour = j < 10 ? `0${j}` : j;
        data.push({
          "timestamp": `2023-12-${day}T${hour}:00:00`, "price": 50 + i * 10 + j, "demand": 600 + i * 100 + j, "supply": 650 + i * 50 + j
        });
      }
    }

    return of(data);

    //return this.httpClient.get<DataModel[]>(`${environment.apiUrl}/data`);
  }
}
