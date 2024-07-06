import React from 'react';
import { Box, Text, SimpleGrid } from '@chakra-ui/react';
import ClanCard from '../components/ClanCard'; // Vamos criar este componente em seguida

const Clans = () => {
  // Lista de clãs (simulação de dados estáticos)
  const clans = [
    { id: 1, name: 'Uchiha Clan', description: 'Famous for their Sharingan ability.', village: 'Konoha' },
    { id: 2, name: 'Hyuga Clan', description: 'Known for their Byakugan ability.', village: 'Konoha' },
    { id: 3, name: 'Senju Clan', description: 'Founders of the village of Konoha.', village: 'Konoha' },
    // Adicione mais clãs conforme necessário
  ];

  return (
    <Box p={5}>
      <Text fontSize="2xl">Clans</Text>
      <SimpleGrid columns={[1, 2, 3]} gap={6} mt={4}>
        {clans.map((clan) => (
          <ClanCard key={clan.id} clan={clan} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Clans;