import {
  Box,
  Stack,
  HStack,
  VStack,
  Link,
  Divider,
  Image,
  Text,
  Button,
  IconButton,
  LinkProps
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { FaGithub } from 'react-icons/fa';
import { BsDiscord } from 'react-icons/bs';

const Footer = () => {
  return (
    <Box p={{ base: 5, md: 8 }} maxW="8xl" marginInline="auto">
      <Stack
        spacing={{ base: 8, md: 0 }}
        justifyContent="space-between"
        direction={{ base: 'column', md: 'row' }}
      >
        <Box maxW="300px">
          <Link href="https://pedalstart.com" isExternal>
            <Image w="100px" src="https://pedalstart.com/src/2021/05/logo.png" alt="PedalStart" />
          </Link>
          <Text mt={2} color="gray.500" fontSize="md">
          PedalStart is India’s fast growing startup founders’ community that works intensively with the startups
in each phase of their journey. We have been transforming big ideas into high potential businesses.
          </Text>
        </Box>
        <HStack
          spacing={4}
          d={{ base: 'none', sm: 'flex' }}
          justifyContent={{ sm: 'space-between', md: 'normal' }}
        >
          <VStack spacing={4} alignItems="flex-start">
            <Text fontSize="md" fontWeight="bold">
              PedalStart
            </Text>
            <VStack spacing={2} alignItems="flex-start" color="gray.500">
              <Link href="https://pedalstart.com/startup/" target="_blank">Startups</Link>
              <Link href="https://pedalstart.com/investor/" target="_blank">Investors</Link>
              <Link href="https://pedalstart.com/about/" target="_blank">About Us</Link>
              <Link href="https://pedalstart.com/contact/" target="blank">Contact Us</Link>
            </VStack>
          </VStack>
          <VStack spacing={4} alignItems="flex-start">
            <Text fontSize="md" fontWeight="bold">
              Quick Links
            </Text>
            <VStack spacing={2} alignItems="flex-start" color="gray.500">
              <Link href="/zerotoone">Zero-to-One</Link>
              <Link href="/accelerated">Accelerated Startups</Link>
              <Link href="/liveopportunities">Live Campaigns</Link>
              <Link href="https://pedalstart.com/privacy-policy-2" target="_blank">Privacy Policy</Link>
            </VStack>
          </VStack>

        </HStack>
      </Stack>

      <Divider my={4} />

      <Stack direction={{ base: 'column', md: 'row' }} spacing={3} justifyContent="space-between">
        <Text fontSize="md">
          Copyright{' '}
          <Link
            href="https://pedalstart.com"
            textDecoration="underline"
            _hover={{ textDecoration: 'underline' }}
            isExternal
          >
            PedalStart Technology Pvt.Ltd
          </Link>
        </Text>
        <Stack spacing={2} direction={{ base: 'column', md: 'row' }}>
          <Button  as={Link} href="https://pedalstart.com/wishlist-2" target='_blank' rounded="md" >
            Join Founders'Community
          </Button>
         {/*  <Button
           
            as={Link}
            href="#"
            rounded="md"
            color="white"
            bg="purple.500"
            _hover={{ bg: 'purple.600' }}
          >
            Join Angels Community
          </Button> */}
        </Stack>
      </Stack>
    </Box>
  );
};

/* const CustomLink = ({ children, ...props }: LinkProps) => {
  return (
    <Link href="#" fontSize="sm" _hover={{ textDecoration: 'underline' }} {...props}>
      {children}
    </Link>
  );
}; */

export default Footer;