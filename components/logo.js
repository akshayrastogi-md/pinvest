import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue, Divider, Center } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: Center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  //   border-right:2px solid grey;
`
const LinkWrapper = styled.div`
  display: flex;
  justify-conten: space-between;
  align-items: center;
`

const Logo = () => {
  const footPrintImg = `/images/logo.png`
  return (
    <LinkWrapper>
      <LogoBox>
        <Link
          p={2}
          pr={4}
          href="/"
          fontSize={'md'}
          fontWeight={400}
          _hover={{
            textDecoration: 'none'
          }}
        >
          <Image src={'/pedalinvest-logo.png'} width={105} height={30} alt="Logo" />
          {/* <Text
                       color={useColorModeValue('grey.800', 'whiteAlpha.900')}
                       fontFamily='M PLUS R Rounded 1c'
                       fontWeight="bold"
                       ml={3}
                       >
                           PedalStart
                           </Text> */}
          {/* <Pipe>|</Pipe> */}
        </Link>
      </LogoBox>
      <Center height="25px">
        <Divider
          orientation="vertical"
          borderWidth="1px"
          borderColor="blackAlpha.500"
        />
      </Center>
      <Link
        p={2}
        pr={4}
        href="/works/startup"
        fontSize={'md'}
        fontWeight={400}
        _hover={{
          textDecoration: 'none'
        }}
      >
        <Text
          p={2}
          fontSize={'xl'}
          fontWeight={600}
          color={useColorModeValue('gray.800', 'gray.200')}
          letterSpacing={1}
        >
          Invest
        </Text>
      </Link>
    </LinkWrapper>
  )
}

export default Logo
