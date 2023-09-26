import {part, getProduct} from "@/utils"
import {Product, ProductArray} from "@/types";
import ProductCard from "@/components/ProductCard";
import Navigation from "@/components/Navigation";
import Filter from "@/components/Filter";
import ToglleFilter from "@/components/ToglleFilter";
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
        <Navigation />
         <main className="flex justify-start max-xl:flex-col">
         <div className="hidden max-xl:flex max-xl:justify-center ">
            <ToglleFilter products={products} category={category}/> 
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
