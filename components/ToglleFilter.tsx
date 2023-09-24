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
    <IconButton variant="outlined" className="rounded-2xl py-2 px-4 m-2 ml-4" color="neutral" onClick={() => setOpen(true)}>
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
          mt: 1,
          mr: 1,
        }}
      >
        <Typography
          component="label"
          htmlFor="close-icon"
          fontSize="sm"
          fontWeight="lg"
          sx={{ cursor: 'pointer' }}
        >
          close
        </Typography>
        <ModalClose id="close-icon" sx={{ position: 'initial' }} />
      </Box>
      <Filter products={products} category={category}/>
    </Drawer>
  </React.Fragment>
  )
}

export default ToglleFilter