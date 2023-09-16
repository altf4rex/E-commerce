"use client"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import DialogTitle from '@mui/joy/DialogTitle';
import ModalClose from '@mui/joy/ModalClose';
import Image from "next/image";

export default function Cart() {
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <button 
      className="flex relative"
      onClick={() => setOpen(true)}
      >
        <Image
            src='/basket.svg'
            alt='basket'
            width={24}
            height={24}
        />
        <div className="basket-circle">4</div>
        </button>
      <Drawer open={open} size='sm' anchor='right' onClose={() => setOpen(false)}>
        <ModalClose />
        <DialogTitle>Title</DialogTitle>
      </Drawer>
    </Box>
  );
}