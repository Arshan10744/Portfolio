import { Box, Flex, Text, Image, Button } from '@chakra-ui/react';
import React from 'react';
import HeroImage from '../Images/profilePhoto.png';
import ParticalsBG from './ParticalsBG';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <>
    <ParticalsBG/>
    <Flex className='hero-section paddinglr' alignItems='center' justifyContent='space-between' w = '100%' h='90vh' bgColor='rgba(0,0,0,0.7)'>
      <Box w='45%'>
        <Text fontSize='24px' fontWeight='400' letterSpacing='1.8px'>
          Hello, I’m
        </Text>
        <Text fontSize='48px' fontWeight='700' lineHeight='48px'>
          Arshan Mudassar Yousaf
        </Text>
        <Text fontSize='24px' fontWeight='400' letterSpacing='1.8px' color='#00AAFF'>
          Associate Software Engineer
        </Text>
        <Button px='32px' py='20px' mt='40px' borderRadius='40px' color='#0A183D'>
        <Link to="about" smooth={true} duration={500}>About</Link>
        </Button>
        
      </Box>
      <Box w='45%'>
        <Image src={HeroImage} alt="My Ig" h='100%' w='100%'/>
      </Box>
    </Flex>
    </>
  )
}

export default Hero;
