import React from 'react';
import { Box, Text, Flex, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import narutoLogo from '../img/naruto-logo.png';

const Home = () => {
  return (
    <Box p={9} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
      <img src={narutoLogo} alt="Naruto Logo" style={{ width: '150px', marginBottom: '20px' }} />
      <Text fontSize={['20px', '2xl', '3xl']} whiteSpace={'nowrap'} fontWeight="bold" mb={4} color="black">
        Bem-vindo à Biblioteca de Konoha!
      </Text>
      <Text fontSize={['lg', 'xl', '2xl']} color="black" textAlign="center" mb={6}>
        Explore o mundo de Naruto com informações detalhadas sobre personagens, jutsus e clãs.
      </Text>
      <Flex justify="center" align="center">
        <Button
          as={RouterLink}
          to="/characters"
          colorScheme="yellow"
          variant="outline"
          mr={4}
          _hover={{ bg: '#FFA500', color: 'white' }}
          _focus={{ boxShadow: 'outline' }}
        >
          Explorar Personagens
        </Button>
        <Button
          as={RouterLink}
          to="/jutsus"
          colorScheme="yellow"
          variant="outline"
          _hover={{ bg: '#FFA500', color: 'white' }}
          _focus={{ boxShadow: 'outline' }}
        >
          Descobrir Jutsus
        </Button>
      </Flex>
    </Box>
  );
};

export default Home;