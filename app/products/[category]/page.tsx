import {part, getProduct} from "@/utils"
import {Product, ProductArray} from "@/types";
import ProductCard from "@/components/ProductCard";
import Navigation from "@/components/Navigation";
import Filter from "@/components/Filter";
import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

  export default async function Page(props){
    const {category} = props.params;
    const {subcategory} = props.searchParams;
    const {rating} = props.searchParams;
    const {price} = props.searchParams;

    const products: ProductArray = (await getProduct(category, subcategory, rating, price)) || { items: []};

    return (
      <>
        <Navigation />
         <main className="flex justify-between"> 
          <Filter products={products} /> 
          <div className="flex flex-wrap justify-around max-w-[869px]">
          {products.map((p: Product) => (
            <ProductCard {...p} />
          ))}
          </div>
        </main>
      </>
    )
  }
