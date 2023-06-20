import {Container, Badge , Link,List, ListItem, Center,} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {Title, WorkImage,Meta,Pitchdeck,Pitch, FAQ, Profile, Testimonials, Press} from '../../components/work'
import Layout from '../../components/layouts/article'
import { Image,Button } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client'; 
import { CallToActionWithVideo } from '../../components/work'
import { Box,SimpleGrid } from '@chakra-ui/react'
import { Stat } from '../../components/work'
import { Flex } from '@chakra-ui/react'
import { chakra,useColorModeValue } from '@chakra-ui/react'
import BrandStats from '../../components/betterspacehighlights.tsx'
import { Mentors } from '../../components/work'

const Banner = [
  {
    title: 'BetterSpace,',
    subtitle:'A mental health platform',
    des:'Founded to give people the freedom to choose the best way to look after their mental health at work.',
    url:'https://betterspace.uk/',
    src:"../images/works/betterspace.png",
    logo:'https://www.betterspace.uk/wp-content/uploads/2021/06/cropped-betterspace-logo-aligned.png',
    ask:'$55K',
    subs:'n/a',
    growth:'n/a',
    cagr:'8.2%',
    msize:'$1.3Tn',
    industry:'Healthtech',
    funnel:'Zero-to-One',
    tsize:'$5K'
  },
]


const media =[
  {
    id:'1'
  }
]

const stats = [
    {
      label: 'Market Size(2020)',
      value: '$1.3Tn',
    },
    {
      label: 'CAGR(2020-2027)',
      value: '8.2% ',
    },
    {
      label: 'TAM (2020-2027)',
      value: '8.5Tn%',
    },
  ]

  const team = [
    {
      id:'1',
      name:'Shivli Shrivastava',
      src:'https://media.licdn.com/dms/image/C4E03AQGzz5mq-MLJZw/profile-displayphoto-shrink_400_400/0/1629957223331?e=1681344000&v=beta&t=rXArKiX0J3qWiviT3xnr7fgf2D580gqF2-sVGQmILYs',
      des: 'Co-Founder, CEO',
      abt:"Counselling Psychologist",
      bg:'https://media.licdn.com/dms/image/D4D16AQEFTMeERq5zyQ/profile-displaybackgroundimage-shrink_350_1400/0/1672342163465?e=1681344000&v=beta&t=3uc_y6B6leicYHcM6-F4NZylXNhqdPP0Q4Jx-GGzjUk',
      linkedin : 'https://www.linkedin.com/in/shivli-shrivastava/'
    },
    {
      id:'2',
      name:'Abhilash Shrivastava',
      src:'https://media.licdn.com/dms/image/D4D03AQEBHS4ZJhgfOw/profile-displayphoto-shrink_400_400/0/1671731218982?e=1681344000&v=beta&t=wCOd1LAXqkLU5la6-BLMkLLy_dTctAsgBbqnAzLUqGk',
      des: 'Co Founder, CTO',
      abt:"Conceptual Designer & Developer",
      bg:'https://media.licdn.com/dms/image/D4D16AQFMB3g7E5zSqw/profile-displaybackgroundimage-shrink_350_1400/0/1671731261641?e=1681344000&v=beta&t=p29b1ohzdYYYDyk9ewIV_3c0oJy1EikK4RTJgUDU4G0',
      linkedin : 'https://www.linkedin.com/in/abhilash-shrivastava-74416040/'
    },
    
    
  ]

