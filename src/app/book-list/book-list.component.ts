import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  bookList: Book[];
  isFormHidden = true;

  constructor(private bookService: BookService,
              private router: Router) {
    this.updateList();
  }

  ngOnInit() {
  }

  showFormAdd() {
    this.isFormHidden = !this.isFormHidden;
  }

  addBook(book: Book) {
    this.bookList.push(book);
  }

  updateList() {
    this.bookService.getList().subscribe(result => {
      this.bookList = result;
    });
  }

  goToEdit(item: Book) {
    this.bookService.setData(item);
    this.router.navigateByUrl('/edit-book');
  }

}
