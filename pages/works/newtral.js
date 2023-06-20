import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Center
} from '@chakra-ui/react'
import {
  Title,
  WorkImage,
  Meta,
  Pitchdeck,
  Pitch,
  FAQ,
  Profile,
  Testimonials,
  Press,
  ProjectCard,
  Competitors,
  NCompetitors
} from '../../components/work'
import Layout from '../../components/layouts/article'
import { Image, Button } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { Stat } from '../../components/work'
import { Flex } from '@chakra-ui/react'
import { chakra, useColorModeValue } from '@chakra-ui/react'
import BrandStats from '../../components/newtralHighlights.tsx'
import { CallToActionWithVideo } from '../../components/work'

const media = [
  {
    id: '1'
  }
]

const projectsList = [
  {
    id: 1,
    title: `Taking Climate Action: Measuring Carbon Emissions In The Garment Sector in Asia`,
    logo: 'https://www.ilo.org/legacy/english/intserv/working-papers/assets/ILO_WP_80px_ENG.png',
    link: 'https://www.ilo.org/legacy/english/intserv/working-papers/wp053/index.html',
    desc: `This paper examines carbon emissions across the garment sector as counted using the two prominent methodologies for calculating emissions.`,
    technologies: ['', '']
  },
  {
    id: 2,
    title:
      'The Energy Conservation(Amendment) Act,2022 No.19 Of 2022 An Act Further To Amend The Energy Conservation Act,2002,VI K/Kk',
    link: 'https://egazette.nic.in/WriteReadData/2022/241246.pdf',
    logo: 'https://www.ilo.org/legacy/english/intserv/working-papers/assets/ILO_WP_80px_ENG.png',
    desc: `The Bill amends the Energy Conservation Act, 2001 to empower the central government to specify a carbon credit trading scheme.`,
    technologies: ['', '']
  },
  {
    id: 3,
    title: `India’s Evolving Carbon Credit Market`,
    logo: 'https://www.ilo.org/legacy/english/intserv/working-papers/assets/ILO_WP_80px_ENG.png',
    link: 'https://www.investindia.gov.in/team-india-blogs/indias-evolving-carbon-credit-market',
    desc: ` India made revisions to its carbon credit policies to ban the export of carbon credits.`,
    technologies: ['', '']
  }
]

const stats = [
  {
    label: 'Market Size(2022)',
    value: '$10.9Bn'
  },
  {
    label: 'CAGR(2021-2026)',
    value: '28.66% '
  },
  {
    label: 'Growth Rate(2022)',
    value: '26.97%'
  }
]

const Banner = [
  {
    title: 'Newtral',
    subtitle: 'Enterprise Grade Saas Platform',
    des: 'Enterprise-grade SaaS platform helping organisations securely map, measure and reduce their carbon emissions.',
    url: 'https://newtral.io',
    src: '../images/works/newtral.png',
    ask: '$80K',
    subs: '100%',
    logo: 'https://newtral.io/images/newtral-logo.svg',
    growth: '26.97%',
    cagr: '28.66%',
    msize: '$10.9Bn',
    industry: 'Cleantech',
    funnel: 'Zero-to-One',
    tsize: '$5K'
  }
]

