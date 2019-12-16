import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Book} from '../book';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  book: Book;

  bookForm: FormGroup;

  @Output() editBook = new EventEmitter<Book>();

  constructor(private bookService: BookService,
              private route: Router) {
  }

  ngOnInit() {
    this.book = this.bookService.getData();
    this.bookForm = new FormGroup({
      name: new FormControl(this.book.name),
      description: new FormControl(this.book.description),
      price: new FormControl(this.book.price),
      image: new FormControl(this.book.image),
    });
  }

  onSubmit() {
    this.bookService.editBook(this.bookForm.value).subscribe(result => {
      alert('sua thanh cong!');
    });
  }

}
