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
          title={'Intense Learning'}
          text={
            'We onboarded successful startup founders, who have-been-there-done-that during their journey in the ecosystem.'

          }
          
        />
        <Feature
          
          icon={<Icon as={FcApprove} w={10} h={10} />}
          title={'Innovation'}
          text={
            'Agcubator gives a platform to develop skills and sustain mindsets, as we believe, mindsets and expertise go hand in hand.'
          }
        />
        <Feature
          
          icon={<Icon as={FcAreaChart} w={10} h={10} />}
          title={'Field Exposure'}
          text={
            'The founders can boost their venture by unveiling the access to Infrastructure laboratories, testing facilities.'
          }
        />
      </SimpleGrid>
    </Box>
  );
}