const team = [
  {
    id: '1',
    name: 'Avi Chudasama',
    src: 'https://media.licdn.com/dms/image/D5603AQH43VZ5IeQX7A/profile-displayphoto-shrink_400_400/0/1672153321051?e=1680134400&v=beta&t=w3W3mWvnUxuFrWdoRVBRJ9B-J5lY0kUxoj5hXpx6umY',
    des: 'Co-Founder and CEO',
    abt: 'Product | Business',
    bg: 'https://media.licdn.com/dms/image/D4D16AQEC6ruMPvPPMg/profile-displaybackgroundimage-shrink_350_1400/0/1672151082412?e=1681344000&v=beta&t=7aDxoY3pwCEt_mpSVNRKv9TBWyEsewvWMMncQAs_h6E',
    linkedin: 'https://www.linkedin.com/in/chudasamaavi/'
  },
  {
    id: '2',
    name: 'Vinod Kumar Sonagara',
    src: 'https://media.licdn.com/dms/image/D4D03AQHyCA08atOnrg/profile-displayphoto-shrink_400_400/0/1672151455071?e=1681344000&v=beta&t=nM_EjSja32i38rACbR4srmjGY4XfFfqfUsBNWYeo52Y',
    des: 'Co-founder',
    abt: 'Leading Technology',
    bg: 'https://media.licdn.com/dms/image/D4D16AQEC6ruMPvPPMg/profile-displaybackgroundimage-shrink_350_1400/0/1672151082412?e=1681344000&v=beta&t=7aDxoY3pwCEt_mpSVNRKv9TBWyEsewvWMMncQAs_h6E',
    linkedin: 'https://www.linkedin.com/in/vinod-kumar-sonagara-7906a6a7/'
  },
  {
    id: '3',
    name: 'Anuraag Paul',
    src: 'https://media.licdn.com/dms/image/D5603AQE9RHyO06_3ug/profile-displayphoto-shrink_400_400/0/1672153387025?e=1681344000&v=beta&t=4nkO_frPptjZTq-IwLktNSu1Ty_L56aWHl1FkEjDTck',
    des: 'Core Team',
    abt: 'Sales | Service',
    bg: 'https://media.licdn.com/dms/image/D4D16AQEC6ruMPvPPMg/profile-displaybackgroundimage-shrink_350_1400/0/1672151082412?e=1681344000&v=beta&t=7aDxoY3pwCEt_mpSVNRKv9TBWyEsewvWMMncQAs_h6E',
    linkedin: 'https://www.linkedin.com/in/anuraag-paul/'
  }
]

