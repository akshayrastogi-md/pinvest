import {
  Box,
  Stack,
  VStack,
  HStack,
  Icon,
  Text,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
  Stat,
  StatLabel,
  StatNumber,
  Center
} from '@chakra-ui/react'
import { FcApproval } from 'react-icons/fc'


const statData = [
  {
    label: 'Application Downloads',
    score: '45K'
  },
  {
    label: 'Total Website visits till date',
    score: '71.5K'
  },
  {
    label: 'Avg discount on Amazon price',
    score: '6-10%'
  },
  {
    label: 'No of product requested',
    score: '8000+'
  },
  {
    label: 'Sellers Onboarded',
    score: '700+'
  },
  {
    label: 'GMV of product requested by buyers',
    score: '~15+ cr'
  },
  {
    label: 'Fastest bid to delivery time',
    score: '30 mins'
  },
  {
    label: 'Avg price of product request by buyer',
    score: '46000+'
  }
]

const planList = [
  {
    title: 'AI-Enabled Bidding Platform',
    desc: 'OhLocal leverages AI technology to power its bidding platform. The AI algorithms provide personalized shopping experiences to customers, offering product and price discovery tailored to their preferences.'
  },
  {
    title: 'Competitive Pricing',
    desc: 'OhLocal offers customers competitive prices compared to traditional e-commerce platforms.'
  },
  {
    title: 'Express Delivery',
    desc: 'OhLocal provides express delivery through its hyperlocal networks. '
  },
  {
    title: 'Comprehensive Merchant Solutions',
    desc: 'OhLocal offers a range of solutions for local merchants, going beyond a simple listing directory. '
  },
  {
    title: 'Customer-Centric Approach',
    desc: 'OhLocal places a strong emphasis on delivering a seamless and personalized shopping experience to its customers.'
  }
]

const Feature = ({ heading, text }) => {
  return (
    <GridItem>
      <chakra.h3 fontSize="xl" fontWeight="600">
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
    </GridItem>
  )
}

export default function Highlights() {
  return (
    <Container maxW="7xl" p={4} mb={20}>
      <Divider borderWidth={1.5} width={"100%"}></Divider>
      <chakra.h3
        fontSize="3xl"
        fontWeight="bold"
        mb={5}
        mt={10}
        textAlign="left"
      >
        Highlights
      </chakra.h3>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(2, 1fr)'
        }}
        gap={4}
        mb={10}
      >
        <GridItem colSpan={5}>
          <Stack spacing={2}>
            {planList.map((data, index) => (
              <HStack
                key={index}
                alignItems="flex-start"
                spacing={1}
                fontSize="md"
              >
                <Icon as={FcApproval} w={4} h={4} color="blue.400" />
                <p style={{ 'margin-top': '-3px' }}>
                  <Flex fontSize="md" mb={4}>
                    <Text fontSize="md" fontWeight="600">
                      {data.title} :
                      <span
                        style={{
                          'font-size': '15px',
                          'font-weight': '500',
                          'margin-left': '5px'
                        }}
                      >
                        {data.desc}
                      </span>
                    </Text>
                  </Flex>
                </p>
              </HStack>
            ))}
          </Stack>
        </GridItem>
      </Grid>
      <Container maxW="7xl" p={4} mb={20}>
        <chakra.h3
          fontSize="3xl"
          fontWeight="bold"
          mb={5}
          mt={10}
          textAlign="left"
        >
          Traction
        </chakra.h3>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)'
          }}
          gap={{ base: '8', sm: '12', md: '16' }}
        >
          {statData.map((data, index) => (
            <Stat
              px={{ base: 2, md: 4 }}
              py={'5'}
              shadow={'md'}
              rounded={'lg'}
              width={'200px'}
            >
              <Flex justifyContent={'space-between'}>
                <Box pl={{ base: 2, md: 4 }}>
                  <StatLabel
                    fontSize={'2xl'}
                    fontWeight={'medium'}
                    textAlign={'left'}
                    isTruncated
                  >
                    {data.score}
                  </StatLabel>
                  <StatNumber fontSize={'sm'} fontWeight={'medium'}>
                    {data.label}
                  </StatNumber>
                </Box>
              </Flex>
            </Stat>
          ))}
        </Grid>
      </Container>
    </Container>
  )
}
