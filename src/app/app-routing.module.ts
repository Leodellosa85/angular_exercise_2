import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogItemComponent } from './blog/components/blog-item/blog-item.component';
import { BookItemComponent } from './book/components/book-item/book-item.component';
import { UserModule } from './user/user.module';
import { FormComponent } from './user/components/form/form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'blog',
    pathMatch: 'prefix',
  },
  {
    path: 'blog',
    component: BlogItemComponent
  },

  {
    path: 'book',
    component: BookItemComponent,
  },
  
  {
    path: 'user',
    component: FormComponent

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


