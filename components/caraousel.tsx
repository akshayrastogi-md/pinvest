import { Container, chakra, Box, Text } from '@chakra-ui/react'
import React, { useState, useEffect, useRef } from 'react'
import styled from '@emotion/styled'

const CarouselWrapper = styled.div`
  background-color: #6495ed33;
  padding-top: 40px;
  padding-bottom: 80px;
  h2 {
    color: white;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`

const CarouselContainer = styled.div`
  width: min(80%, 90%);
  scroll-behavior: smooth;
  overflow: hidden;
  gap: 2.25rem;
  scroll-snap-type: x;
  --tw-scroll-snap-strictness: mandatory;
  display: flex;
  position: relative;
  z-index: 0;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`

const Card = styled.div`
  width: min(100%, 330px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  align-content: stretch;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 15px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 1;

  button {
    width: 40px;
  }
`

const feebacks = [
  {
    content:
      'PedalStart did a phenomenal job at creating a platform for founders coming from such varied backgrounds and perspectives!',
    author: 'Kasturi Jha',
    organization: 'ZiffyHealth'
  },
  {
    content:
      'Best place to socialise with other cofounders & people with vision to build a better future!',
    author: 'Yajush Kalra',
    organization: 'ARMR Studio'
  },
  {
    content:
      'Got to learn a lot and mingle with some great individuals building great things.',
    author: 'Aaron',
    organization: 'Adooh'
  },
  {
    content:
      'Great experience and it was amazing meeting with the enthusiastic community!',
    author: 'Paras Botadra',
    organization: 'Unbox Innovations'
  },
  {
    content:
      "It's amazing to see how communities like Pedalstart help entrepreneurs. There is a fresh air of innovation in cities like Bangalore, where people have become more accepting of changing ideas.",
    author: 'Nayan Mishra',
    organization: 'Zillout'
  },
  {
    content:
      'Well organised event, met interesting startup founders solving remarkable problems.',
    author: 'Jishnu',
    organization: 'Healthmobis'
  },
  {
    content: 'It was a great platform to meet and connect with other startups.',
    author: 'Tasneem Vakil',
    organization: 'P2PCarz'
  }
]

export default function Caraousel() {
  const maxScrollWidth = useRef(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const carousel = useRef(null)
  const move = useRef(null)
  let isMobile = false;

  if (typeof window !== "undefined") {
    isMobile = window?.innerWidth < 767
  }

  const movePrev = () => {
    move.current = 'prev'
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1)
    }
  }

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth <= maxScrollWidth.current
    ) {
      move.current = 'next'
      setCurrentIndex(prevState => prevState + 1)
    }
    if (currentIndex) {
      carousel.current.scrollLeft = carousel.current.scrollLeft + 350
    } else {
      carousel.current.scrollLeft = carousel.current.offsetWidth + currentIndex
    }
  }

  const isDisabled = direction => {
    if (direction === 'prev') {
      return currentIndex <= 0
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      )
    }
    return false
  }

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      if (currentIndex) {
        const value = isMobile ? 330 : 360
        carousel.current.scrollLeft =
          move.current == 'next'
            ? carousel.current.scrollLeft + value
            : carousel.current.scrollLeft - value
      }
    }
  }, [currentIndex])

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0
  }, [])

  return (
    <CarouselWrapper>
      <Container
        maxWidth={{ base: '-moz-fit-content', sm: '90%' }}
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
          color="black.900"
          _dark={{
            color: 'black.100'
          }}
        >
          <chakra.span style={{'color':'#000'}} display="block">What Founders Say</chakra.span>
        </chakra.h2>

        <Box width={'full'} overflow={'hidden'} alignItems={'center'}>
          <Box
            position={'relative'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <ButtonWrapper>
              <button onClick={movePrev} disabled={isDisabled('prev')}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-20 -ml-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#000"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button onClick={moveNext}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-20 -ml-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#000"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </ButtonWrapper>
            <CarouselContainer ref={carousel}>
              {feebacks.map((feeback, index) => {
                return (
                  <Card key={index}>
                    <Text fontSize="14px" fontWeight="500">
                      <q>
                        <i>{feeback.content}</i>
                      </q>
                    </Text>
                    <Text mt={5} fontWeight="600" fontSize="14px" mb={0}>
                      {feeback.author}
                    </Text>
                    <Text fontSize="12px" fontWeight="600">
                      {feeback.organization}
                    </Text>
                  </Card>
                )
              })}
            </CarouselContainer>
          </Box>
        </Box>
      </Container>
    </CarouselWrapper>
  )
}
