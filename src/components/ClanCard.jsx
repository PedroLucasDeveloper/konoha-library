// ClanCard.jsx
import React from 'react';
import { Box, Text, Badge } from '@chakra-ui/react';

const ClanCard = ({ clan }) => {
  const { name, description, village } = clan;

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg">
      <Text fontSize="xl" fontWeight="bold" mb={2}>{name}</Text>
      <Text>{description}</Text>
      <Badge mt={2} variant="outline" colorScheme="green">{village}</Badge>
    </Box>
  );
};

export default ClanCard;