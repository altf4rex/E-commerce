
import {ProductArray, Product} from "@/types"
import FilterCategory from "./FilterCategory"
import FilterRating from "./FilterRating"
import FilterPrice from "./FilterPrice"
  
const Filter = ({products, category}: {products?: ProductArray, category?: string}) => {
  
  

  // let minPrice = Number.MAX_VALUE;
  // let maxPrice = Number.MIN_VALUE;
 // const subcategoryCount: { [key: string]: number } = {};
  
  // products?.forEach((product: Product) => {
  //   if (subcategoryCount[product.subcategory]) {
  //     subcategoryCount[product.subcategory] += 1;
  //   } else {
  //     subcategoryCount[product.subcategory] = 1;
  //   }

    // const price = parseFloat(product.price);
    // if (!isNaN(price)) {
    //   if (price < minPrice) {
    //     minPrice = price;
    //   }
    //   if (price > maxPrice) {
    //     maxPrice = price;
    //   }
    // }
  // });

  return (
    <div className="flex flex-col shrink-0 w-[260px] mr-11">
      <FilterCategory products={products} category={category}/>
      <FilterRating />
      <FilterPrice /> 
    </div>
  )
}

export default Filter