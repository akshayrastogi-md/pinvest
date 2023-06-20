import NextLink from 'next/link'
import {
  Heading,
  Box,
  Image,
  Link,
  Badge,
  ButtonGroup,
  Icon,
  SimpleGrid
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { ViewIcon } from '@chakra-ui/icons'
import {
  Button,
  Avatar,
  VStack,
  HStack,
  Tag,
  StackDivider,
  Container,
  Progress,
  createIcon,
  loading,
  IconButton,
  Center,
  Stack,
  Flex,
  chakra,
  Text,
  useBreakpointValue,
  useColorModeValue,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter
} from '@chakra-ui/react'
import {
  AccordionPanel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon
} from '@chakra-ui/react'
import React, { useEffect, useState, Fragment } from 'react'
import { useUser } from '@auth0/nextjs-auth0/client'

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/works" passHref>
      <Link> Closed Campaigns</Link>
    </NextLink>

    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </span>

    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const ProjectCard = props => {
  const { id, title, link, logo, desc, technologies } = props
  const textColor = useColorModeValue('gray.500', 'gray.200')
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <>
      <Container maxW="4xl" p={{ base: 5, md: 5 }}>
        <VStack spacing={2}>
          <chakra.div onClick={toggleOpen} key={id}>
            <HStack
              p={4}
              bg={useColorModeValue('white', 'gray.800')}
              rounded="xl"
              borderWidth="1px"
              borderColor={useColorModeValue('gray.100', 'gray.700')}
              w="100%"
              h="100%"
              textAlign="left"
              align="start"
              spacing={4}
              cursor="pointer"
              _hover={{ shadow: 'lg' }}
            >
              {/*  <Image
                  src={logo}
                  size="sm"
                  width={33}
                  height={33}
                  layout="fixed"
                  rounded="md"
                  objectFit="cover"
                  alt="cover image"
                  fallbackSrc="https://via.placeholder.com/150"
                /> */}
              <VStack align="start" justify="flex-start">
                <VStack spacing={0} align="start">
                  <HStack>
                    <Text
                      as={Link}
                      href={link}
                      fontWeight="bold"
                      fontSize="md"
                      noOfLines={1}
                      onClick={e => e.stopPropagation()}
                      isExternal
                    >
                      {title}
                    </Text>
                    {/* <HStack spacing="1">
                        {technologies.map((tech, index) => (
                          <Tag key={index} size="sm" colorScheme="gray">
                            {tech}
                          </Tag>
                        ))}
                      </HStack> */}
                  </HStack>

                  {!isOpen && (
                    <Text
                      fontSize="sm"
                      color={textColor}
                      noOfLines={{ base: 2 }}
                    >
                      {desc}
                    </Text>
                  )}

                  {isOpen && (
                    <Text fontSize="sm" color={textColor}>
                      {desc}
                    </Text>
                  )}
                </VStack>
              </VStack>
            </HStack>
          </chakra.div>
        </VStack>
      </Container>
    </>
  )
}

