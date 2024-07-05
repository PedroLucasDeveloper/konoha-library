import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" p={4} mt={8} bg="black" color="white" textAlign={'center'} position={'fixed'} bottom={'0'} height={'90px'} width={'100vw'}>
      <Text mt={2} fontSize="sm">
        Projeto desenvolvido por Pedro Lucas, desenvolvedor web frontend
      </Text>
      <Text mt={2} fontSize="sm">
        © {new Date().getFullYear()} Todos os direitos reservados.
      </Text>
    </Box>
  );
};

export default Footer;