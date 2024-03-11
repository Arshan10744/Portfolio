import React from 'react';
import Twitter from '../Images/mdi_twitter.svg';
import Facebook from '../Images/ri_facebook-fill.svg';
import Linkedin from '../Images/ri_linkedin-fill.svg';
import { Image } from '@chakra-ui/react';
import { HStack, Text } from '@chakra-ui/react'
import {Link} from 'react-scroll';

const Header = () => {
  return (
    <HStack alignItems='center' justifyContent='space-between' w="100%" h = "84px"
     bgColor="#1D1D1D" className='paddinglr'>
      <Text fontSize='32px' color='#00AAFF' fontWeight='800px'> Arshan Mudassar Yousaf </Text>
      <HStack className='nav-items' spacing='20px'>
        <Link to="main" smooth={true} duration={500}>Home</Link>
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="experience" smooth={true} duration={500}>Experience</Link>
        <Link to="projects" smooth={true} duration={500}>Portfolio</Link>
        {/* <Link to="services" smooth={true} duration={500}>Services</Link> */}
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </HStack>
      <HStack className='social-icons' spacing='20px'>
        <Link className='social-icons'>
          <Image src={Twitter} alt="Twiiter Logo" />
        </Link>
        <Link className='social-icons'>
        <Image src={Facebook} alt="Facebook Logo" />
        </Link>
        <Link className='social-icons'>
        <Image src={Linkedin} alt="Linkedin Logo" />
        </Link>
      </HStack>
    </HStack>
  )
}

export default Header
