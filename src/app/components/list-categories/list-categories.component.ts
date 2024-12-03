import { Component, ViewChild, OnInit, AfterViewInit, ViewChildren, QueryList, OnDestroy } from '@angular/core';
import { Category } from '../../models/categorie';
import { Router } from '@angular/router';
import { TestComponent } from '../test/test.component';
import { CategoryComponent } from '../category/category.component';
import { CategoryService } from 'src/app/services/category.service';
import { ConsumerService } from 'src/app/services/consumer.service';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css'],
})
export class ListCategoriesComponent implements AfterViewInit, OnInit,OnDestroy {
  @ViewChild(TestComponent) testComponent!: TestComponent;
  @ViewChild('i') input!: HTMLInputElement;
  @ViewChildren(CategoryComponent) children!: QueryList<CategoryComponent>;
  categories: Category[] = [];
  subscribers!: Subscription;
  constructor(
    private router: Router,
    private _categoryService: CategoryService,
    private _consumer:ConsumerService
  ) {}
  ngOnDestroy(): void {
    this.subscribers.unsubscribe();
  }
  ngOnInit(): void {
    //this.categories = this._categoryService.getCategories();
    this.subscribers = this._consumer.get<Category[]>('category').subscribe({
      next: (data) => (this.categories = data),
      error: (e) => console.log(e),
      complete: () => console.log('Terminé'),
    });
  }
  ngAfterViewInit(): void {
    console.log(this.input);
    console.log(this.testComponent.test);
    this.testComponent.start();
    this.children.forEach((e) => console.log(e));
  }

  title: string = '';

  test: string = '10';

  afficheDescription(id: number) {
    //foreach : ES
    this.categories.forEach((element) => {
      if (element.id == id) {
        alert(element.description);
      }
    });
    //filter : ES
    let category = this.categories.filter((element) => element.id == id)[0];
    alert(category.description);
  }

  changeTest() {
    this.test = '12';
  }
  
  DeleteCategory(event: any) {
    console.log(event);

    this._consumer.get<Product[]>('product')
      .subscribe({
        next: (data) => {
           data.forEach((element) => {
             console.log(element);
             element.categoryId == event && this._consumer.delete<Product>('product',element.id).subscribe()
           });
          this._consumer.delete<Category>('category', event).subscribe({
            next:()=> this.categories = this.categories.filter((c) => c.id != event)

          })   
      }
    })






    // this._consumer.delete<Category>('category', event).subscribe({
    //   next: () => {
    //     this._consumer.get<Product[]>('product').subscribe({
    //       next: (data) =>
    //         data.forEach((element) => {
    //           console.log(element)
    //          element.categoryId == event && this._consumer.delete<Product>('product',element.id).subscribe()
    //         })
    //     });
    //     this.categories = this.categories.filter((c) => c.id != event);
    //   }
        
        
    // })
    
  }

  toUpdate(c: Category) {
    console.log(JSON.stringify(c));
    this.router.navigate(['/category/update/', JSON.stringify(c)]);
  }
}
