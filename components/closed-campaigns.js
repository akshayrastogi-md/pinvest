import {
  Container,
  Heading,
  useColorModeValue,
  chakra,
  SimpleGrid,
  Image
} from '@chakra-ui/react'
import Section from './section'
import { StartupCards, FunnelCards, Mentors } from './grid-item'
import procialbg from '../public/images/works/procial.png'
import tsawbg from '../public/images/works/tsaw.png'
import newtralbg from '../public/images/works/newtral.png'
import toyflixbg from '../public/images/works/toyflix.png'

export default function ClosedCampaigns() {
  return (
    <Container
      maxWidth={{ base: '-moz-fit-content', sm: '80%' }}
      mt={20}
      mb={4}
      pt={20}
      pb={20}
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
        <chakra.span display="block">Closed Campaigns</chakra.span>
      </chakra.h2>
      <SimpleGrid columns={[1, 1, 3]} gap={6}>
        <Section>
          <StartupCards
            id="tsawdrones"
            name="TSAW Drones"
            des="TSAW Drones is a leading drone logistics service provider in India. They provide last mile delivery or warehouse to warehouse delivery using their drones."
            thumbsrc={tsawbg}
            ask="2.5Cr"
            raised="Closed"
            industry="AeroSpace"
            status="100% Closed in 2 Weeks"
          ></StartupCards>
        </Section>
        <Section>
          <StartupCards
            id="procial"
            name="Procial"
            des="Built with the power of blockchain as a decentralized social network for content creators and brands to engage freely with users and benefit out of the crypto economy."
            thumbsrc={procialbg}
            ask="$1.2Mn"
            raised="Closed"
            industry="Health-tech"
            status="100% Closed in 2 Weeks"
          ></StartupCards>
        </Section>
        <Section>
          <StartupCards
            id="newtral"
            name="Newtral"
            des="Enterprise-grade SaaS platform helping organisations securely map, measure and reduce their carbon emissions."
            thumbsrc={newtralbg}
            ask="$80k"
            raised="100%"
            industry="Clean-tech"
            traction=" 2 B2B customers "
            status="100% Closed in 2 Weeks"
          ></StartupCards>
        </Section>
        <Section>
          <StartupCards
            id="toyflix"
            name="Toyflix"
            des="Toyflix is an online Toy rental platform, where parents find labelled and innovative toys for their kids."
            thumbsrc={toyflixbg}
            ask="$100k"
            raised="Closed"
            industry="Toy Rental"
            //traction="1328 subscriptions"
            status="Closed"
          ></StartupCards>
        </Section>
      </SimpleGrid>
    </Container>
  )
}
