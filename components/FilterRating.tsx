"use client"
import {subcategoryCountProp} from "@/types"
import {getProduct} from '@/utils'
import {categories} from "@/constants"
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { useRouter, useSearchParams } from 'next/navigation'

const FilterRating = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleRatingCheckboxChange = (ratingValue: string) => {
    const params = new URLSearchParams(searchParams);
    const currentRating = params.get("rating");

    if (currentRating === ratingValue) {
      params.delete("rating");
    } else {
      params.set("rating", ratingValue);
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  const ratings = ["5", "4", "3", "2", "1"];

  return (
    <div className="mb-12">
      <h3 className='text-pop text-xl text-primary mb-3'>Rating</h3>
      <FormGroup>
        {ratings.map((ratingValue) => (
          <FormControlLabel
            key={ratingValue}
            control={
              <Checkbox
                color="success"
                checked={ratingValue === searchParams.get("rating")}
                onChange={() => handleRatingCheckboxChange(ratingValue)}
              />
            }
            label={ratingValue}
          />
        ))}
      </FormGroup>
    </div>
  );
};

export default FilterRating