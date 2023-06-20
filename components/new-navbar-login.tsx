import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Center,
  Divider,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon
} from '@chakra-ui/icons'
import Logo from './logo.js'
import { useUser } from '@auth0/nextjs-auth0/client'

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure()
  const { user } = useUser()
  return (
    <Box position="sticky" top="0" zIndex={10}>
      <Flex
        bg={useColorModeValue('white', 'white')}
        style={{ backdropFilter: 'blur(10px' }}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
        justify={{ base: 'space-between', md: 'space-between' }}
        boxShadow={'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex justify={{ base: 'center', md: 'start' }}>
          <Logo />
        </Flex>

        <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
          <DesktopNav />
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}
          >
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'blue.500'}
              href={'https://pedalstart.com/contact/'}
              boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"
              _hover={{
                bg: 'blue.600',
                boxShadow: 'none',
                transition: 'all 0.3s ease-in-out'
              }}
            >
              Reach Our Team
            </Button>
          </Stack>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('blue', 'blue.200')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem, index) => (
        <Box key={navItem.label}>
          <Flex align="center" justify="space-between">
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  pr={4}
                  href={navItem.href ?? '#'}
                  fontSize={'md'}
                  fontWeight={500}
                  color={"black"}
                  _hover={{
                    color:linkColor,
                    textDecoration: 'none',
                    transition:"all 0.3s ease-in-out"
                  }}
                >
                  {navItem.label}
                </Link>
              </PopoverTrigger>

              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}
                >
                  <Stack>
                    {navItem.children.map(child => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
            {!!(index < NAV_ITEMS.length - 1) && (
              <Center height="20px">
                <Divider
                  orientation="vertical"
                  borderWidth="1px"
                  borderColor="blackAlpha.500"
                />
              </Center>
            )}
          </Flex>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      target="_blank"
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('blue.50', 'blue.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'blue.400' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  )
}

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'blue.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none'
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map(child => (
              <Link key={child.label} py={2} href={child.href} target="_blank">
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'About Us',
    href: 'https://pedalstart.com/about/'
  },
  {
    label: 'Raise',
    href: 'https://pedalstart.com/wishlist-2/'
  }
  /* {
      label: 'Investors',
      children: [
        {
          label: 'Join Angels Community',
          subLabel: 'a community of angel investors',
          href: '#',
        },
      ],
    }, */
  // {
  //   label: 'are you a startup founder?',
  //   href: 'https://pedalstart.com/wishlist-2',
  // },
]
