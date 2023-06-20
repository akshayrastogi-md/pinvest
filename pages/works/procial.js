import {Container, Badge , Link,List, ListItem, Center,} from '@chakra-ui/react'
import {Title, WorkImage,Meta,Pitchdeck,Pitch, FAQ, Profile, Testimonials, Press,ProjectCard,Competitors,NCompetitors} from '../../components/closed-deals'
import Layout from '../../components/layouts/article'
import { Image ,Button} from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client'; 
import { Box,SimpleGrid } from '@chakra-ui/react'
import { Stat } from '../../components/work'
import { Flex } from '@chakra-ui/react'
import { chakra,useColorModeValue } from '@chakra-ui/react'
import BrandStats from '../../components/tsawhighlights'
import { CallToActionWithVideo } from '../../components/closed-deals'


const media =[
  {
    id:'1'
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
      title: 'The Energy Conservation(Amendment) Act,2022 No.19 Of 2022 An Act Further To Amend The Energy Conservation Act,2002,VI K/Kk',
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
    },
  ];


const stats = [
    {
      label: 'Market Size(2021)',
      value: '$28.5Bn',
    },
    {
      label: 'CAGR(2021-2025)',
      value: '26.2% ',
    },
    {
      label: 'TAM(by 2025)',
      value: '$1.7Tn%',
    },
  ]

  const Banner = [
    {
      title: 'Procial',
      subtitle:'Be social without bounderies',
      des:'Procial has been built with the power of blockchain as a decentralized social network for content creators and brands to engage freely with users and benefit out of the crypto economy.',
      url:'https://www.procial.network/',
      src:"../images/works/procial.png",
      ask:'$1.2Mn',
      subs:'closed',
      logo:'data:image/png;base64,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',
      growth:'n/a',
      cagr:'26.2%',
      msize:'$28.5Bn',
      industry:'WEB 3',
      funnel:'Accelerated',
      tsize:'-'

    },
  ]

  const team = [
    {
      id:'1',
      name:'Anant Moona ',
      src:'https://media.licdn.com/dms/image/C5603AQGfumgXOfDhPA/profile-displayphoto-shrink_400_400/0/1658574868403?e=1681948800&v=beta&t=9IrdWtU54CXTniyCjWy35AZXvkjMYJs0KY4_yXGxw3A',
      des: 'Co-Founder & CEO',
      abt:"Man Behind the idea",
      bg:'http://cohort.pedalstart.com/wp-content/uploads/2023/02/Screenshot-2023-02-18-at-4.00.11-PM.png',
      linkedin : 'https://www.linkedin.com/in/anant-moona-9b7533173/'
    },
    {
      id:'2',
      name:'Abhay Dev Sharma',
      src:'https://media.licdn.com/dms/image/C4D03AQF3mHgEe3E5pA/profile-displayphoto-shrink_400_400/0/1655277804990?e=1681948800&v=beta&t=8b8UJ8MQXjIDr_m-blQwivd3Ysa5UL0slt-BFJJVGmU',
      des: 'Co-Founder & COO',
      abt:"Man Behind the operations",
      bg:'http://cohort.pedalstart.com/wp-content/uploads/2023/02/Screenshot-2023-02-18-at-4.00.11-PM.png',
      linkedin : 'https://www.linkedin.com/in/abhay2000/'
    },
    {
      id:'3',
      name:'Manidhar Kodurupaka',
      src:'https://media.licdn.com/dms/image/C5603AQEoyvh5AXZfSw/profile-displayphoto-shrink_400_400/0/1590506304592?e=1681948800&v=beta&t=6Fe9dYHM1w8gd6bG7tkgWGURrMcmzeyVUtS4bxNIhcE',
      des: 'Co-Founder & CTO',
      abt:"Man Behind the development",
      bg:'http://cohort.pedalstart.com/wp-content/uploads/2023/02/Screenshot-2023-02-18-at-4.00.11-PM.png',
      linkedin : 'https://www.linkedin.com/in/manidhar-kodurupaka-479302154/'
    },
    
  ]

export default (function Work({user}) {

return (
    
        <Layout title = "procial">
            <Container maxWidth='100%' centerContent={true}>
            {Banner.map(({ title,subtitle,des,url ,src,tsize,logo,cagr,msize,growth,ask,industry,funnel,subs}) => (
                    <CallToActionWithVideo title={title} des={des} subtitle={subtitle} url={url} src={src} tsize={tsize} cagr={cagr} growth={growth} logo={logo} msize={msize} industry={industry} funnel={funnel} ask={ask} subs={subs} />
                  ))}
                  <BrandStats />
  
                  <Container maxW="100%" py={6} px={6} bg={useColorModeValue('whiteAlpha.800', 'brand')}>
              
      <Flex justify="center" mb={8}>
        <chakra.h3 fontSize="3xl" fontWeight="bold" mb={3} mt={10} textAlign="center">
          Procial Team 
        </chakra.h3>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 3 }} placeItems="center" spacing={5} mt={12} mb={4} textAlign={'center'}>
                {team.map(({name,src,des,bg,abt,linkedin})=>(
                  <Testimonials name={name} src={src} bg={bg} des={des} abt={abt} linkedin={linkedin} />
                ))}
                </SimpleGrid>
                </Container>

<SimpleGrid
mt={10}
mb={10}
  columns={{
    base: 1,
    md: 2,
  }}
  spacing={0}
>
  <Flex bg="brand.400">
    <Image
      src="../images/works/tsaw.png"
      alt="tsaw banner"
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
    />
  </Flex>
  <Flex
    direction="column"
    alignItems="start"
    justifyContent="center"
    px={{
      base: 4,
      md: 8,
      lg: 20,
    }}
    py={24}
    zIndex={3}
  >
    <chakra.span
      color="brand.600"
      _dark={{
        color: "gray.300",
      }}
      fontSize="lg"
      textTransform="uppercase"
      fontWeight="extrabold"
    >
      TSAW Drones
    </chakra.span>
    <chakra.h1
      mb={4}
      fontSize={{
        base: "4xl",
        md: "4xl",
        lg: "5xl",
      }}
      fontWeight="bold"
      color="brand.600"
      _dark={{
        color: "gray.300",
      }}
      lineHeight="shorter"
      textShadow="2px 0 currentcolor"
    >
     TSAW Drones is a leading drone logistics service provider in india.
    </chakra.h1>
    <chakra.p
      pr={{
        base: 0,
        lg: 16,
      }}
      mb={4}
      fontSize="lg"
      color="brand.600"
      _dark={{
        color: "gray.400",
      }}
      letterSpacing="wider"
    >
        Pitch<br />
        Mode : Online <br />
    </chakra.p>
    <Box display="inline-flex" rounded="md" shadow="md">
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
        Closed
      </chakra.a>
    </Box>
  </Flex>
</SimpleGrid>

      



            </Container>
            </Layout>
    )
            
            
        })
        

       
          