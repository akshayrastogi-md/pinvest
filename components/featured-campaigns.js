import {
  Container,
  chakra,
  SimpleGrid,
  Box,
  Link,
  Button
} from '@chakra-ui/react'
import Section from './section'
import { StartupCards } from './grid-item'
import ohlocalbg from '../public/images/works/ohlocal.png'

export default function FeaturedCampaigns() {
  return (
    <Container
      maxWidth={{ base: '-moz-fit-content', sm: '80%' }}
      mt={20}
      mb={4}
      textAlign={'center'}
    >
      <chakra.h2
        fontSize={{
          base: '3xl',
          sm: '4xl'
        }}
        fontWeight="extrabold"
        mb={10}
        mt={0}
        textAlign="center"
        letterSpacing="tight"
        lineHeight="shorter"
        color="gray.900"
        _dark={{
          color: 'gray.100'
        }}
      >
        <chakra.span display="block">Featured Campaigns</chakra.span>
      </chakra.h2>
      <SimpleGrid columns={[1, 1, 3]} gap={6}>
        <Section>
          <StartupCards
            id="startup"
            name="Ohlocal"
            des="India’s local marketplace connecting brands with merchants, merchants with consumers and consumer with brands in their city via an AI-enabled smart real-time bidding platform."
            thumbsrc={ohlocalbg}
            ask="50 Lakh"
            raised="n/a"
            industry="Hyperlocal e-commerce"
            traction="1328 subscriptions"
            status="Opening Soon"
          ></StartupCards>
        </Section>

        {/* <Section>
<StartupCards id ="toyflix"name="Toyflix" des="Toyflix is an online Toy rental platform, where parents find labelled and innovative toys for their kids." thumbsrc={toyflixbg} ask="$100k" raised="n/a" industry="Toy Rental" traction="1328 subscriptions" tag={'Zero-to-one'} status ="Upcoming"> </StartupCards>
</Section>
<Section>
<StartupCards id="newtral" name="Newtral" des="Enterprise-grade SaaS platform helping organisations securely map, measure and reduce their carbon emissions." thumbsrc={newtralbg} ask="$80k" raised="100%" industry="Clean-tech" traction=" 2 B2B customers " tag={'Zero-to-one'} status="Closed"> </StartupCards>
</Section>
<Section>
<StartupCards id = "betterspace" name="Betterspace" des="A mental health platform founded to give people the freedom to choose the best way to look after their mental health." thumbsrc={betterspacebg} ask="$55k" raised="n/a" industry='Health-tech' traction="500+ Downloads" tag={'Zero-to-one'} status="Upcoming"> </StartupCards>
</Section> */}
      </SimpleGrid>
      <Section>
        <Box align="center" my={4}>
          <Link href="/zerotoone">
            <Button colorScheme="teal">View All Opportunities</Button>
          </Link>
        </Box>
      </Section>
    </Container>
  )
}
