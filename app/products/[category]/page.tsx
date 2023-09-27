import {getProduct} from "@/utils"
import {Product} from "@/types";
import ProductCard from "@/components/ProductCard";
import Navigation from "@/components/Navigation";
import Filter from "@/components/Filter";
import ToglleFilter from "@/components/ToglleFilter";

  export default async function Page({
    params,
    searchParams,
  }: {
    params: { category: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }){
    let category;
    params.category !== 'search' ? category = params.category : category = 'undefined';

    const {subcategory} = searchParams;
    const {rating} = searchParams;
    const {price} = searchParams;
    const {search} = searchParams;
    
    const products = (await getProduct({search:`${search}`, category:`${category}`,subcategory:`${subcategory}`, rating:`${rating}`, priceRange:`${price}`})) || { items: []};
    
    return (
      <>
        <Navigation />
         <main className="flex justify-start max-xl:flex-col">
         <div className="hidden max-xl:flex max-xl:justify-center ">
            <ToglleFilter category={category}/> 
          </div>
         <div className="max-xl:hidden">
            <Filter category={category}/>
         </div>
            <div className="flex flex-wrap justify-start max-w-[869px] max-xl:justify-center">
            {products.map((p: Product) => (
              <ProductCard p={p} />
            ))}
          </div>
        </main>
      </>
    )
}
