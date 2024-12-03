import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/categorie';
import { CategoryService } from 'src/app/services/category.service';
import { ConsumerService } from 'src/app/services/consumer.service';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.css'],
})
export class FormCategoryComponent implements OnInit {
  constructor(private activated: ActivatedRoute, private _categoryService: CategoryService,
    private _consumerService:ConsumerService,private r:Router
  ){}
  category!: Category;
  id!: number;
  ngOnInit(): void {
    this.category = new Category();
    this.activated.params.subscribe({
      next: (param) => { 
        if (param['id'] != undefined) {
          this.id = param['id']
          this._consumerService.get<Category>('category', param['id'])
            .subscribe({
           next:(data)=>this.category=data
         })
        }
      }
    }  
    );
  }
  add(f: any, title: any) {
    this.category.available = true;
    if (this.id != undefined) {
      this._consumerService
        .update<Category>('category', this.category, this.id)
        .subscribe({
          next: () => this.r.navigate(['/home']),
        });
    }
    else {
      this._consumerService.add<Category>('category', this.category)
        .subscribe({
        next: () => this.r.navigate(['/home']),
      });
    }
    //this._categoryService.addCategory(this.category)
    //console.log(this.category);
    //console.log(f);
    //console.log(title)
  }
}
