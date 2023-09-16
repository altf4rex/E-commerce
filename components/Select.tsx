"use client"
import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
const SelectFormat = () => {
  const [count, setCount] = React.useState(0);
  return (
    <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          pt: 2,
          mb: 2,
        }}
      >
        <IconButton
          size="sm"
          variant="outlined"
          onClick={() => setCount((c) => (
            c ? c - 1 : 0
            ))}
        >
          <Remove />
        </IconButton>
        <Typography fontWeight="md" textColor="text.secondary">
          {count}
        </Typography>
        <IconButton
          size="sm"
          variant="outlined"
          onClick={() => setCount((c) => c + 1)}
        >
         <Add />
        </IconButton>
      </Box>
  );
}

export default SelectFormat