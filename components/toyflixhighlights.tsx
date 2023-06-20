import * as React from 'react';
import { Container, Text, SimpleGrid, Box, chakra, Stack, HStack, Icon } from '@chakra-ui/react';
import { AiFillCheckCircle } from 'react-icons/ai';

interface StatData {
  label: string;
  score: string;
}

const statData: StatData[] = [
  {
    label: 'Market Size (2020)',
    score: '$2.5Bn'
  },
  {
    label: 'CAGR (2020-2025)',
    score: '8.5%'
  },
  {
    label: 'Growth Rate',
    score: '8.5%'
  },
  {
    label: 'TAM',
    score: '$4.8Bn'
  }
];

const planList = [
  "Disruptor of 1.5 Bn $ toy industry in India",
  'Enabler of holistic development in kids from an early age.',
  'Promoter of sustainable green toys.',
  'Finally, a Wallet-friendly partner for the parents',
  'We are focused to promote Made in India toys & help the local artisans.',
];

const BrandStats = () => {
  return (
    <Container maxW="8xl" p={{ base: 4, sm: 10 }}>
      <Stack direction={{ base: 'column', md: 'row' }} justifyContent="space-between">
        <Stack spacing={4}>
          <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold">
            Highlights
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