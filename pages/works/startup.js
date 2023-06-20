import {
  Container,
  Link,
  StatNumber,
  StatLabel,
  Text,
  Stat,
  SimpleGrid,
  Divider,
  Box
} from '@chakra-ui/react'
import styled from '@emotion/styled'

import { WorkImage, Testimonials } from '../../components/closed-deals'
import { Image, Button } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client'
import { Flex } from '@chakra-ui/react'
import { chakra, useColorModeValue } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import BrandStats from '../../components/ohlocalhighlights.tsx'
import { CallToActionWithVideo } from '../../components/closed-deals'
import StartupFAQ from '../../components/startup-faq'
import { Pitchdeck, Pitch, ProjectCard } from '../../components/work'

const TeamWrapper = styled.div`
  width: 100%;
  background-color: #3ca4ff;
`

const StatusWrapper = styled.div`
  width: 100%;
  background-color: #f0f8ff;

  .chakra-stat {
    background-color: #fff;
  }
`

const media = [
  {
    id: '1'
  }
]

const projectsList = [
  {
    id: 1,
    title: `The Growing Role of Digitization in the Retail Industry`,
    logo: 'https://www.indianretailer.com/article/technology/digital-trends/the-growing-role-of-digitization-in-the-retail-industry.a7308',
    link: 'https://www.indianretailer.com/article/technology/digital-trends/the-growing-role-of-digitization-in-the-retail-industry.a7308',
    desc: `This paper examines carbon emissions across the garment sector as counted using the two prominent methodologies for calculating emissions.`,
    technologies: ['', '']
  },
  {
    id: 2,
    title:
      'The future of commerce is ‘hybrid’ in 2023 and beyond',
    link: 'https://timesofindia.indiatimes.com/blogs/voices/the-future-of-commerce-is-hybrid-in-2023-and-beyond/',
    logo: 'https://timesofindia.indiatimes.com/blogs/voices/the-future-of-commerce-is-hybrid-in-2023-and-beyond/',
    desc: `The Bill amends the Energy Conservation Act, 2001 to empower the central government to specify a carbon credit trading scheme.`,
    technologies: ['', '']
  },
  {
    id: 3,
    title: `Why hybrid retail formats are the future of retail in India`,
    logo: 'https://timesofindia.indiatimes.com/blogs/voices/why-hybrid-retail-formats-are-the-future-of-retail-in-india/?frmapp=yes',
    link: 'https://timesofindia.indiatimes.com/blogs/voices/why-hybrid-retail-formats-are-the-future-of-retail-in-india/?frmapp=yes',
    desc: ` India made revisions to its carbon credit policies to ban the export of carbon credits.`,
    technologies: ['', '']
  },
  {
    id: 4,
    title: `Why Consumers are Opting for Hybrid Shopping?Model`,
    logo: 'https://www.indianretailer.com/article/whats-hot/consumer-trends/every-other-indian-buyer-is-likely-to-prefer-hybrid-shopping.a7482',
    link: 'https://www.indianretailer.com/article/whats-hot/consumer-trends/every-other-indian-buyer-is-likely-to-prefer-hybrid-shopping.a7482',
    desc: ` India made revisions to its carbon credit policies to ban the export of carbon credits.`,
    technologies: ['', '']
  }
]

const stats = [
  {
    label: 'Market Size(2020)',
    value: '$1.5Bn'
  },
  {
    label: 'CAGR(2020-2023)',
    value: '21% '
  },
  {
    label: 'TAM',
    value: '$400Bn'
  }
]

const Banner = [
  {
    title: 'An O2O Marketplace platform to power better shopping experience',
    subtitle: 'O2O marketplace platform',
    des: 'India’s hyperlocal marketplace connecting merchants with consumers in their city via an AI-enabled smart real-time bidding platform with prices competitive against online platforms.',
    url: 'https://www.ohlocal.in/',
    src: '../images/works/ohlocal.png',
    ask: '$60k',
    subs: 'Opening Soon',
    logo: 'https://ohlocal-web-assets.s3.ap-south-1.amazonaws.com/img/layout/OhLocal_Logo_Complete_1_40.png',
    growth: 'n/a',
    cagr: '21%',
    msize: '$1.5Bn',
    industry: 'Hyperlocal',
    funnel: 'Accelerated',
    tsize: '$625'
  }
]

