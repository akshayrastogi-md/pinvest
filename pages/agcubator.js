import Hero from '../components/agcubatorhero.js'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { Container,SimpleGrid,chakra,Heading,useColorModeValue, Center } from '@chakra-ui/react'
import { Testimonials } from '../components/work'
//import Stats from '../components/stats-zerotoone'
import Feature from '../components/agcubator-details.tsx'
const team = [
    {
        id:'1',
        name:'Sanjay Sacheti',
        src:'https://cohort.pedalstart.com/wp-content/uploads/2023/01/11-1.png',
        des: 'Country Head',
        abt:"Olam Agri",
        bg:'http://cohort.pedalstart.com/wp-content/uploads/2023/02/3-scaled.jpg',
        linkedin : 'https://www.linkedin.com/in/sanjay-sacheti-40980a39/'
      },
      {
        id:'2',
        name:'Agam Khare',
        src:'https://cohort.pedalstart.com/wp-content/uploads/2023/01/10-1.png',
        des: 'Founder & CEO',
        abt:"Absolute",
        bg:'http://cohort.pedalstart.com/wp-content/uploads/2023/02/9-scaled.jpg',
        linkedin : 'https://www.linkedin.com/in/khareagam/'
      },
      {
        id:'3',
        name:'Vamsi Udayagiri',
        src:'https://cohort.pedalstart.com/wp-content/uploads/2023/01/9-1.png',
        des: 'Founder & CEO',
        abt:"Hesa",
        bg:'http://cohort.pedalstart.com/wp-content/uploads/2023/02/5-scaled.jpg',
        linkedin : 'https://www.linkedin.com/in/vamsiudayagiri/'
      },
    {
      id:'4',
      name:'Tauseef Khan',
      src:'https://cohort.pedalstart.com/wp-content/uploads/2023/01/mentor-9.png',
      des: 'Co-Founder & CEO',
      abt:"Gramophone",
      bg:'http://cohort.pedalstart.com/wp-content/uploads/2023/02/6-scaled.jpg',
      linkedin : 'https://www.linkedin.com/in/tauseef-khan2016/'
    },
    {
        id:'5',
        name:'Nitin Jain',
        src:'https://cohort.pedalstart.com/wp-content/uploads/2023/01/8-1.png',
        des: 'Co-Founder & CEO',
        abt:"O'AgriGarm & OfBusiness",
        bg:'http://cohort.pedalstart.com/wp-content/uploads/2023/02/4-scaled.jpg',
        linkedin : 'https://www.linkedin.com/in/nitin-jain-17b82310/'
      },
      {
        id:'6',
        name:'Varun Khurana',
        src:'https://cohort.pedalstart.com/wp-content/uploads/2023/01/7-1.png',
        des: 'Founder & CEO',
        abt:"Otipy & Crofarm",
        bg:'http://cohort.pedalstart.com/wp-content/uploads/2023/02/2-scaled.jpg',
        linkedin : 'https://www.linkedin.com/in/varunkhurana/'
      },
      {
        id:'7',
        name:'Simmarpal Singh',
        src:'https://cohort.pedalstart.com/wp-content/uploads/2023/01/6-1.png',
        des: 'CFO,India',
        abt:"COFCO",
        bg:'http://cohort.pedalstart.com/wp-content/uploads/2023/02/7-scaled.jpg',
        linkedin : 'https://www.linkedin.com/in/simmarpalsingh/?originalSubdomain=in'
      },
      
    
    
  ]

export default function Agcubator () {
    return(
        <Layout title="Agcubator">
            <Hero />
            <Container maxWidth={'80%'} textAlign={'center'}>
            

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
                
             What founders will get in Agcubator
          </chakra.h1>

             <Feature />
             </Container>
            
            <Container maxWidth='80%' alignItems='center'>
            <Heading as = "h3" fontSize={20} mb={4} mt={20} textAlign='Center'>
            Mentors Of Zero-to-One
            </Heading>
            
            <SimpleGrid columns={{ base: 1, md: 4 }} placeItems="center" spacing={5} mt={12} mb={4}>
                {team.map(({name,src,des,bg,abt,linkedin})=>(
                  <Testimonials name={name} src={src} bg={bg} des={des} abt={abt} linkedin={linkedin} />
                ))}
                </SimpleGrid>
            </Container>
            <Container maxWidth='80%'>
        <Heading as = "h3" fontSize={20} mb={4} mt={20}>
            Live Opportunities from Agcubator
            </Heading>
            
                <text>Coming Soon </text>
        
            
            {/* <SimpleGrid columns={[1,1,3]} gap={6}>
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
                </Section> */}
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
                 {/* </SimpleGrid>  */}
                
    </Container> 

            
        </Layout>
       
        
    )
}