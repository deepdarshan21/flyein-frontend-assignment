import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableViewComponent } from './table-view/table-view.component';
import {MatIconModule} from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [TableViewComponent],
  imports: [CommonModule, MatIconModule, MatTableModule],
  exports: [TableViewComponent, MatIconModule],
})
export class SharedModule {}
