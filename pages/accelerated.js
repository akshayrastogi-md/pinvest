import Hero from '../components/acceleratedHero'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { Container,SimpleGrid,chakra,Heading,useColorModeValue, Center } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import newtralbg from '../public/images/works/newtral.png'
import dragonbg from '../public/images/works/dragon.png'
import grooksbg from '../public/images/works/grooks.png'
import pepspotbg from '../public/images/works/pepspot.png'
import rapideazybg from '../public/images/works/rapideazy.png'
import socialhrbg from '../public/images/works/socialhr.png'
import toyflixbg from '../public/images/works/toyflix.png'
import UserCard from '../components/cards'
import betterspacebg from '../public/images/works/betterspace.png'
import dayonebg from '../public/images/works/dayone.png'
import { Testimonials } from '../components/work'
import Stats from '../components/acceleratedstats.tsx'
import Feature from '../components/communitydetails'
const team = [
    {
        id:'1',
        name:'Ankit Mehrota',
        src:'https://media.licdn.com/dms/image/C5603AQGnhLx5fHzGhA/profile-displayphoto-shrink_400_400/0/1517558926553?e=1681344000&v=beta&t=L8x-xZRsrpngXufKKafaY7XlzMrcL2B6RYqcvwO4d9s',
        des: 'Co-Founder & CEO Dineout',
        abt:"IDEA & POSITION",
        bg:'https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/styles/1200x706/public/news9374.jpg?itok=1o2qmjNd',
        linkedin : 'https://www.linkedin.com/in/ankitatdineout/'
      },
      {
        id:'2',
        name:'Abhinav Kumar',
        src:'https://gumlet.assettype.com/afaqs%2F2019-09%2F5c709993-9f23-4203-945a-44de758ec205%2F0.jpg?format=webp&w=400&dpr=2.6',
        des: 'Ex-VP Of Marketing Paytm',
        abt:"MARKETING & SALES",
        bg:'https://play-lh.googleusercontent.com/I_hH8gHVIdMtMGOTMsq6z5fxSwsTUbY0uX8YXm_QaCKB7_s7r-JZUhl1yJgtYU22P44=w3840-h2160-rw',
        linkedin : 'https://www.linkedin.com/in/abhinav-kumar-eth/'
      },
      {
        id:'3',
        name:'Mandeep Manocha',
        src:'https://media.licdn.com/dms/image/C4E03AQGsvn_b7yfyKA/profile-displayphoto-shrink_400_400/0/1517711969366?e=1680134400&v=beta&t=X_4J7dUe5HBj_2zVfeOFFXgqihU2YrJ4zJtBfYiICg4',
        des: 'Co-Founder & CEO Cashify',
        abt:"EXECUTION & REVENUE",
        bg:'https://gumlet.assettype.com/barandbench%2F2021-03%2Ff3429164-2324-467b-ba58-997c47677292%2FCashify.jpg?format=auto',
        linkedin : 'https://www.linkedin.com/in/mandeep-manocha-baaaa86/'
      },
    {
      id:'4',
      name:'Vivek Agarwal',
      src:'https://media.licdn.com/dms/image/C5103AQGIfwgB_NMD2w/profile-displayphoto-shrink_400_400/0/1567958232922?e=1681344000&v=beta&t=2SjGKTmuyvNW8LrE-clwh1en4uI30mZLEt9quvURD4s',
      des: 'Co-Founder Square Yards',
      abt:"TECH & OPERATIONS",
      bg:'http://cohort.pedalstart.com/wp-content/uploads/2023/02/1-scaled.jpg',
      linkedin : 'https://www.linkedin.com/in/vivagarwal/'
    },
    {
        id:'5',
        name:'Sorabh Agarwal',
        src:'https://media.licdn.com/dms/image/C5103AQEttqWh25Tw7A/profile-displayphoto-shrink_400_400/0/1516316121094?e=1681344000&v=beta&t=yadfi_uk-LDobWKaMK62pYHZsQxsLBNOWRh34qk0Fow',
        des: 'Co-Founder at Angelbay',
        abt:"FINANCE & COMPLIANCE",
        bg:'http://cohort.pedalstart.com/wp-content/uploads/2023/02/8-scaled.jpg',
        linkedin : 'https://www.linkedin.com/in/sorabh-agarwal-52277a1/'
      },
      {
        id:'6',
        name:'Annu Talreja',
        src:'https://zerotoone.pedalstart.com/wp-content/uploads/2022/12/untitled-design-19-750.webp',
        des: 'Founder & CEO Accacia.ai',
        abt:"FUND RAISING",
        bg:'http://cohort.pedalstart.com/wp-content/uploads/2023/02/10-scaled.jpg',
        linkedin : 'https://www.linkedin.com/in/annu-talreja-4b28316/'
      },
      
    
    
  ]

