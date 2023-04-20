import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter } from 'rxjs';
import { SearchService } from 'src/app/core/services/search.service';
import { Book } from 'src/app/core/models/result-response.model';
// import { ResultTableViewComponent } from '../../shared/result-table-view/result-table-view.component';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'front-end-internship-assignment-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  bookSearchResult: MatTableDataSource<Book>;
  bookSearch: FormControl;
  limit = 10;
  totalSize = 0;
  pageIndex = 0;
  searchText = '';
  // displayedColumns = ['title'];
  isLoading = false;
  constructor(private searchService: SearchService) {
    this.bookSearch = new FormControl('');
    this.bookSearchResult = new MatTableDataSource();
  }

  trendingSubjects: Array<any> = [
    { name: 'JavaScript' },
    { name: 'CSS' },
    { name: 'HTML' },
    { name: 'Harry Potter' },
    { name: 'Crypto' },
  ];

  ngOnInit(): void {
    this.bookSearch.valueChanges
      .pipe(
        debounceTime(300),
        filter((value: string) => value.length > 2)
      )
      .subscribe((value: string) => {
        this.searchText = value;
        this.pageIndex = 0;
        this.bookSearchResult.data = [];
        this.totalSize = 0;
        this.getAllBooks();
      });
  }

  public getPaginatorData(event: PageEvent): PageEvent {
    this.isLoading = true;
    this.searchService
      .getPaginatorData(
        this.searchText,
        this.limit,
        this.pageIndex * this.limit
      )
      .subscribe((data) => {
        this.bookSearchResult.data = data.docs;
        this.pageIndex = event.pageIndex;
        this.isLoading = false;
      });
    return event;
  }

  getAllBooks() {
    this.isLoading = true;
    this.searchService
      .getAllBooks(this.searchText, this.limit)
      .subscribe((data) => {
        this.bookSearchResult.data = data.docs;
        this.totalSize = data.num_found;
        this.isLoading = false;
      });
  }
}
