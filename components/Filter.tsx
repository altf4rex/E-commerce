
import {ProductArray, Product} from "@/types"
import FilterCategory from "./FilterCategory"
import FilterRating from "./FilterRating"
import FilterPrice from "./FilterPrice"
  
const Filter = ({products, category}: {products?: ProductArray, category?: string}) => {

  return (
    <div className="flex flex-col shrink-0 w-[260px] mr-11">
      <FilterCategory products={products} category={category}/>
      <FilterRating />
      <FilterPrice products={products} category={category}/> 
    </div>
  )
}

export default Filter