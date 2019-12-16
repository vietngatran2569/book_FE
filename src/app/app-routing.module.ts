import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import {BookAddComponent} from './book-add/book-add.component';
import {BookEditComponent} from './book-edit/book-edit.component';


const routes: Routes = [
  {
    path: '',
    component: BookListComponent,
  },
  {
    path: 'add-book',
    component: BookAddComponent,
  },
  {
    path: 'edit-book',
    component: BookEditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
