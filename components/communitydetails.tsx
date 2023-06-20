import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcReading, FcApprove, FcAreaChart } from 'react-icons/fc';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack boxShadow={'xl'} padding={5} borderRadius={8}>
      <Flex
        w={16}
        
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
        
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={4} >
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
        
          icon={<Icon as={FcReading} w={10} h={10} />}
          title={'Mate Calls'}
          text={
            'At PedalStart we have in house ex-entrepreneurs that connect with startups on weekly basis to guide them in entrepreneurial journey.'

          }
          
        />
        <Feature
          
          icon={<Icon as={FcApprove} w={10} h={10} />}
          title={'Mentor Connect'}
          text={
            'We provide founders with access to network of experienced domain experts, who can offer Guidance and advice on various aspects of building and scaling successful startups.'
          }
        />
        <Feature
          
          icon={<Icon as={FcAreaChart} w={10} h={10} />}
          title={'Acceleration'}
          text={
            "Pedal Start’s acceleration is designed to help startups rapidly grow and scale their businesses. This  segment  is tailored for startups who have reached a particular stage from where they are Ready to grow exponentially with the infusion of funds"
          }
        />
      </SimpleGrid>
    </Box>
  );
}