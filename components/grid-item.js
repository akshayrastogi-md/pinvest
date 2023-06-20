import NextLink from 'next/link'
import Image from 'next/image'
import {
  Box,
  Tag,
  Text,
  LinkBox,
  LinkOverlay,
  Badge,
  Heading,
  Link,
  Stack,
  StackDivider,
  Container,
  useColorModeValue,
  HStack,
  Button,
  Flex
} from '@chakra-ui/react'
import { Global } from '@emotion/react'
import styled from '@emotion/styled'

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/works/${id}`} passHref scroll={true}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)
export const StartupCards = ({
  id,
  name,
  des,
  thumbsrc,
  raised,
  ask,
  industry,
  traction,
  tag,
  status
}) => (
  <Box
    w="100%"
    h="100%"
    textAlign={'left'}
    boxShadow={'lg'}
    bg={useColorModeValue('white', 'gray.900')}
    rounded={'lg'}
    p={6}
    _hover={{
      boxShadow:"2xl",
      transition:"all 0.3s ease-in-out"
    }}
  >
    <Badge borderRadius={7} textTransform={'normal'} colorScheme="red" mb={2}>
      {status}
    </Badge>
    <NextLink href={`/works/${id}`} passHref scroll={true}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbsrc}
          alt={name}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`/works/${id}`}>
          <Flex align={'center'} gap={'4px'}>
            <Heading fontSize={20} mt={2}>
              {name}{' '}
            </Heading>
            <Badge
              borderRadius={8}
              textTransform={'normal'}
              colorScheme="green"
            >
              {name == 'Ohlocals' ? (
                <span>
                  2<sup>nd</sup> Round
                </span>
              ) : (
                ''
              )}
            </Badge>
          </Flex>
        </LinkOverlay>

        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Text pt="2" fontSize="sm">
              {des}
            </Text>
          </Box>
        </Stack>
        <HStack spacing="24" mt={10}>
          <Box boxShadow={2}>
            {/* <Tag size={size} key={size} variant='solid' colorScheme='teal'>
Teal
</Tag> */}
            <Text fontSize="sm" color={'gray.500'}>
              Subscribed
            </Text>
            <Heading size="xs" pt={2}>
              {raised}
            </Heading>
          </Box>
          <Box>
            <Text fontSize="sm" color={'gray.500'}>
              Ask
            </Text>
            <Heading size="xs" pt={2}>
              {ask}
            </Heading>
          </Box>
        </HStack>
        <HStack direction="row" mt={5}>
          <Badge borderRadius={8} textTransform={'normal'} colorScheme="blue">
            {industry}
          </Badge>
          <Badge borderRadius={8} textTransform={'normal'} colorScheme="pink">
            {traction}
          </Badge>
        </HStack>
        <HStack direction="row" mt={2}>
          <Link href="/zerotoone">
            <Badge
              borderRadius={8}
              textTransform={'normal'}
              colorScheme="orange"
            >
              {tag}
            </Badge>
          </Link>
        </HStack>
        {/* <Text fontSize={14} mt={2}>
{des}
</Text>
<Text fontSize={14} mt={2}>
{raised} raised
</Text>
<Text fontSize={14} mt={2}>
{ask} ask
</Text> */}
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
.grid-item-thumbnail {
border-radius: 12px;
}
.logo-small {
border-radius : 90px;
}
`}
  />
)

export const FunnelCards = ({
  id,
  name,
  des,
  raised,
  ask,
  industry,
  traction,
  tag
}) => (
  <Box
    w="100%"
    textAlign={'left'}
    boxShadow={'2xl'}
    bg={useColorModeValue('white', 'gray.900')}
    rounded={'lg'}
    p={6}
  >
    <NextLink href={`/${id}`} passHref scroll={true}>
      <LinkBox cursor="pointer">
        <LinkOverlay href={`/works/${id}`}>
          <Heading fontSize={20} mt={2}>
            {name}{' '}
          </Heading>
        </LinkOverlay>

        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Text pt="2" fontSize="sm">
              {des}
            </Text>
          </Box>
        </Stack>
        <HStack direction="row" mt={5}>
          {/* <Badge borderRadius={8} textTransform={'uppercase'} colorScheme='blue'>{industry}</Badge> */}
          <Badge
            borderRadius={8}
            textTransform={'uppercase'}
            colorScheme="blue"
          >
            {tag}
          </Badge>
        </HStack>
      </LinkBox>
    </NextLink>
  </Box>
)

export const Mentors = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <Image
      src={thumbnail}
      alt={title}
      className="grid-item-thumbnail"
      placeholder="blur"
    />
    <Text mt={2} fontWeight={'bold'} fontSize={16}>
      {title}
    </Text>
    <Text fontSize={14}>{children}</Text>
  </Box>
)
