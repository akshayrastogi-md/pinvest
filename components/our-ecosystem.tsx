import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  Text,
  StatNumber,
  Divider,
  useColorModeValue
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import styled from '@emotion/styled'

interface StatsCardProps {
  title: string
  desc: string
  stat: string
  icon: ReactNode
}

const Wrapper = styled.div`
  dl {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
`

function StatsCard(props: StatsCardProps) {
  const { title, desc, stat, icon } = props
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'md'}
      // border={'1px solid'}
      // borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}
      width="100%"
    >
      <Flex width="100%" justifyContent={'space-between'} alignItems={'center'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
          <StatLabel fontSize={'1xl'} fontWeight={'medium'} isTruncated>
            {title}
          </StatLabel>
          <Text fontWeight={'medium'} isTruncated>
            {desc}
          </Text>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  )
}

export default function OurEcosystem() {
  return (
    <Box
      maxW="7xl"
      mx={'auto'}
      pt={5}
      px={{ base: 2, sm: 12, md: 17 }}
      mt={20}
      mb={20}
    >
      <Divider></Divider>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}
        >
         Startup Founder Community Platform
        </chakra.h1>
      <Wrapper>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 10 }}>
          <StatsCard
            title={'Startup'}
            desc={'founders community '}
            stat={'1500+'}
            icon={
              <img src="founder-community.png" width={'70%'} height={'50%'} />
            }
          />
          <StatsCard
            title={'Mentor Pool '}
            desc={''}
            stat={'50+'}
            icon={<img src="mentor.png" width={'60%'} />}
          />
          <StatsCard
            title={'Startups'}
            desc={'Accelerated'}
            stat={'80+'}
            icon={<img src="startups.png" width={'60%'} />}
          />
          <StatsCard
            title={'Startups '}
            desc={'raised funds'}
            stat={'12'}
            icon={<img src="funds.png" width={'60%'} />}
          />
        </SimpleGrid>
      </Wrapper>
    </Box>
  )
}
