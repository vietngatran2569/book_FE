import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Book} from '../book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent implements OnInit {

  bookForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(('')),
    price: new FormControl(''),
    image: new FormControl(''),
  });

  @Output() addBook = new EventEmitter<Book>();

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    const book = this.bookForm.value;
    this.addBook.emit(book);
    this.bookService.addBook(book).subscribe(result => {
      alert('da them thanh cong!');
    });
  }

}
