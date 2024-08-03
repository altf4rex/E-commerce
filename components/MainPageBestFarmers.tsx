import {getProduct} from "@/utils"
import ProductCard from "./ProductCard";



export default async function MainPageBestFarmers(){
  const bestFarmers = (await getProduct({category: "fruit-vegetables"})) || { items: []};
  
  return (
    <div className="scr flex overflow-auto">
        {bestFarmers.slice(-3).map((p) => (
            <ProductCard key={p.id} p={p}/>
        ))} 
    </div>
  )
}