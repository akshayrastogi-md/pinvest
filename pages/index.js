import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Box,
  Link,
  chakra,
  Container,
  SimpleGrid,
  Divider
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import Section from '../components/section'
import OurEcosystem from '../components/our-ecosystem'
import WhyPedalInvest from '../components/why-pedal-invest'
import OverviewSection from '../components/how-it-works'
import Testonomials from '../components/testonomials'
import ClosedCampaigns from '../components/closed-campaigns'
import FeaturedCampaigns from '../components/featured-campaigns'
import Caraousel from '../components/caraousel'

const Wrapper = styled.div`
  background-color: #6495ed17;
`
const ClosedCampaignWrapper = styled.div`
  background-color: #f0f8ff;
`

const TestonomialsWrapper = styled.div`
  background-color: #f0fff0;
`

const MediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8ff;
`

const Header = styled.div`
  background-image: linear-gradient(60deg, #1b7439, #1aff00);
  background-clip: text;
  color: transparent;
`

const BannerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 450px;
  margin:auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  img {
    width: 100%;
    height: 100%;
    // object-fit:cover;
  }

  @media all and (max-width:1020px){
    width:100%;
    height:200px;
  }
`

export default function index() {
  return (
    <>
      <Stack minH={'50vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text as={'span'} fontWeight={800}>
                <Header>Maximize Returns</Header>
              </Text>
              <Text color={'blue.400'} as={'span'}>
                Minimize Risks
              </Text>
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              Get a chance to invest in high-growth early-stage startups vetted
              and accelerated by PedalStart. Offering attractive risk-adjusted
              returns.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Box
                mt={{
                  base: 5,
                  sm: 8
                }}
                display={{
                  sm: 'flex'
                }}
                justifyContent={{
                  sm: 'center',
                  lg: 'start'
                }}
                fontWeight="bold"
                fontFamily="arial"
              >
                <Box rounded="full" shadow="md">
                  <Link href="https://zfrmz.in/kYkutP4GZKrNGj21mtuW" target='_blank'>
                    <chakra.a
                      w="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      border="solid 1px transparent"
                      fontSize={{
                        base: 'md',
                        md: 'lg'
                      }}
                      rounded="lg"
                      color="white"
                      bg="#0C4CCF"
                      _hover={{
                        bg: 'brand.700'
                      }}
                      px={{
                        base: 8,
                        md: 10
                      }}
                      py={{
                        base: 3,
                        md: 4
                      }}
                      cursor="pointer"
                    >
                      Join the Waitlist
                    </chakra.a>
                  </Link>
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image alt={'Login Image'} objectFit={'cover'} src={'/invest.svg'} />
        </Flex>
      </Stack>
      <OurEcosystem />
      <Wrapper>
        <WhyPedalInvest />
      </Wrapper>
      <div>
        <FeaturedCampaigns />
      </div>
      <ClosedCampaignWrapper>
        <ClosedCampaigns />
      </ClosedCampaignWrapper>
      <div>
        <OverviewSection />
      </div>
      <TestonomialsWrapper>
        <Testonomials />
      </TestonomialsWrapper>
      <MediaWrapper>
        <Container maxWidth={'80%'} mt={40} textAlign="center">
          <chakra.h2
            fontSize={{
              base: '3xl',
              sm: '4xl'
            }}
            fontWeight="extrabold"
            mb={4}
            mt={0}
            textAlign="center"
            letterSpacing="tight"
            lineHeight="shorter"
            color="gray.900"
            _dark={{
              color: 'gray.100'
            }}
          >
            <chakra.span display="block">In the Media</chakra.span>
          </chakra.h2>
          <chakra.Text>
            We have been covered by top media groups around India
          </chakra.Text>
          <Section maxWidth="100%">
            <SimpleGrid
              minChildWidth="100px"
              spacing="10px"
              mt={20}
              alignItems={'center'}
            >
              <Link href="https://yourstory.com/2022/06/pedalstart-gurugram-based-startup-accelerator-turbocharging-entrepreneurs">
                <Image src="your_story.svg" size="sm" boxSize="100px" />
              </Link>
              <Link href="https://timesofindia.indiatimes.com/pedalstart-launches-an-internal-company-fund-of-2-5-cr-for-early-stagestartups/articleshow/91760833.cms">
                <Image src="TOI_logo.webp" size="sm" boxSize="100px" />
              </Link>
              <Link href="https://economictimes.indiatimes.com/magazines/panache/lockdown-diaries-why-pedalstart-co-founder-junked-team-cooking-and-moved-to-team-cycling/articleshow/82708334.cms">
                <Image
                  src="economic-times-1024x768-removebg-preview.png"
                  size="sm"
                  boxSize="100px"
                  width={'150px'}
                />
              </Link>
              <Link href="https://www.entrepreneur.com/en-in/news-and-trends/pedalstart-raises-250000-in-pre-seed-round/441647">
                <Image
                  src="ENT-India-Logo-Black.svg"
                  size="sm"
                  boxSize="100px"
                />
              </Link>
            </SimpleGrid>
          </Section>
        </Container>
        <Divider width={'90%'} mt={20} borderWidth="1px"></Divider>
        <Container maxWidth={'80%'} mt={20} mb={40} textAlign="center">
          <chakra.h2
            fontSize={{
              base: '3xl',
              sm: '4xl'
            }}
            fontWeight="extrabold"
            mb={4}
            mt={0}
            textAlign="center"
            letterSpacing="tight"
            lineHeight="shorter"
            color="gray.900"
            _dark={{
              color: 'gray.100'
            }}
          >
            <chakra.span display="block">We are backed by</chakra.span>
          </chakra.h2>
          <chakra.Text>
            Collaboration with highly reputed Investors in the market
          </chakra.Text>
          <Section maxWidth="100%">
            <SimpleGrid
              minChildWidth="100px"
              spacing="20px"
              mt={20}
              alignItems={'center'}
            >
              <Image src="angel-bay.png" size="sm" />
              <Image src="mumbai-angels.png" size="sm" />
              <Image src="faad.png" size="xl" />
              <Image src="kaptable.png" size="xl" />
              <Image src="ventures.png" size="xl" />
            </SimpleGrid>
          </Section>
        </Container>
      </MediaWrapper>

      <Container maxW={'100%'} pt={10} pb={20}>
        <BannerWrapper>
          <Link href="https://zfrmz.in/kYkutP4GZKrNGj21mtuW" target='_blank'>
            <ImageWrapper>
              <img src={'/banner.png'} alt="banner"></img>
            </ImageWrapper>
          </Link>
        </BannerWrapper>
      </Container>
      <Caraousel />
    </>
  )
}
