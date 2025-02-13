import { Slug } from "sanity";

export interface Product{
    _id: string;
    name: string;
    type:'document';
    image? :{
        asset:{
            _ref:string;
            _type:"image"

        }
    }
    price: number;
    description?: string;
    slug:{
        _type:"slug"
        current:string
    };
    quantity:number;
    dimensions?: {
        height: number;
        width: number;
        depth: number;
      };
    features:string[];
    tags:string[];
    category:{
        _ref:string;
        _type:"reference"
        name:string;
    }

    productType:string;
}


// ✅ Define and export WishlistItem
export interface WishlistItem {
    _id: string;
    name: string;
    price: number;
    image: string; // Ensuring image is a string URL
  }