import * as React from 'react';
import { Container, chakra, Stack, Text, Button, Box } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { FaGithub } from 'react-icons/fa';


const HeroSection = () => {
  return (
    <Container p={{ base: 8, sm: 14 }}>
      <Stack direction="column" spacing={6} alignItems="center">
        <Box py={2} px={3} bg="teal" w="max-content" color="white" rounded="md" fontSize="sm">
          <Stack direction={{ base: 'column', sm: 'row' }}>
            <Text fontWeight="bold"></Text>
            <Text>Let's Build Ideas</Text>
          </Stack>
        </Box>
      
        <chakra.h1
          fontSize={{ base: '4xl', sm: '5xl' }}
          fontWeight="bold"
          textAlign="center"
          maxW="600px"
        >
          Accelerated Startups{' '}
          {/* <chakra.span color="teal" bg="linear-gradient(transparent 50%, #83e9e7 50%)">
            Cohort
          </chakra.span> */}
        </chakra.h1>
        <Text maxW="550px" fontSize="xl" textAlign="center" color="gray.500">
        Dynamic community of innovative entrepreneurs to help transform their  ideas into successful businesses.
        

        </Text >
        <Text fontSize={'sm'} textAlign={'center'} color={'gray.600'} sizemaxW="80%"> Pedal Start provides a curated pool of startups which are accelerated by PedalStart after working with them on the Prerequisites that make them ready for funding.</Text>
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          w={{ base: '100%', sm: 'auto' }}
          spacing={5}
          align={'center'}
        >
          <Link href='https://pedalstart.com' target='blank'>
          <Button
            colorScheme="teal"
            variant="outline"
            rounded="md"
            size="lg"
            height="3.5rem"
            fontSize="1.2rem"
            
          >
            learn more
          </Button>
          </Link>
          
        </Stack>
      </Stack>
    </Container>
  );
};

export default HeroSection;