import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar from '../new-navbar-login.tsx'
import NNavbar from '../new-navbar-logout.tsx'
import {Box,Container} from '@chakra-ui/react'
import Footer from '../footer.tsx'


const Main=({ children,router}) => {
    return (
        <Box as = "main" pb={0}>
            <Head>
                <meta name= "viewport" content ="width=device-width, initial-scale=1 " /> 
                <title>PedalStart for Investors</ title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            
          
                <Navbar path ={router.aspath}></Navbar>
      
            <Container maxWidth='100%' p={0} pt={10} pb={10}>
                {children}
                
                </Container>
                
                <Container maxW='100%'>
                <Footer />
                </Container>
                
                </Box>
                

    )
    
}

export default Main