import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '../_models/data.model';

@Injectable()
export class GetDataService {
    private API_URL = 'https://rickandmortyapi.com/api/character/';

    constructor(private http: HttpClient) {}

    getData(url = this.API_URL) {
        return this.http.get<Data>(url);
    }
}
