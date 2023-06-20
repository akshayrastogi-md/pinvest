import {Container, Badge , Link,List, ListItem, Center,} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {Title, WorkImage,Meta,Pitchdeck,Pitch, FAQ, Profile, Testimonials} from '../../components/work'
import Layout from '../../components/layouts/article'
import { Image } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client'; 
import CallToActionWithVideo from '../../components/pepspothero'
import { Box,SimpleGrid } from '@chakra-ui/react'
import { Stat } from '../../components/work'
import { Flex } from '@chakra-ui/react'
import { chakra,useColorModeValue } from '@chakra-ui/react'
import BrandStats from '../../components/newtralHighlights.tsx'
import { Mentors } from '../../components/work'
import Milestones from '../../components/newtraljourney.tsx'

const stats = [
    {
      label: 'Total Servicable Market',
      value: '$1 Bn',
    },
    {
      label: 'Servicable Available Market',
      value: '$500 Mn',
    },
    {
      label: 'Servicable Obtainable Market',
      value: '$250 Mn',
    },
  ]

  const team = [
    {
      id:'1',
      name:'Akshay',
      src:'https://media.licdn.com/dms/image/D5603AQH43VZ5IeQX7A/profile-displayphoto-shrink_400_400/0/1672153321051?e=1680134400&v=beta&t=w3W3mWvnUxuFrWdoRVBRJ9B-J5lY0kUxoj5hXpx6umY',
      des: 'co-founder',
      abt:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      id:'2',
      name:'Akshay',
      src:'https://media.licdn.com/dms/image/D5603AQH43VZ5IeQX7A/profile-displayphoto-shrink_400_400/0/1672153321051?e=1680134400&v=beta&t=w3W3mWvnUxuFrWdoRVBRJ9B-J5lY0kUxoj5hXpx6umY',
      des: 'co-founder',
      abt:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    
  ]

export default withPageAuthRequired(function Work({user}) {

return (
    
        <Layout title = "rapieazy">
            <Container maxWidth='100%' centerContent={true}>
                <CallToActionWithVideo />
                <Flex justify="center" mb={8}>
                
        <chakra.h3 fontSize="3xl" fontWeight="bold" mb={0} textAlign="center">
          Market Info By PedalStart
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
            <Container maxW="100%" py={6} px={6} bg={useColorModeValue('whiteAlpha.800', 'brand')}>
      <Flex justify="center" mb={8}>
        <chakra.h3 fontSize="3xl" fontWeight="bold" mb={3} mt={10} textAlign="center">
          RapidEazy Team 
        </chakra.h3>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2 }} placeItems="center" spacing={1} mt={12} mb={4}>
                {team.map(({name,src,des,id,abt})=>(
                  <Testimonials key={id} name={name} src={src} des={des} abt={abt} />
                ))}
                </SimpleGrid>
                </Container>
            <BrandStats />
            <Milestones />
            
          
            
            


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
      src="../images/works/pepspot.png"
      alt="pepspot banner"
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
</SimpleGrid>
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
<Pitchdeck src="/images/works/pepspot.pdf" alt="pepspot"/>
</Box>

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
            <Container maxWidth='80%'mb={50}>
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
            <FAQ ques="How do I earn a return?" ans= "We are using PedalStart's Crowd SAFE security. Learn how this translates into a return on investment" />
            <FAQ ques="How do I earn a return?" ans= "We are using PedalStart's Crowd SAFE security. Learn how this translates into a return on investment" />
            <FAQ ques="How do I earn a return?" ans= "We are using PedalStart's Crowd SAFE security. Learn how this translates into a return on investment" />
            </Container>
            </Layout>
    )
            
            
        })
        

       
          