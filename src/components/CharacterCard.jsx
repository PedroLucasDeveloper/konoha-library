// CharacterCard.jsx
import React from 'react';
import { Box, Image, Text, Stack } from '@chakra-ui/react';

const CharacterCard = ({ character }) => {
  const { name, description, image } = character;

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg">
      <Image src={image} alt={name} boxSize="200px" objectFit="cover" />
      <Stack mt={4} spacing={2}>
        <Text fontWeight="bold">{name}</Text>
        <Text>{description}</Text>
      </Stack>
    </Box>
  );
};

export default CharacterCard;