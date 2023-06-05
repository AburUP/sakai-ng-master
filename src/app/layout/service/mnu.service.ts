import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mnu } from '../api/mnu';

@Injectable({
  providedIn: 'root',
})
export class MnuService {

  constructor(private http : HttpClient) { }

  getMenus() {
    return this.http.get<any>('assets/demo/data/menu.json')
        .toPromise()
        .then(res => res.data as Mnu[])
        .then(data => data);
}
}
