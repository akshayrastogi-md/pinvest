import * as React from 'react';
import { Container, Text, SimpleGrid, Box, chakra, Stack, HStack, Icon } from '@chakra-ui/react';
import { AiFillCheckCircle } from 'react-icons/ai';

interface StatData {
  label: string;
  score: string;
}

const statData: StatData[] = [
  {
    label: 'Test Flights Conducted',
    score: '1000+'
  },
  {
    label: 'BVLOS Flight Testing',
    score: '200+'
  },
  {
    label: 'DCIS training data',
    score: '2 TB+'
  },
  {
    label: 'Including high mountain & desert',
    score: '4+ test locations'
  }
];

const planList = [
  "Part of Medicine from the Sky Project by Govt of Telangana",
  'Undisclosed trials with 3 big brands for E-commerce & Logistics deliveries.',
  'Registered with DGCA as authorised Drone Startup for R&D.',
];

const BrandStats = () => {
  return (
    <Container maxW="8xl" p={{ base: 4, sm: 10 }}>
      <Stack direction={{ base: 'column', md: 'row' }} justifyContent="space-between">
        <Stack spacing={4}>
          <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold">
          Accomplishments
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