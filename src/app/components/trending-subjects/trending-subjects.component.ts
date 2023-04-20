import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SubjectsService } from '../../core/services/subjects.service';
import { Book } from 'src/app/core/models/result-response.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'front-end-internship-assignment-trending-subjects',
  templateUrl: './trending-subjects.component.html',
  styleUrls: ['./trending-subjects.component.scss'],
})
export class TrendingSubjectsComponent implements OnInit {
  isLoading = true;
  subjectName = '';
  // allBooks: Book[] = [];
  bookSearchResult: MatTableDataSource<Book>;

  constructor(
    private route: ActivatedRoute,
    private subjectsService: SubjectsService
  ) {
    this.bookSearchResult = new MatTableDataSource();
  }

  getAllBooks() {
    this.subjectsService.getAllBooks(this.subjectName).subscribe((data) => {
      this.bookSearchResult.data = data?.works;
      // this.subjectsArray = data;
      this.isLoading = false;
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.subjectName = params.get('name') || '';
      this.isLoading = true;
      this.getAllBooks();
    });
  }
}
