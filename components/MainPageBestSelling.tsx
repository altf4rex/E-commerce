
import {getProduct} from "@/utils"
import ProductCard from "./ProductCard";


export default async function MainPageBestSelling(){
    
const bestSelling = (await getProduct({category: "bakery"})) || { items: []};

  return (
    <div className="scr flex overflow-auto">
        {bestSelling.slice(-3).map((p) => (
            <ProductCard key={p.id} p={p}/>
        ))} 
    </div>
  )
}