export class SuggestedProduct {

    banerimage : string;

 

     category : Category;

 }

 

 

 

 

 export class NavigationItem {

 

     category : string;

 

      subcategory :string[];

 

     

 }

 

 

 

  export class Category {

 

     id : number;

 

     category : string;

 

     subCategory: string;

 

 }

 

 

 export class Product {

 

     id: number;

 

     title:string;

 

     description: string;

 

     productCategory: Category;

 

     price: number;

 

     quantity: number;

 

     imageName: string;

 

 }

