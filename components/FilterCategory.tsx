
import {subcategoryCountProp} from "@/types"
import {getProduct} from '@/utils'
import {categories} from "@/constants"
  
const FilterCategory = ({subcategory}: {subcategory: subcategoryCountProp}) => {

  return (
    <div className="mb-12">
      <h3 className="text-pop mb-4 text-lg text-primary">Categories</h3>
      {Object.keys(subcategory).map((key) => (
        <div className="flex justify-between mb-3 text-sans text-sm text-primary" key={key}>
          <p>{key}</p>
          <p>{subcategory[key]}</p>
        </div>
      ))}
    </div>
  )
}

export default FilterCategory