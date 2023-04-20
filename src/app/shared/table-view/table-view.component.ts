// import { Component, Input } from '@angular/core';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatTableDataSource } from '@angular/material/table';
// import { Book } from 'src/app/core/models/book-response.model';

// @Component({
//   selector: 'front-end-internship-assignment-table-view',
//   templateUrl: './table-view.component.html',
//   styleUrls: ['./table-view.component.scss'],
// })
// export class TableViewComponent {
//   // @Input() booksList: Book[] = [];
//   // @Input() subjectName: string = '';
//   @Input() booksList: MatTableDataSource<Book> = new MatTableDataSource();
//   displayedColumns: string[] = ['title', 'author_name', 'publish_date'];
// }

import { Component, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Book } from 'src/app/core/models/result-response.model';

@Component({
  selector: 'front-end-internship-assignment-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
})
export class TableViewComponent {
  @Input() booksList: MatTableDataSource<Book> = new MatTableDataSource();
  // @Input() subjectName: string = '';
  @Input() isTrendingSubjects = false;
  displayedColumns: string[] = [
    'title',
    'author_name',
    'authors',
    'first_publish_year',
  ];
  getDisplayedColumns(): string[] {
    // const tmp = 'authors';
    return this.displayedColumns.filter((cd) => {
      if (this.isTrendingSubjects && cd == 'author_name') return false;
      if(!this.isTrendingSubjects && cd == 'authors') return false;
      else return true;
    });
    // })
  }
}
