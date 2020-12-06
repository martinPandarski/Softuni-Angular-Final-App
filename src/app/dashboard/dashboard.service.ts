import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost, IPlan } from '../shared/interfaces/interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable()
export class DashboardService {

  constructor(private http: HttpClient) { }

  loadPlanList(): Observable<IPlan[]> {
    return this.http.get<IPlan[]>(`${apiUrl}/data/plans`);
  }

  // loadTheme(id: string): Observable<IPlan<IPost>> {
  //   return this.http.get<IPlan<IPost>>(`${apiUrl}/themes/${id}`, { withCredentials: true });
  // }

  // saveTheme(data: any): Observable<IPlan<any>> {
  //   return this.http.post<IPlan<any>>(`${apiUrl}/themes`, data, { withCredentials: true });
  // }

}
