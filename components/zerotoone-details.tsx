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
          title={'Intensive Learning'}
          text={
            'Together with successful startup founders and mentors, explore the wide range of learning opportunities that are specially designed to flourish in the startup ecosystem.'

          }
          
        />
        <Feature
          
          icon={<Icon as={FcApprove} w={10} h={10} />}
          title={'Build Skills'}
          text={
            'The intensive learning will help you add cutting-edge skills to your toolbox. The skill sets upgrade with the help of following selectively created toolkit and moderately designed courses.'
          }
        />
        <Feature
          
          icon={<Icon as={FcAreaChart} w={10} h={10} />}
          title={'Gain Experience'}
          text={
            'You will gain experience by learning from real-life startup problems. The practical approach will be help you tackle 6 dimensional issues through the problem statements.'
          }
        />
      </SimpleGrid>
    </Box>
  );
}