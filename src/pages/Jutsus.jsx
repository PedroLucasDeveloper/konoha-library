import React from 'react';
import { Box, Text, SimpleGrid } from '@chakra-ui/react';
import JutsuCard from '../components/JustsuCard'; 

const Jutsus = () => {
  // Lista de jutsus (simulação de dados estáticos)
  const jutsus = [
    { id: 1, name: 'Rasengan', description: 'A spinning ball of chakra formed and held in the palm of the user\'s hand.', type: 'Ninjutsu' },
    { id: 2, name: 'Chidori', description: 'A high concentration of lightning chakra in the user\'s hand.', type: 'Ninjutsu' },
    { id: 3, name: 'Shadow Clone Technique', description: 'Creates physical copies of the user.', type: 'Ninjutsu' },
    // Adicione mais jutsus conforme necessário
  ];

  return (
    <Box p={5}>
      <Text fontSize="2xl">Jutsus</Text>
      <SimpleGrid columns={[1, 2, 3]} gap={6} mt={4}>
        {jutsus.map((jutsu) => (
          <JutsuCard key={jutsu.id} jutsu={jutsu} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Jutsus;