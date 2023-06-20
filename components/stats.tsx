import * as React from 'react'
import {
  Container,
  Text,
  SimpleGrid,
  Heading,
  Box,
  chakra
} from '@chakra-ui/react'

interface StatData {
  id: number
  label: string
  score: string
  heading: string
}

const statData: StatData[] = [
  {
    id: 1,
    label: 'building ideas',
    score: '1500+',
    heading: 'Founders'
  },
  {
    id: 2,
    label: 'Domain Experts',
    score: '50+',
    heading: 'Successfull'
  },
  {
    id: 3,
    label: 'Accelerated',
    score: '80+',
    heading: 'Startups'
  },
  {
    id: 4,
    label: 'from 800+ startups',
    score: '12',
    heading: 'Startups Funded'
  }
]

const BrandStats = () => {
  return (
    <Container maxW="4xl" p={{ base: 5, md: 10 }}>
      <chakra.h2
        fontSize={{
          base: '3xl',
          sm: '4xl'
        }}
        fontWeight="extrabold"
        mb={5}
        mt={0}
        textAlign="center"
        letterSpacing="tight"
        lineHeight="shorter"
        color="gray.900"
        _dark={{
          color: 'gray.100'
        }}
      >
        <chakra.span display="block">Our Ecosystem</chakra.span>
      </chakra.h2>
      <SimpleGrid
        columns={{ base: 2, sm: 2, md: 4 }}
        spacing={{ base: 2, sm: 5 }}
        mt={1}
        mb={4}
      >
        {statData.map(data => (
          <Box key={data.id} p={{ base: 2, sm: 5 }} textAlign="center">
            <Text
              fontWeight="extrabold"
              fontSize="xx-large"
              textColor={'darkviolet'}
            >
              {data.score}
            </Text>
            <Text fontSize="sm" fontWeight={'bold'}>
              {data.heading}
            </Text>
            <Text fontSize="sm" fontWeight={'normal'}>
              {data.label}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default BrandStats
