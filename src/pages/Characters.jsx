// CharactersPage.jsx
import React from 'react';
import { Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import CharacterCard from '../components/CharacterCard'; // Vamos criar este componente em seguida

const CharactersPage = () => {
  // Lista de personagens (simulação de dados estáticos)
  const characters = [
    { id: 1, name: 'Naruto Uzumaki', description: 'Protagonist of the series.', image: '' },
    { id: 2, name: 'Sasuke Uchiha', description: 'Rival and friend of Naruto.', image: '' },
    { id: 3, name: 'Sakura Haruno', description: 'Team 7 member with exceptional chakra control.', image: '' },
    // Adicione mais personagens conforme necessário
  ];

  return (
    <Flex direction="column" align="center" p={4}>
      <Heading as="h1" size="xl" mb={6}>
        Characters
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} gap={6} w="100%">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default CharactersPage;