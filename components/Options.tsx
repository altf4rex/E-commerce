"use client"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Typography from '@mui/joy/Typography';
import ProductDescription from './ProductDescription';
import Reviews from './Reviews';
import Question from './Question';

export default function TabsPageExample({origins, recipe, rating}: {origins: string, recipe: string, rating:string}) {
  const [index, setIndex] = React.useState(0);
  return (
    <Box
      sx={{
        flexGrow: 1,
        overflowX: 'hidden',
        p: 3,
        borderRadius: 'md',
      }}
    >
      <Tabs
        aria-label="Pipeline"
        value={index}
        onChange={(event, value) => setIndex(value as number)}
      >
        <TabList
        className="text-pop text-lg bg-white"
          sx={{
            pt: 2,
            justifyContent: 'center',
            [`&& .${tabClasses.root}`]: {
              flex: 'initial',
              bgcolor: 'transparent',
              '&:hover': {
                bgcolor: 'transparent',
              },
              [`&.${tabClasses.selected}`]: {
                color: '#6A983C',
                '&::after': {
                  height: '3px',
                  borderTopLeftRadius: '3px',
                  borderTopRightRadius: '3px',
                  bgcolor: '#6A983C',
                },
              },
            },
          }}
        >
          <Tab indicatorInset>
          Description{' '}
          </Tab>
          <Tab indicatorInset>
          Reviews{' '}
            <Chip
              size="sm"
              variant="soft"
              color={index === 1 ? 'primary' : 'neutral'}
              sx={{ ml: 1 }}
            >
              2
            </Chip>
          </Tab>
          <Tab indicatorInset>
            Questions{' '}
            <Chip
              size="sm"
              variant="soft"
              color={index === 1 ? 'primary' : 'neutral'}
              sx={{ ml: 1 }}
            >
              2
            </Chip>
            </Tab>
        </TabList>
        <Box
          sx={(theme) => ({
            background: '#FFF'
          })}
        >
          <TabPanel value={0}>
            <ProductDescription origins={origins} recipe={recipe}/>
          </TabPanel>
          <TabPanel value={1}>
            <Reviews rating={rating} />
            <Reviews rating={rating} />
          </TabPanel>
          <TabPanel value={2}>
            <Question />
            <Question />
          </TabPanel>
        </Box>
      </Tabs>
    </Box>
  );
}