import {Container, Badge , Link,List, ListItem, Center,} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {Title, WorkImage,Meta,Pitchdeck,Pitch, FAQ,Profile, Testimonials, Press} from '../../components/work'
import Layout from '../../components/layouts/article'
import { Image ,Button} from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client'; 
import { CallToActionWithVideo } from '../../components/work'
import { Box,SimpleGrid } from '@chakra-ui/react'
import { Stat } from '../../components/work'
import { Flex } from '@chakra-ui/react'
import { chakra,useColorModeValue } from '@chakra-ui/react'
import BrandStats from '../../components/toyflixhighlights.tsx'
import { Mentors } from '../../components/work'
//import Milestones from '../../components/newtraljourney'


const Banner = [
  {
    title: 'ToyFlix,',
    subtitle:'Play, learn, pass it on !!',
    des:'Eventually creating a market place for complete kids essentials.',
    url:'https://www.toyflix.in/',
    src:"../images/works/toyflix.png",
    logo:'https://www.toyflix.in/images/ToyflixWebsiteLogo1.webp',
    ask:'$100K',
    subs:'n/a',
    growth:'n/a',
    cagr:'8.5%',
    msize:'$2.5Bn',
    industry:'Toy Rental',
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
      value: '$2.5Bn',
    },
    {
      label: 'CAGR(2020-2025)',
      value: '8.5% ',
    },
    {
      label: 'TAM',
      value: '$4.8Bn',
    },
  ]

  const team = [
    {
      id:'1',
      name:'Bhanu Tadepalli',
      src:'https://media.licdn.com/dms/image/C5603AQFdVeH7_wqwAA/profile-displayphoto-shrink_400_400/0/1517506332488?e=1681344000&v=beta&t=oZQlLHGz8dTw7pZmEeWYo23VXfM84xsiJs-KUZqdLz8',
      des: 'Co-Founder',
      abt:"Tech Guru",
      bg:'https://media.licdn.com/dms/image/D5616AQFtGNhaZ9rwJA/profile-displaybackgroundimage-shrink_350_1400/0/1673982594061?e=1681344000&v=beta&t=xLdPLpxeHFby4i3LVNdd6qaEr5nvn1QYo5s6bLaWgqM',
      linkedin : 'https://www.linkedin.com/in/bhanutadepalli/'
    },
    {
      id:'2',
      name:'Vikram Madhusudhan',
      src:'https://media.licdn.com/dms/image/D5603AQFaMyoMlZUjTA/profile-displayphoto-shrink_400_400/0/1675187172215?e=1681344000&v=beta&t=LqZfb-U63tfV4-vpkcIBjFkDSkwM1K7rbynS9FCZKPU',
      des: 'Co-founder',
      abt:"Business | Leadership",
      bg:'https://media.licdn.com/dms/image/D5616AQFtGNhaZ9rwJA/profile-displaybackgroundimage-shrink_350_1400/0/1673982594061?e=1681344000&v=beta&t=xLdPLpxeHFby4i3LVNdd6qaEr5nvn1QYo5s6bLaWgqM',
      linkedin : 'https://www.linkedin.com/in/vinod-kumar-sonagara-7906a6a7/'
    },
    {
      id:'3',
      name:'Karthikeyan M',
      src:'https://media.licdn.com/dms/image/D5603AQE9RHyO06_3ug/profile-displayphoto-shrink_400_400/0/1672153387025?e=1681344000&v=beta&t=4nkO_frPptjZTq-IwLktNSu1Ty_L56aWHl1FkEjDTck',
      des: 'Co-founder',
      abt:"User Experience",
      bg:'https://media.licdn.com/dms/image/D5616AQFtGNhaZ9rwJA/profile-displaybackgroundimage-shrink_350_1400/0/1673982594061?e=1681344000&v=beta&t=xLdPLpxeHFby4i3LVNdd6qaEr5nvn1QYo5s6bLaWgqM',
      linkedin :'https://www.linkedin.com/in/anuraag-paul/'
    },
    
  ]

