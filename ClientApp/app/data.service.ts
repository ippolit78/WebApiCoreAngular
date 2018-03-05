import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

export interface TestEntity {
  name: string;
}

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getAllEntities(): Observable<TestEntity[]> {
    return this.http.get<TestEntity[]>('http://localhost:5000/api/test');
  }

  getEntity(name: string): Observable<TestEntity> {
    return this.http.get<TestEntity>('http://localhost:5000/api/test/' + name);
  }

  insertEntity(testEntity: TestEntity): Observable<TestEntity> {
    return this.http.post<TestEntity>('http://localhost:5000/api/test/', testEntity);
  }

  updateEntity(testEntity: TestEntity): Observable<void> {
    return this.http.put<void>('http://localhost:5000/api/test/' + testEntity.name, testEntity);
  }

  deleteEntity(name: string) {
    return this.http.delete('http://localhost:5000/api/test/' + name);
  }

  uploadDataFromForm(testEntity: JSON): Observable<JSON[]> {
    return this.http.post<JSON[]>('http://localhost:5000/api/formdata', testEntity);
  }
}