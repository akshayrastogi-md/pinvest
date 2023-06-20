import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Container,
  useBreakpointValue,
  chakra,
  SimpleGrid,
  Divider
} from '@chakra-ui/react'
import Section from '../components/section'
import { StartupCards, FunnelCards, Mentors } from '../components/grid-item'
import mandeep from '../public/mentors/mandeep.png'
import rishav from '../public/mentors/rishav.png'
import priyesh from '../public/mentors/priyesh.png'
import dhruv from '../public/mentors/dhruv.png'
import neerav from '../public/mentors/neerav.png'
import varun from '../public/mentors/varun.png'
import vikas from '../public/mentors/vikas.png'
import alok from '../public/mentors/alok.png'
import ram from '../public/mentors/ram.png'
import sandeep from '../public/mentors/sandeep.png'
import abhinav from '../public/mentors/abhinav.png'
import nikhil from '../public/mentors/nikhil.png'

export default function Testonomials() {
  return (
    <Container maxWidth={'80%'} mt={40} textAlign="center" pt={20} pb={20}>
      <chakra.h2
        fontSize={{
          base: '3xl',
          sm: '4xl'
        }}
        fontWeight="extrabold"
        mb={20}
        mt={0}
        textAlign="center"
        letterSpacing="tight"
        lineHeight="shorter"
        color="gray.900"
        _dark={{
          color: 'gray.100'
        }}
      >
        <chakra.span display="block">
          We're backed by incredible mentors & investors
        </chakra.span>
      </chakra.h2>
      
      <SimpleGrid columns={[2, 2, 6]}>
        <Section>
          <Mentors id="12"title="Mandeep Manocha" thumbnail={mandeep}>
            Cashify
          </Mentors>
        </Section>
        <Section>
          <Mentors id="12" title="Rishav Agarwal" thumbnail={rishav}>
            Picxele
          </Mentors>
        </Section>
        <Section>
          <Mentors id="12" title="Priyesh Jaiswal" thumbnail={priyesh}>
            Flipkart
          </Mentors>
        </Section>
        <Section>
          <Mentors id="12" title="Dhruv Kumar" thumbnail={dhruv}>
            Angel Investor
          </Mentors>
        </Section>
        <Section>
          <Mentors id="12" title="Neerav Jain" thumbnail={neerav}>
            Angel Investor
          </Mentors>
        </Section>
        <Section>
          <Mentors id="12" title="Varun Miglani" thumbnail={varun}>
            Angel Investor
          </Mentors>
        </Section>
        <Section>
          <Mentors id="12" title="Vikas Lakhani" thumbnail={vikas}>
            InstaOffice
          </Mentors>
        </Section>
        <Section>
          <Mentors id="12" title="Alok Kohli" thumbnail={alok}>
            Pepsico
          </Mentors>
        </Section>
        <Section>
          <Mentors id="12" title="M Ramakrishnan" thumbnail={ram}>
            Investor
          </Mentors>
        </Section>
        <Section>
          <Mentors id="12" title="Sandeep Nailwal" thumbnail={sandeep}>
            Polygon
          </Mentors>
        </Section>
        <Section>
          <Mentors id="12" title="Abhinav Kumar" thumbnail={abhinav}>
            Paytm
          </Mentors>
        </Section>
        <Section>
          <Mentors id="12" title="Nikhil Thomas" thumbnail={nikhil}>
            Udaan
          </Mentors>
        </Section>
      </SimpleGrid>
    </Container>
  )
}
