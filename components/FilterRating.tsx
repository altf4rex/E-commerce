"use client"

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { useRouter, useSearchParams } from 'next/navigation'
import { Rating } from "@mui/material";

const FilterRating = () => {

  const ratings = ["5", "4", "3", "2", "1"];
  
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

  return (
    <div className="mb-12 max-xl:mb-6">
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
            label={<Rating name="read-only" size="small" value={Number(`${ratingValue}`)} readOnly className="mt-2"/>}
          />
        ))}
      </FormGroup>
    </div>
  );
};

export default FilterRating