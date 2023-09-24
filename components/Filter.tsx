
import {ProductArray, Product} from "@/types"
import FilterCategory from "./FilterCategory"
import FilterRating from "./FilterRating"
import FilterPrice from "./FilterPrice"
  
const Filter = ({products, category}: {products?: ProductArray, category?: string}) => {

  return (
    <div className="flex flex-col shrink-0 w-[260px] mr-11 max-xl:mr-0 max-xl:ml-6">
      <h1 className="text-pop mb-4 text-2xl text-primary">Filter</h1>
      <FilterCategory products={products} category={category}/>
      <FilterRating />
      <FilterPrice products={products} category={category}/> 
    </div>
  )
}

export default Filter