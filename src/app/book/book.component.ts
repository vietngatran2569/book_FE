import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();
  constructor(private bookService: BookService,
              private router: Router) { }

  ngOnInit() {
  }
  editBook() {
    this.edit.emit();
  }
  deleteBook() {
    this.bookService.deleteBook(this.book.id).subscribe(result => {
      alert('xoa thanh cong');
      this.delete.emit();
    });
  }

}
