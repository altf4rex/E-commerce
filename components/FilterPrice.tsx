"use client"
import { Product } from '@/types';
import Slider from '@mui/material/Slider';
import { useRouter, useSearchParams } from 'next/navigation'
import * as React from 'react';
import  {useState} from 'react';
import { minmaxPrice } from '@/constants';

const FilterPrice = ({category}: {category?: string }) => {
  let minDistance = 1;
  let step = 1;

  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePriceChange = (minPrice: number, maxPrice: number) => {
    const params = new URLSearchParams(searchParams.toString());
    const priceRange = `${minPrice}-${maxPrice}`;
    params.set('price', priceRange);
    router.push(`?${params.toString()}`, { scroll: false });
  };
  
 const initialPriceRange = {
  min: parseFloat(searchParams.get("price")?.split("-")[0]) || minmaxPrice[category][0],
  max: parseFloat(searchParams.get("price")?.split("-")[1]) || minmaxPrice[category][1],
};

  if((initialPriceRange.max - initialPriceRange.min) < 10) {
    step = 0.1;
    minDistance = 0.5;
  }

  const [value1, setValue1] = React.useState<number[]>([initialPriceRange.min, initialPriceRange.max]);
  const [minPrice, setMinPrice] = useState<number>(initialPriceRange.min);
  const [maxPrice, setMaxPrice] = useState<number>(initialPriceRange.max);

  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
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

  const handleMinInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const minValue = parseFloat(event.target.value) || 0;
    setMinPrice(minValue);
    handlePriceChange(minValue, value1[1]);
  };

  const handleMaxInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const maxValue = parseFloat(event.target.value) || 0;
    setMaxPrice(maxValue);
    handlePriceChange(value1[0], maxValue);
  };

  return (
    <div className="mb-12 max-xl:mb-6">
      <h3 className="text-pop text-xl text-primary mb-7">Price</h3>
      <Slider
      step={step}
        min={minmaxPrice[category][0]}
        max={minmaxPrice[category][1]}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        disableSwap
        color="success"
        onMouseLeave = {() => handlePriceChange(value1[0], value1[1])}
      />
      <div className="flex justify-between mt-7 text-sans text-lg">
        <input
          className="text-sans p-3 w-[109px] text-base border rounded-2xl text-gray-400 bg-primaryBg"
          value={value1[0]}
          onChange={handleMinInputChange}
          type="text"
        />
        <input
          className="text-sans p-3 w-[109px] text-base border rounded-2xl text-gray-400 bg-primaryBg"
          value={value1[1]}
          onChange={handleMaxInputChange}
          type="text"
        />
      </div>
    </div>
  );
};

export default FilterPrice;