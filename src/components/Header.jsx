import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Heading } from '@chakra-ui/react';

const Header = () => (
  <Box bg="teal.500" p={4} color="white">
    <Flex justify="space-between" align="center">
      <Heading size="lg">Konoha Library</Heading>
      <nav>
        <Link to="/">Home</Link> | <Link to="/characters">Characters</Link> | <Link to="/jutsus">Jutsus</Link> | <Link to="/clans">Clans</Link>
      </nav>
    </Flex>
  </Box>
);

export default Header;