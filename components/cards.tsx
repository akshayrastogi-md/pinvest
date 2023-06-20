import {
    chakra,
    Box,
    Stack,
    Link,
    HStack,
    Text,
    Container,
    Icon,
    Avatar,
    Tooltip,
    StackProps,
    Divider,
    useColorModeValue
  } from '@chakra-ui/react';
  // Here we have used react-icons package for the icons
  import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
  
  const UserCard = ({name,week,des,src,img,complogo,compname}) => {
    return (
      <Container maxW="5xl" p={{ base: 5, md: 6 }}>
        <Stack
          w="17rem"
          spacing={1}
          p={4}
          border="1px solid"
          borderColor={useColorModeValue('gray.400', 'gray.600')}
          rounded="md"
          margin="0 auto"
          _hover={{
            boxShadow: useColorModeValue(
              '0 4px 6px rgba(160, 174, 192, 0.6)',
              '0 4px 6px rgba(9, 17, 28, 0.4)'
            )
          }}
        >
          <HStack justifyContent="space-between" alignItems="center">
            <Tooltip
              label={compname}
              aria-label="Mandeep Manocha"
              placement="right-end"
              size="sm"
              // Sizes for Tooltip are not implemented in the default theme. You can extend the theme to implement them
            >
              <Box pos="relative">
                <Avatar
                  src={img}
                  name="Mandeep Manocha"
                  size="xl"
                  borderRadius="md"
                />
                <Avatar
                  src={complogo}
                  name=" Flag"
                  size="xs"
                  borderRadius="full"
                  pos="absolute"
                  bottom={0}
                  right="-12px"
                />
              </Box>
            </Tooltip>
            <Link isExternal href={src}>
              <Icon as={AiFillLinkedin} w={6} h={6} />
            </Link>
          </HStack>
          <chakra.h1 fontSize="xl" fontWeight="bold">
           {week}
          </chakra.h1>
          <Text fontSize="sm" color="gray.400">
            {name}
          </Text>
          <Divider />
          <Text fontSize="md" color="gray.500">
            {des}
          </Text>
        </Stack>
      </Container>
    );
  };
  
  export default UserCard;