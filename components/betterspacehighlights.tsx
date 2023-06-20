import * as React from 'react';
import { Container, Text, SimpleGrid, Box, chakra, Stack, HStack, Icon } from '@chakra-ui/react';
import { AiFillCheckCircle } from 'react-icons/ai';

interface StatData {
  label: string;
  score: string;
}

const statData: StatData[] = [
  {
    label: 'Market Size ( By 2027)',
    score: '$102Bn'
  },
  {
    label: 'Sekkers from Obtainable Market',
    score: '7.15M+'
  },
  {
    label: '15% commission @ $10 per session with 3 times repeat per customer avg.',
    score: '$4.50'
  },
  {
    label: 'Revenue - 2023-2027 From India only',
    score: '$32M'
  }
];

const planList = [
  "Queer affirmative and trauma informed psychologists. We have a 3 stage filter system for psychologists to join the platform.",
  'Best Incentive structure for the providers, with community based approach and peer supervisions.',
  'An automated backend management for providers to focus more on therapy and less on admin work',
  'Hybrid model of therapy pods (online/offline) to make therapy more and more accessible for seekers in need',
  'We have 200+ inhouse standardised psychometric tests to ensure better results.',
];

const BrandStats = () => {
  return (
    <Container maxW="8xl" p={{ base: 4, sm: 10 }}>
      <Stack direction={{ base: 'column', md: 'row' }} justifyContent="space-between">
        <Stack spacing={4}>
          <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold">
            How we are different
          </chakra.h1>

          <Stack spacing={2}>
            {planList.map((data, index) => (
              <HStack key={index} alignItems="center" spacing={1} fontSize="md">
                <Icon as={AiFillCheckCircle} w={4} h={4} color="blue.400" />
                <Text fontSize="md">{data}</Text>
              </HStack>
            ))}
          </Stack>
        </Stack>
        <Stack>
          <SimpleGrid columns={2} spacing={5} pt={8} pl={{ base: 0, md: 10 }} margin="auto 0">
            {statData.map((data, index) => (
              <Stack
                key={index}
                pl={3}
                py={1}
                pr={1}
                borderLeft="2px solid"
                borderLeftColor="blue.400"
                justifyContent="space-between"
              >
                <Box fontSize="2xl" fontWeight="bold" color="blue.400">
                  {data.score}
                </Box>
                <Text fontSize="md">{data.label}</Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
      </Stack>
    </Container>
  );
};

export default BrandStats;