export default (function Work({ user }) {
  return (
    <Layout title="newtral">
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
        <BrandStats />

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
              Newtral Team
            </chakra.h3>
          </Flex>
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            placeItems="center"
            spacing={5}
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
        </Container>

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
            {/* <Image
      src="../images/works/newtral.png"
      alt="newtral banner"
      fit="cover"
      w="full"
      borderRadius={10}
      h={{
        base: 64,
        md: "full",
      }}
      bg="gray.100"
      loading="lazy"
      opacity={1}
    /> */}
            <iframe
              src="https://drive.google.com/file/d/1cZlSsUv0OI4wyGWMC93VS3jo03AA1iOM/preview"
              width="640"
              height="380"
              allow="autoplay"
              borderRadius="20"
            ></iframe>
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
              Newtral PitchCall
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
              Date : 18 Feb 2023
              <br />
              Mode : Online <br />
            </chakra.p>
            <Box display="inline-flex" rounded="md" shadow="md">
              {/* <chakra.a
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
          color: "black",
        }}
        bg="white"
        _dark={{
          bg: "black",
        }}
        _hover={{
          bg: "white.700",
          _dark: {
            bg: "brand.600",
          },
        }}
      >
        Join Pitch
      </chakra.a> */}
            </Box>
          </Flex>
        </SimpleGrid>
        <Box>
          <chakra.h2
            fontSize={{
              base: '3xl',
              sm: '4xl'
            }}
            fontWeight="extrabold"
            mb={5}
            mt={10}
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
          justifyContent="center"
          display={{ base: 'none', md: 'flex' }}
        >
          <Pitchdeck src="/images/works/newtral.io.pdf" />
        </Container>

        <Link href="/images/works/newtral.io.pdf" target="_blank">
          <Button alignItems="center" mt={20} size="lg">
            Download Pitchdeck
          </Button>{' '}
        </Link>

        <Flex
          bg="#edf3f8"
          _dark={{
            bg: 'gray.800'
          }}
          //p={50}
          pt={5}
          pb={5}
          w="full"
          mt={50}
          alignItems="center"
          justifyContent="center"
        >
          <Box
            bg="gray.50"
            _dark={{
              bg: 'gray.800'
            }}
          >
            <Box
              maxW="7xl"
              w={{
                md: '3xl',
                lg: '4xl'
              }}
              mx="auto"
              py={{
                base: 12,
                lg: 16
              }}
              px={{
                base: 4,
                lg: 8
              }}
              display={{
                lg: 'flex'
              }}
              alignItems={{
                lg: 'center'
              }}
              justifyContent={{
                lg: 'space-between'
              }}
            >
              <chakra.h2
                fontSize={{
                  base: '3xl',
                  sm: '4xl'
                }}
                fontWeight="extrabold"
                letterSpacing="tight"
                lineHeight="shorter"
                color="gray.900"
                _dark={{
                  color: 'gray.100'
                }}
              >
                <chakra.span display="block">Download</chakra.span>
                <chakra.span
                  display="block"
                  color="brand.600"
                  _dark={{
                    color: 'gray.500'
                  }}
                >
                  Company Financials.
                </chakra.span>
              </chakra.h2>
              <Stack
                direction={{
                  base: 'column',
                  sm: 'row'
                }}
                mt={{
                  base: 8,
                  lg: 0
                }}
                flexShrink={{
                  lg: 0
                }}
              >
                <Link
                  href="https://docs.google.com/spreadsheets/d/1HqznwwcBSeGNGmgS5Vq5geejwEwWzfU14mB1Pvrg6L4/edit#gid=0"
                  target="_blank"
                  w={['full', , 'auto']}
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="bold"
                  rounded="md"
                  shadow="md"
                  _light={{
                    color: 'brand'
                  }}
                  bg="brand.600"
                  _dark={{
                    bg: 'brand.500'
                  }}
                  _hover={{
                    bg: 'brand.700',
                    _dark: {
                      bg: 'brand.600'
                    }
                  }}
                >
                  MIS Report
                </Link>
                <Link
                  href="https://docs.google.com/spreadsheets/d/13vZgC8efS1H2peF70elYp_bhksjYvDmiZ3ljq5xlrNI/edit#gid=1724652374"
                  target="_blank"
                  w={['full', , 'auto']}
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="bold"
                  rounded="md"
                  shadow="md"
                  color="gray.900"
                  bg="white"
                  _hover={{
                    bg: 'brand.500'
                  }}
                >
                  Financial Projection
                </Link>
              </Stack>
            </Box>
          </Box>
        </Flex>
        <Flex justify="center" mb={8} mt={40}>
          <chakra.h3 fontSize="3xl" fontWeight="bold" mb={0} textAlign="center">
            PedalStart Research
          </chakra.h3>
        </Flex>
        <Box
          as="section"
          py={{
            base: '1',
            md: '8'
          }}
        >
          <Container>
            <SimpleGrid
              columns={{
                base: 1,
                md: 3
              }}
              gap={{
                base: '5',
                md: '6'
              }}
            >
              {stats.map(({ label, value }) => (
                <Stat key={label} label={label} value={value} />
              ))}
            </SimpleGrid>
          </Container>
          <chakra.h3
            fontSize="2xl"
            fontWeight="bold"
            mb={3}
            mt={20}
            textAlign="center"
          >
            Industry Relevent Articles
          </chakra.h3>
          {projectsList.map(({ id, title, desc, link, technologies, logo }) => (
            <ProjectCard
              id={id}
              title={title}
              desc={desc}
              link={link}
              technologies={technologies}
              logo={logo}
            />
          ))}
        </Box>

        <Container
          maxW="100%"
          py={6}
          px={6}
          bg={useColorModeValue('whiteAlpha.800', 'brand')}
        >
          <chakra.h3
            fontSize="2xl"
            fontWeight="bold"
            mb={3}
            mt={10}
            textAlign="center"
          >
            Competitors
          </chakra.h3>
          <WorkImage src="/images/works/newtralcomp.png" />
        </Container>

        {/* <Title>
                    Newtral <Badge>2022</Badge>
                </Title>
                <p>
                Enterprise-grade SaaS platform helping organisations securely map, measure and reduce their carbon emissions.
                </p>
                <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://newtral.io/" >
                        https://newtral.io <ExternalLinkIcon mx="2px" />
                        </Link>
                </ListItem>
                <ListItem>
                    <Meta>Market Size</Meta>
                        <span>$10.9Bn (2022) </span>      
                </ListItem>
                <ListItem>
                    <Meta>CAGR</Meta>
                    <span>28.66% (2021-2026)  </span>
                    
                </ListItem>
                <ListItem>
                    <Meta>Growth Rate</Meta>
                    <span>26.97% (YoY of 2022)  </span>
                    
                </ListItem>
                </List> */}
        {/* <Heading fontSize={20} mb={5} >Live Pitch : </Heading>
                
                <iframe width="600" height="334" src="https://www.youtube.com/embed/MELLnA3azNk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen mb={80}></iframe>
                <Heading fontSize={20} mb={5} my={5} >PitchDeck : </Heading>
                <Pitchdeck src="/images/works/newtral.pdf" alt="newtral"/>
                <Financials />
 */}
        {/* <WorkImage src="/images/works/otaku-1.png" alt="otakukulturelayout" />
                <WorkImage src="/images/works/otaku-2.png" alt="otakukulturelayout" /> */}
      </Container>
      <Container maxWidth="100%" mb={50}>
        <chakra.h2
          fontSize={{
            base: '3xl',
            sm: '4xl'
          }}
          fontWeight="extrabold"
          mb={5}
          mt={10}
          textAlign="center"
          letterSpacing="tight"
          lineHeight="shorter"
          color="gray.900"
          _dark={{
            color: 'gray.100'
          }}
        >
          <chakra.span display="block">FAQs</chakra.span>
        </chakra.h2>
        <FAQ
          ques="What problem are you solving?"
          ans="According to UNFCCC, global warming is expected to reach 3.2°C to 3.9°C above pre-industrial levels by the end of the century, well above the target of limiting warming to below 2°C. Nations, Industries, and businesses are coming together. However, a few pain points are hindering the progress: LACK OF TOOLS: Industries lack adequate tools to map & measure carbon emissions across the value chain LACK OF DIGITIZATION: Mapping and measuring carbon emissions without tech support is time-consuming, expensive, and less accurate LACK OF SUBJECT MATTER KNOWLEDGE: Adequate human capital and resources to tackle Carbon Emissions & Reporting are lacking within the organization."
        />
        <FAQ
          ques="How do people solve this problem today?"
          ans="There are multiple ways in which organizations and industries are currently trying to solve this problem, and the majority of them involve the use of legacy tools or non-scientific techniques which give an inaccurate description of reality. Downstream decision-making gets impacted due to this reason and overall actionability is hampered"
        />
        <FAQ
          ques="What is your unique selling proposition?"
          ans="We provide an AI-enabled B2B SaaS solution that is easy to use and very affordable. Our solution enables easy integration with company’s existing tools (eg. ERP) to streamline business operations and provide a near-real-time view to business leaders. Given that the problem is global in nature, our solution provides reports and integrations that are compliant with global standards."
        />
        <FAQ
          ques="Who are your competitors?"
          ans="There are many players who are mushrooming this space in multiple domains, with a majority of them providing industry-agnostic solutions, particularly in the EU markets where the demand of carbon accounting is the highest due to government regulations. Some of our well-funded competitors are:1.Sinai 2.Emitwise 3.Greenly 4.Sweep 5.Watershed 6.Persefoni 7.Normative 8.EKI."
        />
        <FAQ
          ques="Which Industry are you targeting? Why?"
          ans="While the overall opportunity for this industry across verticals is $10.6 Bn globally, however, to make efficient use of our time and resources we are starting with the textile waste management industry. With a global carbon emissions estimate ranging between 6 and 8 percent of total global carbon emissions, or some 1.7 billion tonnes in carbon emissions per year the textile and garment sector is not only under government radar but also under immense societal pressure to go sustainable or publish their emission figures."
        />
        <FAQ
          ques="What is the market size of your solution?"
          ans="The carbon accounting software market has a size of $10.6 Bn in 2022 at a global level with a CAGR of ~26%. The projections for the Indian market will be approx $290 Mn for the Carbon accounting and Sustainable Reporting Industry."
        />
        <FAQ
          ques="What are your revenue streams?"
          ans="Subscription (annual contract)"
        />
      </Container>
    </Layout>
  )
})
