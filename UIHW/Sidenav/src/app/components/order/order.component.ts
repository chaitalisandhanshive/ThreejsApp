

import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ToastrService } from 'ngx-toastr';

import { identifierName } from '@angular/compiler';

import { OrderService } from 'src/app/services/order.service';

import { ProductService } from 'src/app/services/product.service';

import { Order } from 'src/app/models/order';

import { Product } from 'src/app/models/Category';




@Component({

  selector: 'app-order',

  templateUrl: './order.component.html',

  styleUrls: ['./order.component.css']

})

export class OrderComponent {

  route: any;

  constructor(

    private product: ProductService,

    private order:OrderService

  ) {}

  ngOnInit(): void {

    this.product.isUpdate.subscribe(d=>{

      if(d){

        this.product.selectedProduct.subscribe((data) => {

          this.selectedProduct = data;

          console.log(data)

          data.forEach(x=>{

            this.ProductList.push(Number(x.price));

            this.TotalAmount += Number(x.price);

          })

          this.selectedProduct.forEach((data) => {

           data['quantity'] = 1;

           this.totalquantity += data.quantity;

          });

        });

      }

    })

  }

selectedProduct: Product[] = [];

ProductList:any[]=[];

num: number = 0;

TotalAmount:number=0;

totalquantity:number=0;

orderModel!:Order;

userDetail!:any;




add(quantity: number,product:Product,i:number ) {

    this.product.isUpdate.next(false);

      product['quantity'] += 1;

      product['price']=Number(product['price']) + this.ProductList[i];

      this.TotalAmount += this.ProductList[i];

      this.totalquantity +=1;

     

  }

remove( ProdCount: number ,product:Product,i:number) {

    if (ProdCount != 1) {

      product['quantity'] -= 1;

      product['price'] -= this.ProductList[i];

     this.TotalAmount -= this.ProductList[i];

     this.totalquantity -= 1;

    }

  }




delete(i:number){

    this.selectedProduct.splice(i,1);

    this.TotalAmount=0;

    this.totalquantity=0;  

    this.selectedProduct.forEach(data=>{

    this.TotalAmount += data.price;

    this.totalquantity  += data.quantity;

   })  

}

  placeOrder(){

    let obj:Order={} as Order;  

    this.selectedProduct.map(data=>{  

     obj={  

      ProductId:data.id,  

      TotalAmount:this.TotalAmount+100,  

      Quantity:this.totalquantity,  

      OrderDate:new Date(),

      CustomerId:this.userDetail.user_id,  

      CustomerName:this.userDetail.username,

      ProductName:this.userDetail.title,

      OrderStatus:this.orderModel.OrderStatus,

    }  

    return obj;

      })




    this.order.CreateOrders(obj).subscribe(data=>{

     console.log(data);

     this.route.navigate(["payment"]);

    })




   }




}