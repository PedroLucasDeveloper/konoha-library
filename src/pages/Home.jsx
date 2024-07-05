import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box p={5}>
      <Text fontSize="2xl">Welcome to Konoha Library!</Text>
      <Text mt={4}>Explore the world of Naruto with detailed information on characters, jutsus, and clans.</Text>
    </Box>
  );
};

export default Home;