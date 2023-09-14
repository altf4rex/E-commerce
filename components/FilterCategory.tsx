"use client"

import {subcategoryCountProp} from "@/types"
import {getProduct} from '@/utils'
import {categories} from "@/constants"

import { useRouter, useSearchParams } from 'next/navigation'

const FilterCategory = ({ subcategory }: { subcategory: subcategoryCountProp }) => {
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
    router.push(`?${params.toString()}`);
  };
  return (
    <div className="mb-12">
      <h3 className="text-pop mb-4 text-lg text-primary">Categories</h3>
      {Object.keys(subcategory).map((key) => (
        <div 
        className={`flex justify-between mb-3 text-sans text-sm text-primary ${currentCategory === key.toLocaleLowerCase() ? 'bg-gray-400' : ''}`}
        key={key}
        // style={()? "bg-gray-400" : ""}
        >
          <p
            onClick={() => handleCategoryClick(key)}
            style={{ cursor: 'pointer' }}
          >
            {key}
          </p>
          <p>{subcategory[key]}</p>
        </div>
      ))}
    </div>
  );
};

export default FilterCategory;