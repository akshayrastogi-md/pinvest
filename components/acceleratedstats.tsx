import * as React from 'react';
import { Container, Text, SimpleGrid, Box, Center } from '@chakra-ui/react';

interface XData {
  id: number;
  label: string;
  score: string;
}

const xData: XData[] = [
  {
    id: 1,
    label: 'Joined Wishlist',
    score: '10,000+'
  },
  {
    id: 2,
    label: 'Founders',
    score: '900+'
  },
  {
    id: 3,
    label: 'Discussions Completed',
    score: '1200+'
  },
  {
    id: 4,
    label: 'Onboarded Mentors',
    score: '200+'
  },
];

const BrandStats = () => {
  return (
    <Container maxW="4xl" p={{ base: 5, md: 10 }}>
         
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={{ base: 2, sm: 5 }} mt={12} mb={4}>
        {xData.map((data) => (
          <Box key={data.id} p={{ base: 2, sm: 5 }} textAlign="center">
            <Text fontWeight="extrabold" fontSize="xx-large" textColor={'darkviolet'}>
              {data.score}
            </Text>
            <Text fontSize="sm" fontWeight={'semibold'}>{data.label}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default BrandStats;