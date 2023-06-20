import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager
} from 'react-icons/fc'
import styled from '@emotion/styled'

import ReturnOnInvestment from '../public/return-on-investment.png'
import Planning from '../public/planning.png'
import SaveMoney from '../public/save-money.png'
import Agreement from '../public/agreement.png'

interface CardProps {
  heading: string
  description: string
  icon: ReactElement
  href: string
}

const Wrapper = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
`

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Wrapper>
      <Box
        maxW={{ base: 'full', md: '275px' }}
        w={'full'}
        //   borderWidth="1px"
        borderRadius="md"
        overflow="hidden"
        p={5}
      >
        <Stack align={'start'} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}
            bg={useColorModeValue('gray.100', 'gray.700')}
          >
            {icon}
          </Flex>
          <Box mt={2}>
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={'sm'}>
              {description}
            </Text>
          </Box>
        </Stack>
      </Box>
    </Wrapper>
  )
}

export default function WhyPedalInvest() {
  return (
    <Box p={4} pt={20} pb={20} mt={20} mb={20}>
      <Stack spacing={10} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          PedalInvest
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          Grow your wealth 10x by investing confidently in promising startups
          through PedalInvest. These featured startups have been accelerated by
          PedalStart, ensuring their high potential for success. As a retail
          investor, you can now access these high-potential ventures, opening up
          a path to significant growth and the possibility of lucrative returns.
        </Text>
      </Stack>

      <Container maxW={'8xl'} mt={20}>
        <Flex flexWrap="wrap" gridGap={10} justify="center">
          <Card
            href=''
            heading={'High Returns'}
            icon={<img
              src={SaveMoney.src}
              alt="ReturnOnInvestment Icon"
              width="100%"
              height="100%"
            />}
            description={
              'Early Stage investment offers the highest returns in a long time.'
            }
          />
          <Card
            href=''
            heading={'Risk Mitigation'}
            icon={<img
              src={Planning.src}
              alt="ReturnOnInvestment Icon"
              width="100%"
              height="100%"
            />}
            description={
              'Opportunity to invest in startup pools, mitigating the risk of failures.'
            }
          />
          <Card
            href=''
            heading={'Highly Vetted'}
            icon={<img
              src={Agreement.src}
              alt="ReturnOnInvestment Icon"
              width="100%"
              height="100%"
            />}
            description={
              'All the listed startups are highly vetted and accelerated by PedalStart.'
            }
          />
          {/* <Card
            href=''
            heading={'Monthly Returns'}
            icon={
              <img
                src={ReturnOnInvestment.src}
                alt="ReturnOnInvestment Icon"
                width="100%"
                height="100%"
              />
            }
            description={'Opportunity to get monthly returns.'}
          /> */}
        </Flex>
      </Container>
    </Box>
  )
}
