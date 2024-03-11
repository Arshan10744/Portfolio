import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react'
import vector from '../Images/vectorIG.svg'

const About = () => {
  return (
    <Flex w='100%' h='500px' alignItems='center' className='paddinglr' gap='118px' id='about'  bgColor='rgba(255,255,255,0.9)'>
      <Box w='45%'>
        <Image src={vector} alt="image" w='100%' h='248px' />
      </Box>
      <Box w='45%'>
        <Heading mb='8px' color='#1D1D1D' fontSize='32px'>About Me</Heading>
        <Text color='#747474'>
        I’m a recent Software Engineering graduate with exper￾tise in designing, developing, and deploying web appli￾cations. Proficient in React, Node.js, JavaScript, Redux
Toolkit, MongoDB, MySQL, and Git, I excel in both team
collaboration and independent work, ensuring projects
meet high standards of innovation and functionality.</Text>
        <Button padding='10px 25px' borderRadius='30px' bgColor='#00AAFF' color='#FFF' border={0} mt='40px'>
            Hire Me
        </Button>
      </Box>
    </Flex>
  )
}

export default About;
