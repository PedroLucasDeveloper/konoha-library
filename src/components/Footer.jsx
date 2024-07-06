import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box 
      as="footer" 
      p={4} 
      mt={8} 
      bg="black" 
      color="white" 
      textAlign="center" 
      position="absolute" 
      bottom="0" 
      height={['auto', '90px']}
      width="100vw"
      display="flex" 
      flexDirection="column" 
      justifyContent="center" 
      alignItems="center"
      
    >
      <Text mt={2} fontSize={['xs', 'sm']} textAlign="center">
        Projeto desenvolvido por Pedro Lucas, desenvolvedor web frontend
      </Text>
      <Text mt={2} fontSize={['xs', 'sm']} textAlign="center">
        © {new Date().getFullYear()} Todos os direitos reservados.
      </Text>
    </Box>
  );
};

export default Footer;