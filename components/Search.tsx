"use client"

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import {categories} from "@/constants";

export default function Search(){
  return (
    <div className='flex'>
      <Autocomplete 
      
        className='select'
        options={categories}
        renderInput={(params) => <TextField {...params} label="Categories"/>}
      /> 
      <TextField label="Search Products, categories ..." className='search' />
    </div>
  )
}