export default withPageAuthRequired(function Work({user}) {
  

return (
    
        <Layout title = "newtral">
            <Container maxWidth='100%' centerContent={true}>
            {Banner.map(({ title,subtitle,des,url ,src,tsize,logo,cagr,msize,growth,ask,industry,funnel,subs}) => (
                    <CallToActionWithVideo title={title} des={des} subtitle={subtitle} url={url} src={src} tsize={tsize} cagr={cagr} growth={growth} logo={logo} msize={msize} industry={industry} funnel={funnel} ask={ask} subs={subs} />
                  ))}
                  <BrandStats />
               
            <Container maxW="100%" py={6} px={6} bg={useColorModeValue('whiteAlpha.800', 'brand')}>
      <Flex justify="center" mb={8}>
        <chakra.h3 fontSize="3xl" fontWeight="bold" mb={3} mt={10} textAlign="center">
          BetterSpace Team 
        </chakra.h3>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2 }} placeItems="center" spacing={1} mt={12} mb={4}>
                {team.map(({name,src,des,bg,abt,linkedin})=>(
                  <Testimonials name={name} src={src} bg={bg} des={des} abt={abt} linkedin={linkedin} />
                ))}
                </SimpleGrid>
                </Container>
            
            
          
            
            


{/* <SimpleGrid
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
      src="../images/works/betterspace.png"
      alt="betterspace banner"
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
      Join Live Pitch
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
      We&apos;re here to help
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
        Date : 25 Jan 2022<br />
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
        Join Pitch
      </chakra.a>
    </Box>
  </Flex>
</SimpleGrid> */}
<Box>
<chakra.h2
        fontSize={{
          base: "3xl",
          sm: "4xl",
        }}
        fontWeight="extrabold"
        mb={5}
        mt={10}
        textAlign="center"
        letterSpacing="tight"
        lineHeight="shorter"
        color="gray.900"
        _dark={{
          color: "gray.100",
        }}
      >
<chakra.span display="block">PitchDeck</chakra.span>
</chakra.h2>



</Box>
<Container maxWidth="70%" justifyContent="center" display={{ base: 'none', md: 'flex'}} mb={20} >

<Pitchdeck src="/images/works/betterspace.pdf"/>         
              

</Container>
<Link href='/images/works/betterspace.pdf' target='blank'>
<Button alignitems='center' mt={2} size='lg'>Download Pitchdeck</Button> </Link>

<Flex
  bg="#edf3f8"
  _dark={{
    bg: "gray.800",
  }}
  p={50}
  w="full"
  mt={50}
  alignItems="center"
  justifyContent="center"
>
  <Box
    bg="gray.50"
    _dark={{
      bg: "gray.800",
    }}
  >
    <Box
      maxW="7xl"
      w={{
        md: "3xl",
        lg: "4xl",
      }}
      mx="auto"
      py={{
        base: 12,
        lg: 16,
      }}
      px={{
        base: 4,
        lg: 8,
      }}
      display={{
        lg: "flex",
      }}
      alignItems={{
        lg: "center",
      }}
      justifyContent={{
        lg: "space-between",
      }}
    >
      <chakra.h2
        fontSize={{
          base: "3xl",
          sm: "4xl",
        }}
        fontWeight="extrabold"
        letterSpacing="tight"
        lineHeight="shorter"
        color="gray.900"
        _dark={{
          color: "gray.100",
        }}
      >
        <chakra.span display="block">Download</chakra.span>
        <chakra.span
          display="block"
          color="brand.600"
          _dark={{
            color: "gray.500",
          }}
        >
          Company Financials.
        </chakra.span>
      </chakra.h2>
      <Stack
        direction={{
          base: "column",
          sm: "row",
        }}
        mt={{
          base: 8,
          lg: 0,
        }}
        flexShrink={{
          lg: 0,
        }}
      >
        <Link
        href="https://docs.google.com/spreadsheets/d/1yARFHPV-FPHDXLWn9n7mYZ5-2LmEGuW0/edit?usp=sharing&ouid=116555411596351951042&rtpof=true&sd=true" target='_blank'
          w={["full", , "auto"]}
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
            color: "brand",
          }}
          bg="brand.600"
          _dark={{
            bg: "brand.500",
          }}
          _hover={{
            bg: "brand.700",
            _dark: {
              bg: "brand.600",
            },
          }}
        >
          MIS Report
        </Link>
        <Link
        href="https://drive.google.com/file/d/1s4luzq2RCmTZkI5DOXyEah9iq8rqDNdB/view?usp=share_link" target='_blank'
          w={["full", , "auto"]}
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
            bg: "brand.500",
          }}
        >
          Financial Projection
        </Link>
      </Stack>
    </Box>
  </Box>
