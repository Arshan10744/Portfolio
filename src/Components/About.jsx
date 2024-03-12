import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react'
import vector from '../Images/vectorIG.svg'

const About = () => {
  return (
    <Flex w='100%' h='500px' alignItems='center' className='paddinglr' gap='118px' id='about'>
      <Box w='45%'>
        <Image src={vector} alt="image" w='100%' h='248px' />
      </Box>
      <Box w='45%'>
        <Heading mb='8px' color='white' fontSize='18px'>About Me</Heading>
        <Text fontSize="20px" color= "white">
        I’m a recent Software Engineering graduate with expertise in designing, developing, and deploying web applications. Proficient in React, Node.js, JavaScript, Redux
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
