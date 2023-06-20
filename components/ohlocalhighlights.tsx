import * as React from 'react'
import {
  Container,
  Text,
  SimpleGrid,
  Box,
  chakra,
  Stack,
  HStack,
  Icon
} from '@chakra-ui/react'
import { AiFillCheckCircle } from 'react-icons/ai'
import Highlights from './highlights'

interface StatData {
  label: string
  score: string
}

const statData: StatData[] = [
  {
    label: 'Application Downloads',
    score: '24K'
  },
  {
    label: 'No. Of Products Requested',
    score: '5,700+'
  },
  {
    label: 'Avg monthly website visits',
    score: '4,100'
  },
  {
    label: 'Avg price of product request by buyer (3 months)',
    score: '31,000 INR'
  }
]

const planList = [
  'Bid GMV Rs.7.3+ Cr',
  'Avg Discount over Amazon 8-10%.',
  'Fastest Bid to Delivery Time : 30 mins.',
  'Total PR Till Date 5,700',
  '700+ Sellers onboarded 30% are paid sellers.'
]

const BrandStats = () => {
  return (
    <>
      {/* <Container maxW="8xl" p={{ base: 4, sm: 10 }}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
        >
          <Stack spacing={4}>
            <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold">
              Highlights
            </chakra.h1>

            <Stack spacing={2}>
              {planList.map((data, index) => (
                <HStack
                  key={index}
                  alignItems="center"
                  spacing={1}
                  fontSize="md"
                >
                  <Icon as={AiFillCheckCircle} w={4} h={4} color="blue.400" />
                  <Text fontSize="md">{data}</Text>
                </HStack>
              ))}
            </Stack>
          </Stack>
          <Stack>
            <SimpleGrid
              columns={2}
              spacing={5}
              pt={8}
              pl={{ base: 0, md: 10 }}
              margin="auto 0"
            >
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
      </Container> */}
      <Highlights />
    </>
  )
}

export default BrandStats
