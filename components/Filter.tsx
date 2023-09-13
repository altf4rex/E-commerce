
import {subcategoryCountProp, ProductArray, Product} from "@/types"
import {getProduct} from '@/utils'
import {categories} from "@/constants"
import FilterCategory from "./FilterCategory"
import FilterRating from "./FilterRating"
import FilterPrice from "./FilterPrice"
  
const Filter = ({products}: {products: ProductArray}) => {

  const subcategoryCount: { [key: string]: number } = {};

  products.forEach((product: Product) => {
 if (subcategoryCount[product.subcategory]) {
   subcategoryCount[product.subcategory] += 1;
 } else {
   subcategoryCount[product.subcategory] = 1;
 }

});
  return (
    <div className="flex flex-col shrink-0 w-[260px]">
      <FilterCategory subcategory={subcategoryCount}/>
      <FilterRating />
      <FilterPrice /> 
    </div>
  )
}

export default Filter