const team = [
  {
    id: '1',
    name: 'Devashish Goyal',
    src: '/images/works/1684736763266.jpeg',
    des: 'CEO & Founder at OhLocal',
    abt: 'Product | Business',
    bg: '/images/works/ohlocal.png',
    linkedin: 'https://www.linkedin.com/in/devashish-goyal/'
  }
]

export default (function Work({ user }) {
  return (
    <Layout title="ohlocal">
      <Container maxWidth="100%" centerContent={true}>
        {Banner.map(
          ({
            title,
            subtitle,
            des,
            url,
            src,
            tsize,
            logo,
            cagr,
            msize,
            growth,
            ask,
            industry,
            funnel,
            subs
          }) => (
            <CallToActionWithVideo
              title={title}
              des={des}
              subtitle={subtitle}
              url={url}
              src={src}
              tsize={tsize}
              cagr={cagr}
              growth={growth}
              logo={logo}
              msize={msize}
              industry={industry}
              funnel={funnel}
              ask={ask}
              subs={subs}
            />
          )
        )}
        <Container
          maxW="100%"
          p={0}
          bg={useColorModeValue('whiteAlpha.800', 'brand')}
        >
          <BrandStats />
        </Container>
        <TeamWrapper>
          <Container
            maxW="100%"
            py={6}
            px={6}
            bg={useColorModeValue('whiteAlpha.800', 'brand')}
          >
            <Flex justify="center" mb={8}>
              <chakra.h3
                fontSize="3xl"
                fontWeight="bold"
                mb={3}
                mt={10}
                textAlign="center"
              >
                OhLocal Team
              </chakra.h3>
            </Flex>
            <Flex justify="center">
              <SimpleGrid
                columns={{ base: 1, md: 1 }}
                placeItems="center"
                spacing={200}
                mt={12}
                mb={4}
              >
                {team.map(({ name, src, des, bg, abt, linkedin }) => (
                  <Testimonials
                    name={name}
                    src={src}
                    bg={bg}
                    des={des}
                    abt={abt}
                    linkedin={linkedin}
                  />
                ))}
              </SimpleGrid>
            </Flex>
          </Container>
        </TeamWrapper>
        <SimpleGrid
          mt={10}
          mb={10}
          columns={{
            base: 1,
            md: 2
          }}
          spacing={0}
        >
          <Flex bg="brand.400">
            <Image
              src="https://ohlocal-web-assets.s3.ap-south-1.amazonaws.com/img/layout/OhLocal_Logo_Complete_1_40.png"
              alt="ohlocal banner"
              fit="contain"
              w="500px"
              borderRadius={10}
              h={{
                base: 64,
                md: 'full'
              }}
              // bg="gray.100"
              loading="lazy"
              opacity={1}
            />
          </Flex>
          <Flex
            direction="column"
            alignItems="start"
            justifyContent="center"
            px={{
              base: 4,
              md: 8,
              lg: 20
            }}
            py={24}
            zIndex={3}
          >
            <chakra.span
              color="brand.600"
              _dark={{
                color: 'gray.300'
              }}
              fontSize="lg"
              textTransform="uppercase"
              fontWeight="extrabold"
            >
              OhLocal PitchCall
            </chakra.span>
            <chakra.h1
              mb={4}
              fontSize={{
                base: '4xl',
                md: '4xl',
                lg: '5xl'
              }}
              fontWeight="bold"
              color="brand.600"
              _dark={{
                color: 'gray.300'
              }}
              lineHeight="shorter"
              textShadow="2px 0 currentcolor"
            >
              Backed By PedalStart
            </chakra.h1>
            <chakra.p
              pr={{
                base: 0,
                lg: 16
              }}
              mb={4}
              fontSize="lg"
              color="brand.600"
              _dark={{
                color: 'gray.400'
              }}
              letterSpacing="wider"
            >
              
              <br />
              Mode : Online <br />
            </chakra.p>
            <Box display="inline-flex" rounded="md" shadow="md">
              <Link href="https://forms.zohopublic.in/pedalstart1/form/PedalInvestWaitlist/formperma/Y_AblTQxW5BRxcUE3ZieJ599kVzxSpfCCHXyz6TMPxI" target='_blank'>
              
              <chakra.a
              
                mt={2}
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={5}
                py={3}
                border="solid transparent"
                fontWeight="bold"
                w="full"
                rounded="md"
                _light={{
                  color: 'black'
                }}
                bg="white"
                _dark={{
                  bg: 'black'
                }}
                _hover={{
                  bg: 'white.700',
                  _dark: {
                    bg: 'brand.600'
                  }
                }}
              >
                Interested
              </chakra.a>
              </Link>
            </Box>
          </Flex>
        </SimpleGrid>
        <Divider width={'90%'}></Divider>
      </Container>

      <Box justifyContent={'center'} alignItems={'center'}>
        <chakra.h2
          fontSize={{
            base: '3xl',
            sm: '4xl'
          }}
          fontWeight="extrabold"
          mb={5}
          mt={20}
          textAlign="center"
          letterSpacing="tight"
          lineHeight="shorter"
          color="gray.900"
          _dark={{
            color: 'gray.100'
          }}
        >
          <chakra.span display="block">PitchDeck</chakra.span>
        </chakra.h2>
      </Box>
      <Container
        maxWidth="70%"
        flexDirection={'column'}
        justifyContent="center"
        alignItems={'center'}
        display={{ base: 'none', md: 'flex' }}
      >
        <Pitchdeck src="https://pitchdeck-pdf.s3.ap-south-1.amazonaws.com/OhLocalDeck.pdf" />
        <Link href="https://pitchdeck-pdf.s3.ap-south-1.amazonaws.com/OhLocalDeck.pdf" target="_blank">
          <Button alignItems="center" mt={20} size="lg">
            Download Pitchdeck
          </Button>
        </Link>
      </Container>

      <Box
        as="section"
        py={{
          base: '1',
          md: '8'
        }}
      >
        <StatusWrapper>
          <chakra.h3
            fontSize="3xl"
            fontWeight="bold"
            pt={10}
            textAlign="center"
          >
            PedalStart Research
          </chakra.h3>
          <Container maxWidth={'60%'} pt={10} pb={20}>
            <SimpleGrid
              columns={{
                base: 1,
                md: 3
              }}
              gap={{
                base: '10',
                md: '10'
              }}
            >
              {stats.map(({ label, value }) => {
                return (
                  <Stat
                    px={{ base: 2, md: 4 }}
                    py={'5'}
                    shadow={'md'}
                    // border={'1px solid'}
                    borderColor={useColorModeValue('gray.800', 'gray.500')}
                    rounded={'lg'}
                    width={'200px'}
                  >
                    <Flex justifyContent={'space-between'}>
                      <Box pl={{ base: 2, md: 4 }}>
                        <StatLabel
                          fontSize={'1xl'}
                          fontWeight={'medium'}
                          textAlign={'left'}
                          isTruncated
                        >
                          {label}
                        </StatLabel>
                        <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                          {value}
                        </StatNumber>
                      </Box>
                    </Flex>
                  </Stat>
                )
              })}
            </SimpleGrid>
          </Container>
        </StatusWrapper>
        <Container maxWidth={'95%'}>
          <chakra.h3
            fontSize="2xl"
            fontWeight="bold"
            mb={10}
            mt={20}
            textAlign="center"
          >
            Industry Relevent Articles
          </chakra.h3>
          {projectsList.map(({ id, title, desc, link, technologies, logo }) => (
            <Stack p="4" boxShadow="md" m="10" borderRadius="sm">
              <Link href={link} target='_blank'>
                <Stack direction="row" alignItems="center">
                  <Text fontWeight="semibold">{title}</Text>
                </Stack>
              </Link>

              <Stack
                direction={{ base: 'column', md: 'row' }}
                justifyContent="space-between"
              >
                <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
                  {desc}
                </Text>
              </Stack>
            </Stack>
          ))}
        </Container>
      </Box>
      <Container
        maxW="100%"
        py={6}
        px={6}
        mt={10}
        mb={20}
        bg={useColorModeValue('whiteAlpha.800', 'brand')}
      >
        <Divider mb={10}></Divider>
        <chakra.h3
          fontSize="2xl"
          fontWeight="bold"
          mb={3}
          mt={10}
          textAlign="center"
        >
          Competitors
        </chakra.h3>
        <WorkImage src="/ohlocal-competitors.png" />
      </Container>
      <Flex justifyContent={'center'}>
        <Divider width={'95%'} mb={10}></Divider>
      </Flex>
      <StartupFAQ />
    </Layout>
  )
})