export default (function Work({user}) {

return (
    
        <Layout title = "toyflix">
            <Container maxWidth='100%' centerContent={true}>
            {Banner.map(({ title,subtitle,des,url ,src,tsize,logo,cagr,msize,growth,ask,industry,funnel,subs}) => (
                    <CallToActionWithVideo title={title} des={des} subtitle={subtitle} url={url} src={src} tsize={tsize} cagr={cagr} growth={growth} logo={logo} msize={msize} industry={industry} funnel={funnel} ask={ask} subs={subs} />
                  ))}
                  <BrandStats />
                
            <Container maxW="100%" py={6} px={6} bg={useColorModeValue('whiteAlpha.800', 'brand')}>
      <Flex justify="center" mb={8}>
        <chakra.h3 fontSize="3xl" fontWeight="bold" mb={3} mt={10} textAlign="center">
          ToyFlix Team 
        </chakra.h3>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 3 }} placeItems="center" spacing={5} mt={12} mb={4}>
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
      src="../images/works/toyflix.png"
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
<Box w={'60%'} alignContent={'center'}>
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
{/* <WorkImage src="/images/works/toyflix/toyflix-01.png"></WorkImage>
<WorkImage src="/images/works/toyflix/toyflix-02.png"></WorkImage>
<WorkImage src="/images/works/toyflix/toyflix-03.png"></WorkImage>
<WorkImage src="/images/works/toyflix/toyflix-04.png"></WorkImage>
<WorkImage src="/images/works/toyflix/toyflix-05.png"></WorkImage>
<WorkImage src="/images/works/toyflix/toyflix-06.png"></WorkImage>
<WorkImage src="/images/works/toyflix/toyflix-07.png"></WorkImage>
<WorkImage src="/images/works/toyflix/toyflix-08.png"></WorkImage>
<WorkImage src="/images/works/toyflix/toyflix-09.png"></WorkImage>
<WorkImage src="/images/works/toyflix/toyflix-10.png"></WorkImage>
<WorkImage src="/images/works/toyflix/toyflix-11.png"></WorkImage>
<WorkImage src="/images/works/toyflix/toyflix-12.png"></WorkImage>
<WorkImage src="/images/works/toyflix/toyflix-13.png"></WorkImage>
<WorkImage src="/images/works/toyflix/toyflix-14.png"></WorkImage>
<WorkImage src="/images/works/toyflix/toyflix-15.png"></WorkImage> */}


</Box>
<Container maxWidth="70%" justifyContent="center" display={{ base: 'none', md: 'flex'}} >

<Pitchdeck src="/images/works/toyflix.pdf"/>         
              

</Container>
<Link href='/images/works/toyflix.pdf' target='_blank'>
<Button alignitems='center' mt={20} size='lg'>Download Pitchdeck</Button> </Link>



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
        href="https://docs.google.com/spreadsheets/d/1OpDNyWR466Z0UMTPzUcIINIBfFHazsoI/edit?usp=sharing&ouid=116555411596351951042&rtpof=true&sd=true" target='_blank'
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
        href="https://docs.google.com/spreadsheets/d/1HnBCOnw1suXp0Ewkl2ovN4_A5mq8qJXi/edit?usp=sharing&ouid=116555411596351951042&rtpof=true&sd=true" target='_blank'
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

            <Container maxWidth='80%'mb={50} mt={20}>
            <Flex justify="center" mb={8}>
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
</chakra.h2>
            <FAQ ques="What is Toyflix??" 
            ans= "Toyflix  is an online Toy rental platform, where parents find labelled and innovative toys for their bundle of joy at very nominal fees. Each set will have 3 toys ideally curated for the kid's developmental skills. At the end of each month, we shall collect the old set of toys & replace the same with a new set."/>
            <FAQ ques="What kind of toys do you have In your library?" ans= "We keep the world’ best international brands such as Fisher-Price, Melissa & Doug, Little Tikes, VTech, Hasbro, LeapFrog, ELC, OK Play, Disney, HotWheels, Funschool, Chicco, BabyHug, Mattel and many more to ensure the best quality of products for your little one" />
            <FAQ ques="What is the value of toys per subscription?" ans= "Total value of the toys for one year will be around  INR 1 lakh to 1.5 lakh. For each month the value of toys will be around INR 8000 to 13000/." />
            <FAQ ques="How many toys do we get in the subscription?" ans= "Overall 36 toys will be delivered for a year subscription at 3 toys per month.." />
            <FAQ ques="What happens if a toy breaks?" ans= "Our toys are of high quality, durable & safe. So, it is highly unlikely for them to break. In the improbable event that it does - don't try and fix the toy - keep the toy & parts together and let us know. Do not allow children to play with damaged toys. We do not charge anything for broken toys. However, charges are levied if the toy is lost." />
            <FAQ ques="What is your cancellation policy?" ans= "A subscription can be cancelled any time during the subscription period. Money will be refunded on a pro-rate basis." />
            <FAQ ques="What happens  if we break the toys often?" ans= "We will not provide premium toys if the toys are broken more than 2 times a year. We will not charge you for the damaged toys." />


            </Container>
            </Layout>
    )
            
            
        })
        

       
          