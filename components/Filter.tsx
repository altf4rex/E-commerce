"use client"
import {subcategoryCountProp} from "@/types"
import {fetchProducts} from '@/utils'

  
const Filter = ({ subcategoryCount}: { subcategoryCount: subcategoryCountProp}) => {
  return (
    <div>
      <h3 className="">Categories</h3>
      {Object.keys(subcategoryCount).map((key) => (
    <div key={key}>
      <button onClick={() => fetchProducts}>{key}</button>
      <p>{subcategoryCount[key]}</p>
    </div>
  ))}
    </div> 
  )
}

export default Filter