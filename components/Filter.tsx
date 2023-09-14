
import {subcategoryCountProp, ProductArray, Product} from "@/types"
import {getProduct} from '@/utils'
import {categories} from "@/constants"
import FilterCategory from "./FilterCategory"
import FilterRating from "./FilterRating"
import FilterPrice from "./FilterPrice"
  
const Filter = ({products}: {products: ProductArray}) => {

  const subcategoryCount: { [key: string]: number } = {};

  let minPrice = Number.MAX_VALUE;
  let maxPrice = Number.MIN_VALUE;

  products.forEach((product: Product) => {
    if (subcategoryCount[product.subcategory]) {
      subcategoryCount[product.subcategory] += 1;
    } else {
      subcategoryCount[product.subcategory] = 1;
    }

    const price = parseFloat(product.price);
    if (!isNaN(price)) {
      if (price < minPrice) {
        minPrice = price;
      }
      if (price > maxPrice) {
        maxPrice = price;
      }
    }
  });

  return (
    <div className="flex flex-col shrink-0 w-[260px]">
      <FilterCategory subcategory={subcategoryCount}/>
      <FilterRating />
      <FilterPrice minPrice={minPrice} maxPrice={maxPrice}/> 
    </div>
  )
}

export default Filter