export const handleClick = async (e, f, g) => {
  //e.preventDefault();

  console.log(e)

  try {
    const response = await fetch('/api/post', {
      method: 'POST',

      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: f,
        email: e,
        intrested: g
      })
    })
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`)
      console.log('sent successfully')
    }
    const result = await response.json()
    console.log(result)
  } catch (error) {
    console.log(error.message)
  }
}

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Pitchdeck = ({ src, alt }) => (
  <embed src={src} alt={alt} width="80%" height="550" />
)
export const FAQ = ({ ques, ans }) => (
  <Accordion defaultIndex={[1]} allowToggle>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="section" flex="1" textAlign="left">
            {ques}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>{ans}</AccordionPanel>
    </AccordionItem>
  </Accordion>
)

export const Financials = () => (
  <Box as="section" bg="bg-surface">
    <Container
      py={{
        base: '16',
        md: '24'
      }}
    >
      <Stack
        spacing={{
          base: '8',
          md: '10'
        }}
      >
        <Stack
          spacing={{
            base: '4',
            md: '5'
          }}
          align="center"
        >
          <Heading
            size={useBreakpointValue({
              base: 'sm',
              md: 'md'
            })}
          >
            Financials
          </Heading>
          <Text color="muted" maxW="2xl" textAlign="center" fontSize="xl">
            Download Financials of this startup
          </Text>
        </Stack>
        <Stack
          spacing="3"
          direction={{
            base: 'column',
            sm: 'row'
          }}
          justify="center"
        >
          <Button variant="secondary" size="lg">
            Download MIS Report
          </Button>
          <Button variant="primary" size="lg">
            Download Financial Projection
          </Button>
        </Stack>
      </Stack>
    </Container>
  </Box>
)

export const Profile = ({ name, src, des }) => (
  <Container alignItems="center">
    <Image src={src} borderRadius={190}></Image>
    <Text mt={6} fontSize="md" fontWeight="extrabold">
      {' '}
      {name}
    </Text>
    <Text fontSize="sm">{des}</Text>
  </Container>
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)

export const Stat = props => {
  const { label, value, ...boxProps } = props
  return (
    <Box
      px={{
        base: '4',
        md: '6'
      }}
      py={{
        base: '5',
        md: '6'
      }}
      bg="white"
      borderRadius="lg"
      boxShadow={useColorModeValue('sm', 'sm-dark')}
      {...boxProps}
    >
      <Stack>
        <Text fontSize="sm" color="black">
          {label}
        </Text>
        <Heading
          color="black"
          size={useBreakpointValue({
            base: 'sm',
            md: 'md'
          })}
        >
          {value}
        </Heading>
      </Stack>
    </Box>
  )
}

export const Testimonials = props => {
  const { name, src, des, bg, abt, description, linkedin } = props
  return (
    <Center py={6}>
      <Box
        maxW={'300px'}
        minW="250px"
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
      >
        <Image h={'120px'} w={'full'} src={bg} objectFit={'cover'} />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={src}
            alt={'Author'}
            css={{
              border: '2px solid white'
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'1xl'} fontWeight={500} fontFamily={'body'}>
              {name}
            </Heading>
            <Text color={'gray.500'}>{des}</Text>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontSize={'sm'} color={'gray.500'}>
                {abt}
              </Text>
              <Text fontSize={'sm'} color={'gray.400'} textAlign="center">
                {description}
              </Text>
            </Stack>
          </Stack>
          <Link href={linkedin} target="_blank">
            <Button
              w={'full'}
              mt={8}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg'
              }}
            >
              Linkedin
            </Button>
          </Link>
        </Box>
      </Box>
    </Center>
  )
}

export const Press = (props, result) => {
  const { id, title, authorName, content, url } = props
  return (
    <Container maxWidth="1200px" mx="auto" my="auto" p={{ base: 5, md: 10 }}>
      <SimpleGrid columns={[1, 2, 3]} spacing="15px">
        <Box position="relative" key={id}>
          <Box
            fontSize="sm"
            position="absolute"
            right="5x"
            margin="5px"
            zIndex="1"
          >
            <Badge rounded="full" p="2px 8px" colorScheme="red" as="button">
              article
            </Badge>
          </Box>
          <Link to="#">
            <Box
              borderWidth="1px"
              shadow="md"
              rounded="lg"
              overflow="hidden"
              position="relative"
            >
              <Image src={src} />
              <Box p={{ base: 4, lg: 6 }}>
                <Box d="flex" alignItems="baseline">
                  <Box
                    fontWeight="semibold"
                    as="h2"
                    letterSpacing="wide"
                    textTransform="uppercase"
                    ml="2"
                  >
                    {title}
                  </Box>
                </Box>
                <Box>
                  <Box color="gray.600" fontSize="sm">
                    <Badge rounded="full" px="2" colorScheme="teal">
                      {authorName}
                    </Badge>
                  </Box>
                </Box>
                <Text
                  mt="1"
                  fontWeight="semibold"
                  noOfLines={3}
                  color="gray.400"
                  fontSize="sm"
                >
                  {content}
                </Text>
              </Box>
            </Box>
          </Link>
        </Box>
      </SimpleGrid>
    </Container>
  )
}

export const CallToActionWithVideo = props => {
  const [buttonText, setButtonText] = useState('Closed')
  function afterClick() {
    setButtonText('Closed ')
  }
  const { user } = useUser()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  // email=user.email;
  // name=user.name;

  const {
    title,
    subtitle,
    des,
    url,
    src,
    ask,
    tsize,
    subs,
    logo,
    growth,
    cagr,
    msize,
    industry,
    funnel
  } = props
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={800}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
            fontFamily="Arial"
          >
            {/* <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  //bg: 'yellow.400',
                  zIndex: 0,
                }}>
                {title}
              </Text> */}
            <Image src={logo} width={80} />
            <br />
            <Text as={'span'} color={'white.400'}>
              {subtitle}
            </Text>
          </Heading>
          <Text color={'gray.500'}>{des}</Text>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
          >
            <Link href={url} target="_blank">
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'white'}
                bg={'yellow.400'}
                _hover={{ bg: 'white.500' }}
              >
                Learn more
              </Button>
            </Link>
<Link href="https://forms.zohopublic.in/pedalstart1/form/PedalInvestWaitlist/formperma/Y_AblTQxW5BRxcUE3ZieJ599kVzxSpfCCHXyz6TMPxI" target='_blank'>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              //isDisabled={false}
              leftIcon={<ViewIcon h={4} w={4} color={'gray.300'} />}
            >
              Show Interest
            </Button>
            </Link>
          </Stack>
        </Stack>
        <Flex
          flex={0.5}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Box
            position={'relative'}
            p="6"
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
          >
            {/* <IconButton
                aria-label={'Play Button'}
                variant={'ghost'}
                _hover={{ bg: 'transparent' }}
                icon={<PlayIcon w={12} h={12} />}
                size={'lg'}
                href
                color={'white'}
                position={'absolute'}
                left={'50%'}
                top={'50%'}
                transform={'translateX(-50%) translateY(-50%)'}
              />
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  src
                }
              /> */}
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <HStack direction="row" mt={5}>
                  {/* <Badge borderRadius={8} textTransform={'uppercase'} colorScheme='blue'>{industry}</Badge> */}
                  <Badge
                    borderRadius={8}
                    textTransform={'uppercase'}
                    colorScheme="blue"
                  >
                    {industry}
                  </Badge>
                  <Badge
                    borderRadius={8}
                    textTransform={'uppercase'}
                    colorScheme="yellow"
                  >
                    {funnel}
                  </Badge>
                </HStack>
              </Box>
              <StackDivider />
            </Stack>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}
            >
              <Box>
                <Heading size="lg" pt={0}>
                  {ask}
                </Heading>
                <Text fontSize="xs" color={'gray.500'}>
                  Ask
                </Text>
              </Box>
              <Box boxShadow={2}>
                <Heading size="sm" pt={0}>
                  {subs}
                </Heading>
                <Text fontSize="sm" color={'gray.500'}>
                  Subscribed
                </Text>
              </Box>

              <Box>
                <Heading size="lg" pt={0}>
                  {tsize}
                </Heading>
                <Text fontSize="sm" color={'gray.500'}>
                  Minimum Cheque Size
                </Text>
              </Box>
            </Stack>
            <StackDivider />
            <Stack
              spacing={{ base: 4, sm: 8 }}
              direction={{ base: 'column', sm: 'row' }}
              mt={'8'}
            >
              <Box boxShadow={2}>
                <Heading size="l" pt={2}>
                  {msize}
                </Heading>
                <Text fontSize="xs" color={'gray.500'}>
                  Market Size
                </Text>
              </Box>
              <Box>
                <Heading size="l" pt={2}>
                  {cagr}
                </Heading>
                <Text fontSize="xs" color={'gray.500'}>
                  CAGR
                </Text>
              </Box>
              
            </Stack>
          </Box>
        </Flex>
      </Stack>
    </Container>
  )
}

const PlayIcon = createIcon({
  displayName: 'PlayIcon',
  viewBox: '0 0 58 58',
  d: 'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z'
})

/* export const Blob = (props: IconProps) => {
    return (
      <Icon
        width={'100%'}
        viewBox="0 0 578 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
          fill="currentColor"
        />
      </Icon>
    );
  }; */

export const Competitors = ({ name, thumbsrc }) => {
  return (
    <Box
      w="100%"
      textAlign={'center'}
      boxShadow={'1xl'}
      bg={useColorModeValue('white', 'gray.900')}
      rounded={'lg'}
      p={6}
    >
      {/* <Image
      src={thumbsrc}
      alt={name}
      className="grid-item-thumbnail"
      placeholder="blur"
      /> */}
      <Heading fontSize={20} mt={2}>
        {name}
      </Heading>
    </Box>
  )
}

export const NCompetitors = ({ name, backed, src, raised }) => {
  const initialFocusRef = React.useRef()
  return (
    <Popover
      initialFocusRef={initialFocusRef}
      placement="bottom"
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <Button>{name}</Button>
      </PopoverTrigger>
      <PopoverContent color="white" bg="blue.800" borderColor="blue.800">
        <PopoverHeader pt={4} fontWeight="bold" border="0">
          Backed By
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>{backed}</PopoverBody>
        <PopoverFooter
          border="0"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          pb={4}
        >
          <Box fontSize="sm">{raised}</Box>
          <ButtonGroup size="sm">
            <Link href={src} target="_blank">
              <Button colorScheme="green">learn more</Button>
            </Link>
            {/* <Button colorScheme='blue' ref={initialFocusRef}>
              Next
            </Button> */}
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  )
}
