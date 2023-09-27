import FilterCategory from "./FilterCategory"
import FilterRating from "./FilterRating"
import FilterPrice from "./FilterPrice"
  
const Filter = ({category}: {category?: string}) => {

  return (
    <div className="flex flex-col shrink-0 w-[260px] mr-11 max-xl:mr-0 max-xl:ml-6 max-xl:mt-[-30px]">
      <h1 className="text-pop mb-8 text-2xl text-primary">Filter</h1>
      <FilterCategory category={category}/>
      <FilterRating />
      <FilterPrice category={category}/>
    </div>
  )
}

export default Filter