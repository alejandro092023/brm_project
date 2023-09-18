import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BrmService {
  url = 'http://localhost:3000/api';
  opciones = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  headers: any = '';
  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' }).set(
      'Authorization',
      'Bearer ' + token
    );
  }

  register(data: String): Observable<any> {
    return this.http.post<any>(
      this.url + '/users',
      JSON.stringify(data),
      this.opciones
    );
  }

  login(data: String): Observable<any> {
    return this.http.post<any>(
      this.url + '/users/login',
      JSON.stringify(data),
      this.opciones
    );
  }

  productPost(data: String): Observable<any> {
    return this.http.post<any>(
      this.url + '/products',
      JSON.stringify(data),
      this.opciones
    );
  }

  productPut(id: number, data: object): Observable<any> {
    return this.http.put<any>(this.url + '/products/' + id, data, {
      headers: this.headers,
    });
  }

  productDelete(id: number): Observable<any> {
    return this.http.put<any>(this.url + '/products/delete/' + id, null, {
      headers: this.headers,
    });
  }

  products(): Observable<any> {
    return this.http.get<any>(this.url + '/products', {
      headers: this.headers,
    });
  }

  product(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/products/' + id, {
      headers: this.headers,
    });
  }

  shopping(): Observable<any> {
    return this.http.get<any>(this.url + '/shopping');
  }

  menu(): Observable<any> {
    return this.http.get<any>(this.url + '/menu', {
      headers: this.headers,
    });
  }
}
