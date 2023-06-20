import { Container,Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { StartupCards, WorkGridItem } from '../components/grid-item'
import newtralbg from '../public/images/works/newtral.png'
import betterspacebg from '../public/images/works/betterspace.png'
import Hero from '../components/mainhero'
import zerobg from '../public/zer2one.png'
import agcubatorbg from '../public/agcubator.jpg'
import communitybg from '../public/Community.png'
import GridItem from '../components/grid-item'
import toyflixbg from '../public/images/works/toyflix.png'
import {ChevronRightIcon,Box,NextLink,Button,Card,CardBody,CardHeader,Stack,StackDivider} from '@chakra-ui/react'
import Link from 'next/link'
import Slider from '../components/slider'
import newtral from './works/newtral'

const Opportunities = () => (
    <Layout title="PedalStart For Investors">
        <Container maxWidth={{base:'-moz-fit-content', sm:'80%'}} mt={20} mb={4}>
        <Heading as = "h3" fontSize={20} mb={4} mt={0}>
            Featured Campaigns
            </Heading>
            <SimpleGrid columns={[1,1,3]} gap={6}>
                
                <Section>
                <StartupCards id ="toyflix"name="Toyflix" des="Toyflix is an online Toy rental platform, where parents find labelled and innovative toys for their kids." thumbsrc={toyflixbg} ask="$100k" raised="n/a" industry="Toy Rental" traction="1328 subscriptions" tag={'Zero-to-one'} status ="Upcoming"> </StartupCards>
                </Section>
                <Section>
                <StartupCards id="newtral" name="Newtral" des="Enterprise-grade SaaS platform helping organisations securely map, measure and reduce their carbon emissions." thumbsrc={newtralbg} ask="$80k" raised="100%" industry="Clean-tech" traction=" 2 B2B customers " tag={'Zero-to-one'} status="Live"> </StartupCards>
                </Section>
                <Section>
                <StartupCards id = "betterspace" name="Betterspace" des="A mental health platform founded to give people the freedom to choose the best way to look after their mental health." thumbsrc={betterspacebg} ask="$55k" raised="n/a" industry='Health-tech' traction="500+ Downloads" tag={'Zero-to-one'} status="Upcoming"> </StartupCards>
                </Section>
            
            </SimpleGrid>
        </Container>
       
            
            
                
                

     <Section>
    <Box align ="center" my={4}>
        <Link href="/zerotoone">
            
            <Button colorScheme ="teal">
                View All Opportunities
                </Button>
                </Link>
                 
                </Box>
                </Section> 
    <Container maxWidth='80%'>
        <Heading as = "h3" fontSize={20} mb={4} mt={20}>
            Live Opportunities Community
            </Heading>
            <Section >
            <h1>Coming Soon</h1>
            </Section>

            
            
            </Container>
    </Layout>
)


export default Opportunities