export default function Zerotoone () {
    return(
        <Layout title="zerotoone">
            <Hero />
            <Container maxWidth={'80%'} textAlign={'center'}>
            <Stats />

            </Container>
           
            <Container maxWidth={'80%'} mt={10}>
            <chakra.h1
            py={5}
            fontSize={28}
            fontFamily={'Work Sans'}
            fontWeight={'bold'}
            textAlign={'center'}
            mb={5}
          
            color={useColorModeValue('gray.700', 'gray.50')}>
                
             Structure
          </chakra.h1>

             <Feature />

             
             </Container>
            
            {/* <Container maxWidth='80%' alignItems='center'>
            <Heading as = "h3" fontSize={20} mb={4} mt={20} textAlign='Center'>
            Mentors
            </Heading>
            
            <SimpleGrid columns={{ base: 1, md: 3 }} placeItems="center" spacing={5} mt={12} mb={4}>
                {team.map(({name,src,des,bg,abt,linkedin})=>(
                  <Testimonials name={name} src={src} bg={bg} des={des} abt={abt} linkedin={linkedin} />
                ))}
                </SimpleGrid>
            </Container> */}
            <Container maxWidth='80%'>
        <Heading as = "h3" fontSize={20} mb={4} mt={20}>
            Live Opportunities
            </Heading>
            
            <SimpleGrid columns={[1,1,3]} gap={6}>
                <Section>
                    <WorkGridItem id ="newtral" title = "Newtral" thumbnail={newtralbg}>
                    Enterprise-grade SaaS platform helping organisations securely map, measure and reduce their carbon emissions
                </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id ="toyflix" title = "Toyflix" thumbnail={toyflixbg}>
                    Toyflix is an online Toy rental platform, where parents find labelled and innovative toys for their bundle of joy at very nominal fees.
                </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id ="betterspace" title = "Betterspace" thumbnail={betterspacebg}>
                    BetterSpace is a start-up working on the field of Mental health, Sexuality and Disability.
                </WorkGridItem>
                </Section>
                {/* <Section>
                    <WorkGridItem id ="rapideazy" title = "RapidEazy" thumbnail={rapideazybg}>
                    Enterprise-grade SaaS platform helping organisations securely map, measure and reduce their carbon emissions
                </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id ="harithavani" title = "Harithavani" thumbnail={dragonbg}>
                    Enterprise-grade SaaS platform helping organisations securely map, measure and reduce their carbon emissions
                </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id ="socialhr" title = "SocialHR" thumbnail={socialhrbg}>
                    Social.HR is a next gen AI powered career platform interwoven into the entire employee experience journey
                </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id ="toyflix" title = "ToyFlix" thumbnail={toyflixbg}>
                    Toyflix is INDIA's first STEM and educational toys renting platform for kids aged 8 months to 8 years.
                </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id ="betterspace" title = "Better Space" thumbnail={betterspacebg}>
                    BetterSpace is a start-up working on the field of Mental health, Sexuality and Disability.
                </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id ="dayone" title = "Day One" thumbnail={dayonebg}>
                    Behaviour based Digital Onboarding/ Offboarding, Induction& Continuous Learning Platform.
                </WorkGridItem>
                </Section> */}
                </SimpleGrid>
                
    </Container>

            
        </Layout>
       
        
    )
}