</Flex>

                
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
            <Flex justify="center" mb={8} mt={20}>
        <chakra.h3 fontSize="3xl" fontWeight="bold" mb={0} textAlign="center">
        
          PedalStart Research
        </chakra.h3>
      </Flex>
                
                
                <Box
              as="section"
              py={{
                base: '1',
                md: '8',
              }}
            >
              <Container>
                <SimpleGrid

                  columns={{
                    base: 1,
                    md: 3,
                  }}
                  gap={{
                    base: '5',
                    md: '6',
                  }}
                >
                  {stats.map(({ label, value }) => (
                    <Stat key={label} label={label} value={value} />
                  ))}
                </SimpleGrid>
              </Container>
            </Box>
            {/* <Container maxWidth='80%'mb={50}>
            <chakra.h2
        fontSize={{
          base: "3xl",
          sm: "4xl",
        }}
        fontWeight="extrabold"
        mb={5}
        mt={10}
        textAlign="center"
        letterSpacing="tight"
        lineHeight="shorter"
        color="gray.900"
        _dark={{
          color: "gray.100",
        }}
      >
<chakra.span display="block">FAQs</chakra.span>
</chakra.h2> */}
            {/* <FAQ ques="What problem are you solving?" 
            ans= "According to UNFCCC, global warming is expected to reach 3.2°C to 3.9°C above pre-industrial levels by the end of the century, well above the target of limiting warming to below 2°C. Nations, Industries, and businesses are coming together. However, a few pain points are hindering the progress: LACK OF TOOLS: Industries lack adequate tools to map & measure carbon emissions across the value chain LACK OF DIGITIZATION: Mapping and measuring carbon emissions without tech support is time-consuming, expensive, and less accurate LACK OF SUBJECT MATTER KNOWLEDGE: Adequate human capital and resources to tackle Carbon Emissions & Reporting are lacking within the organization."/>
            <FAQ ques="How do people solve this problem today?" ans= "There are multiple ways in which organizations and industries are currently trying to solve this problem, and the majority of them involve the use of legacy tools or non-scientific techniques which give an inaccurate description of reality. Downstream decision-making gets impacted due to this reason and overall actionability is hampered" />
            <FAQ ques="What is your unique selling proposition?" ans= "We provide an AI-enabled B2B SaaS solution that is easy to use and very affordable. Our solution enables easy integration with company’s existing tools (eg. ERP) to streamline business operations and provide a near-real-time view to business leaders. Given that the problem is global in nature, our solution provides reports and integrations that are compliant with global standards." />
            <FAQ ques="Who are your competitors?" ans= "There are many players who are mushrooming this space in multiple domains, with a majority of them providing industry-agnostic solutions, particularly in the EU markets where the demand of carbon accounting is the highest due to government regulations. Some of our well-funded competitors are:1.Sinai 2.Emitwise 3.Greenly 4.Sweep 5.Watershed 6.Persefoni 7.Normative 8.EKI." />
            <FAQ ques="Which Industry are you targeting? Why?" ans= "While the overall opportunity for this industry across verticals is $10.6 Bn globally, however, to make efficient use of our time and resources we are starting with the textile waste management industry. With a global carbon emissions estimate ranging between 6 and 8 percent of total global carbon emissions, or some 1.7 billion tonnes in carbon emissions per year the textile and garment sector is not only under government radar but also under immense societal pressure to go sustainable or publish their emission figures." />
            <FAQ ques="What is the market size of your solution?" ans= "The carbon accounting software market has a size of $10.6 Bn in 2022 at a global level with a CAGR of ~26%. The projections for the Indian market will be approx $290 Mn for the Carbon accounting and Sustainable Reporting Industry." />
            <FAQ ques="What are your revenue streams?" ans= "Subscription (annual contract)" /> */}


            {/* </Container> */}
            </Layout>
    )
            
            
        })
        

       
          