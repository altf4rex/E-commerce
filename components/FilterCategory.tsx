"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import { subcategory } from "@/constants";
const FilterCategory = ({category}: {category?: string}) => {
  
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('subcategory');
  
  const handleCategoryClick = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (currentCategory === category.toLocaleLowerCase()) {
      params.delete('subcategory');
    } else {
      params.set('subcategory', category.toLocaleLowerCase());
    }
    router.push(`?${params.toString()}`, { scroll: false });
  };
 
  return (
    <div className="mb-12 max-xl:mb-6">
      <h3 className="text-pop mb-4 text-lg text-primary">Categories</h3>
      {subcategory[((category && category !== 'undefined') ? category : "all") as keyof typeof subcategory].map((key) => (
          <p
          className={`mb-1 p-2 w-max cursor-pointer text-sans text-lg text-primary rounded-lg hover:bg-gray-200 ${currentCategory === key.toLocaleLowerCase() ? 'bg-gray-200' : ''}`}
          onClick={() => handleCategoryClick(key)}
          key={key}
          >
            {key}
          </p>
      ))}
    </div>
  );
};

export default FilterCategory;