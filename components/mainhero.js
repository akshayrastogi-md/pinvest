import {
  useColorModeValue,
  Box,
  Icon,
  chakra,
  Image,
  Link
} from '@chakra-ui/react'

export default function Hero() {
  //const bg = useColorModeValue("white", "gray.800");
  return (
    <Box pos="relative" overflow="hidden" mt={15}>
      <Box maxW="7xl" mx="auto">
        <Box
          pos="relative"
          pb={{
            base: 8,
            sm: 16,
            md: 20,
            lg: 28,
            xl: 10
          }}
          maxW={{
            lg: '2xl'
          }}
          w={{
            lg: 'full'
          }}
          zIndex={1}
          //bg={bg}
          border="solid 1px transparent"
        >
          <Icon
            display={{
              base: 'none',
              lg: 'block'
            }}
            position="absolute"
            right={0}
            top={0}
            bottom={0}
            h="full"
            w={48}
            //color={bg}
            transform="translateX(50%)"
            fill="currentColor"
            //viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </Icon>
          <Box
            mx="auto"
            maxW={{
              base: '7xl'
            }}
            px={{
              base: 4,
              sm: 6,
              lg: 8
            }}
            mt={{
              base: 10,
              sm: 12,
              md: 16,
              lg: 20,
              xl: 28
            }}
          >
            <Box
              w="full"
              textAlign={{
                sm: 'center',
                lg: 'left'
              }}
              justifyContent="center"
              alignItems="center"
            >
              <chakra.h1
                fontSize={{
                  base: '4xl',
                  sm: '5xl',
                  md: '6xl'
                }}
                letterSpacing="tight"
                lineHeight="short"
                fontWeight="extrabold"
                color="gray.900"
                _dark={{
                  color: 'white'
                }}
              >
                <chakra.span
                  display={{
                    base: 'block',
                    xl: 'inline'
                  }}
                >
                  Maximize Returns{' '}
                </chakra.span>
                <chakra.span
                  display={{
                    base: 'block',
                    xl: 'inline'
                  }}
                  color="brand.600"
                  _dark={{
                    color: 'brand.400'
                  }}
                >
                  Minimize Risks
                </chakra.span>
              </chakra.h1>
              <chakra.p
                mt={{
                  base: 3,
                  sm: 5,
                  md: 5
                }}
                fontSize={{
                  sm: 'lg',
                  md: 'xl'
                }}
                maxW={{
                  sm: 'xl'
                }}
                mx={{
                  sm: 'auto',
                  lg: 0
                }}
                color="gray.500"
              >
                Get a chance to invest in high-growth early-stage startups
                vetted and accelerated by PedalStart. Offering attractive
                risk-adjusted returns.
              </chakra.p>
              <Box
                mt={{
                  base: 5,
                  sm: 8
                }}
                display={{
                  sm: 'flex'
                }}
                justifyContent={{
                  sm: 'center',
                  lg: 'start'
                }}
                fontWeight="bold"
                fontFamily="arial"
              >
                <Box rounded="full" shadow="md">
                  <Link href="works/ohlocal" target="blank">
                    <chakra.a
                      w="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      border="solid 1px transparent"
                      fontSize={{
                        base: 'md',
                        md: 'lg'
                      }}
                      rounded="lg"
                      color="white"
                      bg="#0C4CCF"
                      _hover={{
                        bg: 'brand.700'
                      }}
                      px={{
                        base: 8,
                        md: 10
                      }}
                      py={{
                        base: 3,
                        md: 4
                      }}
                      cursor="pointer"
                    >
                      Invest Now
                    </chakra.a>
                  </Link>
                </Box>
                {/* <Box mt={[3, 0]} ml={[null, 3]}>
<chakra.a
w="full"
display="flex"
alignItems="center"
justifyContent="center"
px={{
base: 8,
md: 10,
}}
py={{
base: 3,
md: 4,
}}
border="solid 1px transparent"
fontSize={{
base: "md",
md: "lg",
}}
rounded="md"
color="white"
bg="black"
_hover={{
bg: "brand.200",
}}
cursor="pointer"
>
Upcoming Opportunities
</chakra.a>
</Box> */}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        position={{
          lg: 'absolute'
        }}
        top={{
          lg: 0
        }}
        bottom={{
          lg: 0
        }}
        right={{
          lg: 0
        }}
        w={{
          lg: '50%'
        }}
        border="solid 1px transparent"
      >
        <Image
          //h={[56, 72, 96, "full"]}
          w="full"
          fit="contain"
          src="./images/hero.svg"
          alt=""
          loading="lazy"
        />
      </Box>
    </Box>
  )
}
