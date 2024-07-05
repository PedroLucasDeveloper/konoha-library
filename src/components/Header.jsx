import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const Header = () => (
  <Box bg="#22007C" px={4} py={3} color="#F5F1E3" backgroundAttachment={'fixed'} width={'100vw'}>
    <Flex justify="space-between" align="center">
      <Heading as="h1" size="md">
        <Link to="/" style={{ color: 'white', textDecoration: 'none', textShadow: '1px 1px 1px black'}}>
          Konoha Library
        </Link>
      </Heading>
      <Flex align="center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/characters">Characters</NavLink>
        <NavLink to="/jutsus">Jutsus</NavLink>
        <NavLink to="/clans">Clans</NavLink>
      </Flex>
    </Flex>
  </Box>
);

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    style={{
      color: 'white',
      textDecoration: 'none',
      marginLeft: '20px',
      fontWeight: 'bold',
      letterSpacing: '1px',
    }}
  >
    <Text fontSize="sm">{children}</Text>
  </Link>
);

export default Header;