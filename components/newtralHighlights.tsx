import * as React from 'react';
import { Container, Text, SimpleGrid, Box, chakra, Stack, HStack, Icon } from '@chakra-ui/react';
import { AiFillCheckCircle } from 'react-icons/ai';

interface StatData {
  label: string;
  score: string;
}

const statData: StatData[] = [
  {
    label: 'Market Size',
    score: '$10.9Bn'
  },
  {
    label: 'CAGR',
    score: '28.66%'
  },
  {
    label: 'Growth Rate',
    score: '26.97%'
  },
  {
    label: 'TAM',
    score: '17k'
  }
];

const planList = [
  "2 B2B customers acquired in past 45 days (1 paid and 1 unpaid)",
  '1 Potential B2B Customer at advanced proposal stage (unpaid).',
  '3 Potential B2B Customers at Proposal Review Stage (paid).',
  '300% Full-time team increase from 1 to 4',
  '2 Strategic Partnerships for market access and SME.',
  '2 Community Support (Nasscom, Pedalstart)',
];

const BrandStats = () => {
  return (
    <Container maxW="8xl" p={{ base: 4, sm: 10 }}>
      <Stack direction={{ base: 'column', md: 'row' }} justifyContent="space-between">
        <Stack spacing={4}>
          <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold">
            Traction as 24th Jan 2023:
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
       {/*  <Stack>
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
        </Stack> */}
      </Stack>
    </Container>
  );
};

export default BrandStats;