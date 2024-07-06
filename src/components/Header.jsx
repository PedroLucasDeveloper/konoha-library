import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Heading, Text, useBreakpointValue } from '@chakra-ui/react';

const Header = () => {
  const headingSize = useBreakpointValue({ base: 'sm', md: 'md' });

  return (
    <Box bg="#FFA500" px={4} py={3} color="#F5F1E3" width="100vw">
      <Flex direction={['column', 'column', 'row']} justify="space-between" align="center">
        <Heading as="h1" size={['sm', 'md', 'md']} mb={[2, 2, 0]}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', textShadow: '1px 1px 1px black'}}>
            Konoha Library
          </Link>
        </Heading>
        <Flex align="center" mt={[2, 2, 0]}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/characters">Characters</NavLink>
          <NavLink to="/jutsus">Jutsus</NavLink>
          <NavLink to="/clans">Clans</NavLink>
        </Flex>
      </Flex>
    </Box>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    style={{
      color: 'white',
      textDecoration: 'none',
      marginLeft: '20px',
      fontWeight: 'bold',
      letterSpacing: '1px',
      textShadow: '1px 1px 1px black',
    }}
  >
    <Text fontSize="sm">{children}</Text>
  </Link>
);

export default Header;