import {part, getProduct} from "@/utils"
import {Product, ProductArray} from "@/types";
import ProductCard from "@/components/ProductCard";
import Navigation from "@/components/Navigation";
import Filter from "@/components/Filter";
import { Suspense } from 'react';
import { Loading } from "@/components/Loading";

  export default async function Page(props){
    let category;
    props.params.category !== 'search' ? {category} = props.params : category = 'undefined';
    const {subcategory} = props.searchParams;
    const {rating} = props.searchParams;
    const {price} = props.searchParams;
    const {search} = props.searchParams;
    
    const products: ProductArray = (await getProduct({search:`${search}`, category:`${category}`,subcategory:`${subcategory}`, rating:`${rating}`, priceRange:`${price}`})) || { items: []};
    
    return (
      <>
      <Suspense fallback={<Loading />}>
        <Navigation />
         <main className="flex justify-start"> 
         <Filter products={products} category={category}/>
            <div className="flex flex-wrap justify-start max-w-[869px]">
            {products.map((p: Product) => (
              <ProductCard p={p} />
            ))}
          </div>
        </main>
        </Suspense>
      </>
    )
  }
