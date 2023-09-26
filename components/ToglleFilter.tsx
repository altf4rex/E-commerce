'use client'
import {Product, ProductArray} from "@/types";
import Filter from "./Filter";
import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import Typography from '@mui/joy/Typography';
import ModalClose from '@mui/joy/ModalClose';
import TuneIcon from '@mui/icons-material/Tune';

const ToglleFilter = ({products, category}: {products?: ProductArray, category?: string}) => {
    const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
    <IconButton variant="outlined" className="rounded-2xl py-2 px-4 m-2 ml-4 mb-4 max-xl:px-10 " color="neutral" onClick={() => setOpen(true)}>
      <TuneIcon />
      <p className="text-pop text-base ml-2">filter</p>
    </IconButton>
    <Drawer open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
          ml: 'auto',
          mt: 2,
          mr: 2,
        }}
      >
        <ModalClose id="close-icon" className="closeSvg" sx={{ position: 'initial'}} />
      </Box>
      <Filter products={products} category={category}/>
      
      <button onClick={
              () => {setOpen(false)}} 
              className='py-5 px-4  text-pop text-xl text-white bg-secondary border-secondaryBgDark hover:bg-secondaryHover max-sm:text-lg'>
                Apply
            </button>

    </Drawer>
  </React.Fragment>
  )
}

export default ToglleFilter