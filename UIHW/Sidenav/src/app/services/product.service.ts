import { HttpClient, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { BehaviorSubject, map } from 'rxjs';

import { Product , Category} from '../models/Category';

@Injectable({

  providedIn: 'root'




})




export class ProductService {




  baseUrl ="http://localhost:7263/api/Shopping/";

  ProductData:Product=new Product();

  ProductList:Product[]=[];

  public selectedProduct:BehaviorSubject<Product[]>=new BehaviorSubject<Product[]>(this.ProductList)

  isUpdate:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient) { }

  getCategoryList()

  {




    let url = this.baseUrl+'GetCategoryList';




    return this.http.get<any[]>(url).pipe(




      map((categories)=>




      categories.map((category)=>{




        let mappedCategory: Category ={




          id : category.id,




          category: category.category,




          subCategory: category.subCategory




        };




        return mappedCategory;




      }))




   );




  }







  getProducts(category: string, subcategory: string, count: number)




  {




    return this.http.get<any[]>(this.baseUrl+'GetProducts',{




      params: new HttpParams()




      .set('category', category)




      .set('subcategory',subcategory)




      .set('count',count),




    });




  }




}