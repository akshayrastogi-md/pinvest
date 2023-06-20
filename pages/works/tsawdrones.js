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
      label: 'Market Size(2022)',
      value: '$10.9Bn',
    },
    {
      label: 'CAGR(2021-2026)',
      value: '28.66% ',
    },
    {
      label: 'Growth Rate(2022)',
      value: '26.97%',
    },
  ]

  const Banner = [
    {
      title: 'Tsaw Drones',
      subtitle:'Technology in Space and Aero Works',
      des:'TSAW Drones is a leading drone logistics service provider in India. They provide last mile delivery or warehouse to warehouse delivery using their drones.',
      url:'https://tsaw.tech/',
      src:"../images/works/tsaw.png",
      ask:'2.5Cr',
      subs:'closed',
      logo:'https://tsaw.tech/assets/CSS/header/images/tsaw.png',
      growth:'26.97%',
      cagr:'28.6%',
      msize:'$13Bn',
      industry:'Aerospace',
      funnel:'Accelerated',
      tsize:'-'

    },
  ]

  const team = [
    {
      id:'1',
      name:'Kishan Tiwari ',
      src:'https://media.licdn.com/dms/image/D4D03AQEdWZWrtwZN8g/profile-displayphoto-shrink_400_400/0/1672498801592?e=1681948800&v=beta&t=U7vgjFl3kermVPRJ9ph5tQfOrGswgaVrtPH8CLQPNFI',
      des: 'Co-Founder',
      abt:"Mechanical Engineer NIT, Allahabad (2019)",
      bg:'https://media.licdn.com/dms/image/C4D16AQFRc64n09CXZA/profile-displaybackgroundimage-shrink_350_1400/0/1659968127838?e=1681948800&v=beta&t=oMAoPQrACfAKbOkN84Vm_bFLiRmdCtMVCQ6zORpSIpU',
      linkedin : 'https://www.linkedin.com/in/kishan-thedroneco/'
    },
    {
      id:'2',
      name:'Rimanshu Pandey',
      src:'https://media.licdn.com/dms/image/D5603AQFG4y6RC4JAjQ/profile-displayphoto-shrink_400_400/0/1672567406992?e=1681948800&v=beta&t=ZQeOFFGi3UEi0o4pLwAypFkiqIHXlayb9mUTs9GHKvo',
      des: 'Co-founder',
      abt:"Civil Engineer NIT, Allahabad (2015)",
      bg:'https://media.licdn.com/dms/image/C4D16AQFRc64n09CXZA/profile-displaybackgroundimage-shrink_350_1400/0/1659968127838?e=1681948800&v=beta&t=oMAoPQrACfAKbOkN84Vm_bFLiRmdCtMVCQ6zORpSIpU',
      linkedin : 'https://www.linkedin.com/in/rimanshu-pandey-tsaw/'
    },
    
  ]

export default (function Work({user}) {

return (
    
        <Layout title = "tsawdrones">
            <Container maxWidth='100%' centerContent={true}>
            {Banner.map(({ title,subtitle,des,url ,src,tsize,logo,cagr,msize,growth,ask,industry,funnel,subs}) => (
                    <CallToActionWithVideo title={title} des={des} subtitle={subtitle} url={url} src={src} tsize={tsize} cagr={cagr} growth={growth} logo={logo} msize={msize} industry={industry} funnel={funnel} ask={ask} subs={subs} />
                  ))}
                  <BrandStats />
  
                  <Container maxW="100%" py={6} px={6} bg={useColorModeValue('whiteAlpha.800', 'brand')}>
              
      <Flex justify="center" mb={8}>
        <chakra.h3 fontSize="3xl" fontWeight="bold" mb={3} mt={10} textAlign="center">
          TSaw Team 
        </chakra.h3>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2 }} placeItems="center" spacing={5} mt={12} mb={4} textAlign={'center'}>
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
        

       
          