
import {ProductList} from "../utlis/ProductList"
import {ProductCard} from "./ProductCard"


export const Product = () =>{
  return (
    <div className="product">
     {ProductList.map((product,index)=>{
      return <ProductCard key={product.id} product={product} />;
     })}
    
    </div>
  );
};