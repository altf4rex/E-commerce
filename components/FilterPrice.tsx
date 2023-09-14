"use client"
import Slider from '@mui/material/Slider';
import { useRouter, useSearchParams } from 'next/navigation'
import * as React from 'react';
// function valuetext(value: number) {
//     return `${value}°C`;
//   }
  
  const minDistance = 10;

const FilterPrice = () => {
  const router = useRouter();
const searchParams = useSearchParams();

const handlePriceChange = (minPrice: number, maxPrice: number) => {
  const params = new URLSearchParams(searchParams.toString());

  // Формируем строку вида "price=10-20"
  const priceRange = `${minPrice}-${maxPrice}`;
  
  // Устанавливаем параметр "price" в URL
  params.set('price', priceRange);

  router.push(`?${params.toString()}`);
};

  const [value1, setValue1] = React.useState<number[]>([20, 37]);

  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  return (
    <div className="mb-12">
      <h3 className='text-pop text-xl text-primary mb-7'>Price</h3>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        // getAriaValueText={valuetext}
        disableSwap
        color="success"
        onMouseUp={() => handlePriceChange(value1[0], value1[1])}
      />
      <div className='flex justify-between mt-7 text-sans text-lg'>
        <input type="text" />
        <input type="text" />
      </div>
      
    </div>
  );
};

export default FilterPrice