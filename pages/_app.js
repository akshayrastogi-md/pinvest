 import { ChakraProvider } from '@chakra-ui/react'
 import Layout from '../components/layouts/main'
 import theme from '../libs/theme'
 import Fonts from '../components/fonts'
 import { AnimatePresence } from 'framer-motion'
 import {UserProvider} from '@auth0/nextjs-auth0/client'
 import { useEffect } from 'react'
 import { useRouter } from 'next/router'
 import Script from 'next/script'

 const Website = ({Component,pageProps,router}) => {
    //const router = useRouter()
    useEffect(() => {
        import('react-facebook-pixel')
          .then((x) => x.default)
          .then((ReactPixel) => {
            ReactPixel.init('2853579244910289') // facebookPixelId
            ReactPixel.pageView()
    
            router.events.on('routeChangeComplete', () => {
              ReactPixel.pageView()
            })
          })
      }, [router.events])
      
     return ( 
        <>
        
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-3L4ZLPL9Y5"></Script>
<Script>
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-3L4ZLPL9Y5');
    `}

</Script>
        <UserProvider>
         <ChakraProvider theme={theme}>
             <Fonts />
             <Layout router={router}>
                 <AnimatePresence exitBeforeEnter initial = {true}>
                     
                 <Component {...pageProps} key={router.route} />
                 </AnimatePresence>
                 </Layout>
         </ChakraProvider>
         </UserProvider>
         </>
     )
 }

 export default Website