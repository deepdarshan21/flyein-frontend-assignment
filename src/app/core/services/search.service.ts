import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';
import { BookResponse } from 'src/app/core/models/book-response.model';
import { SearchResponse } from 'src/app/core/models/result-response.model';
import { PageEvent } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private apiService: ApiService) {}

  getAllBooks(subjectName: string, limit: number): Observable<SearchResponse> {
    return this.apiService.get(
      `/search.json?q=${subjectName
        .toLowerCase()
        .split(' ')
        .join('+')}&limit=${limit}`
    );
  }

  getPaginatorData(
    subjectName: string,
    limit: number,
    offset: number
  ): Observable<SearchResponse> {
    return this.apiService.get(
      `/search.json?q=${subjectName
        .toLowerCase()
        .split(' ')
        .join('+')}&offset=${offset}&limit=${limit}`
    );
  }
}
