import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from './book';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) {
  }

  private data;

  setData(data) {
    this.data = data;
  }

  getData() {
    let tmp = this.data;
    this.clearData();
    return tmp;
  }

  clearData() {
    this.data = undefined;
  }

  getList(): Observable<Book[]> {
    return this.httpClient.get<Book[]>('http://jsonplaceholder.typicode.com/posts');
  }

  addBook(book: Book) {
    return this.httpClient.post('http://jsonplaceholder.typicode.com/posts', book);
  }

  editBook(book: Book) {
    return this.httpClient.put('http://jsonplaceholder.typicode.com/posts', book);
  }

  deleteBook(id: number) {
    return this.httpClient.delete('http://jsonplaceholder.typicode.com/posts' + id);
  }


}
