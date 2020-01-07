import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { SortingRequest, SortingResponse } from './sorting.DTO.model';

@Injectable()
export class SortingService {

    constructor(private http: HttpClient){}

    getAlgorithmNames$(): Observable<String[]> {
        return this.http.get<String[]>(environment.baseURL + '/sorting/get-algorithm-names');
    }

    getSortedList$(sortingReq: SortingRequest): Observable<SortingResponse> {
        return this.http.post<SortingResponse>(environment.baseURL + '/sorting/sort', sortingReq);
    }
}