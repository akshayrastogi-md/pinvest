import { chakra, Container, Stack, HStack, VStack, Flex, Text, Image, Box } from '@chakra-ui/react';

const overviewList = [
  { id: 1, 
    label: 'Show Interest',
    subLabel: "Browse our list of live deals from innovative startups and click the 'Interested' button. This lets the startup know that you're potentially interested in working with them." },
  {
    id: 2,
    label: 'Attend Pitch',
    subLabel: "Join the pitch call along with other potential investors or partners. This gives you the opportunity to gain a deeper understanding of the startup, its vision, and its team."},
  {
    id: 3,
    label: 'Pass Commitment',
    subLabel: "If you feel that the startup's goals and values align with your own, you can pass a commitment to show your support. This could involve offering to invest."
  },
  {
    id: 4,
    label: 'Park the money in an Escrow',
    subLabel: "After showing interest, the committed amount will be disbursed into escrow account."
  }
];

const OverviewSection = () => {
  return (
    <Container maxW="6xl" py={10}>
      <chakra.h2 fontSize="5xl" fontWeight="bold" textAlign="center" mb={10}>
        How it works?
      </chakra.h2>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: 0, md: 3 }}
        justifyContent="center"
        alignItems="center"
      >
        <VStack spacing={8} alignItems="flex-start" mb={{ base: 5, md: 0 }} maxW="md">
          {overviewList.map((data) => (
            <Box key={data.id}>
              <HStack spacing={2}>
                <Flex
                  fontWeight="bold"
                  boxShadow="md"
                  color="white"
                  bg="blue.400"
                  rounded="full"
                  justifyContent="center"
                  alignItems="center"
                  w={10}
                  h={10}
                >
                  {data.id}
                </Flex>
                <Text fontSize="xl" fontWeight={'bold'}>{data.label}</Text>
              </HStack>
              <Text fontSize="md" color="gray.500" ml={12}>
                {data.subLabel}
              </Text>
            </Box>
          ))}
        </VStack>
        <Image
          boxSize={{ base: 'auto', md: 'lg' }}
          objectFit="contain"
          src="/images/howitworks.png"
          rounded="lg"
        />
      </Stack>
    </Container>
  );
};

export default OverviewSection;