import React from 'react';
import { Box, Text, Flex, Button, Link, Divider } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import narutoLogo from '../img/naruto-logo.png';

const Home = () => {
  return (
    <Box p={9} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
      <img src={narutoLogo} alt="Naruto Logo" style={{ width: '150px', marginBottom: '20px' }} /> {/* Adicionando uma imagem do logo de Naruto */}
      <Text fontSize="3xl" fontWeight="bold" mb={4} color="black">
        Bem-vindo à Biblioteca de Konoha!
      </Text>
      <Text fontSize="xl" color="black" mb={6}>
        Explore o mundo de Naruto com informações detalhadas sobre personagens, jutsus e clãs.
      </Text>
      <Flex justify="center" mb={6}>
        <Button
          as={RouterLink}
          to="/characters"
          colorScheme="purple" 
          variant={'outline'}
          mr={4}
          _hover={{ bg: 'purple.600', color: 'white' }} 
          _focus={{ boxShadow: 'outline' }} 
        >
          Explorar Personagens
        </Button>
        <Button
          as={RouterLink}
          to="/jutsus"
          colorScheme="purple" 
          variant={'outline'}
          _hover={{ bg: 'purple.600', color: 'white' }} 
          _focus={{ boxShadow: 'outline' }} 
        >
          Descobrir Jutsus
        </Button>
      </Flex>
      <Divider borderTop={'1px solid gray'} margin={'auto'} />
    </Box>
  );
};

export default Home;