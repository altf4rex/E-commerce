'use client'
import {ProductArray} from "@/types";
import Filter from "./Filter";
import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import ModalClose from '@mui/joy/ModalClose';
import TuneIcon from '@mui/icons-material/Tune';

const ToglleFilter = ({category}: {category?: string}) => {
    const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
    <IconButton variant="outlined"
    sx={
      {
        py:1, 
        px: 2, 
        margin: 1,
        ml: 2, 
        mb: 2, 
      }
    } 
    color="neutral" onClick={() => setOpen(true)}>
      <TuneIcon />
      <p className="text-pop text-base ml-2">filter</p>
    </IconButton>
    <Drawer open={open} onClose={() => setOpen(false)}>
    <Box sx={{
            margin: 0,
            minHeight: "100%",
            display: "grid",
            gridTemplateRows: "auto 1fr auto",
          }}>
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
      <Filter category={category}/>
      <button onClick={
              () => {setOpen(false)}} 
              className='py-5 px-4  text-pop text-xl text-white bg-secondary border-secondaryBgDark hover:bg-secondaryHover max-sm:text-lg'>
                Apply
            </button>
      </Box>
    </Drawer>
  </React.Fragment>
  )
}

export default ToglleFilter