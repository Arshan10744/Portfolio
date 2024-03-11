import React from 'react';
import Vector2 from '../Images/vectorIG2.png'
import { Box, Flex, FormControl, Heading, Input, VStack, Image } from '@chakra-ui/react';

const Footer = () => {
  return (
    <VStack w='100%' h='600px' bgColor='#000' className='paddinglr' justifyContent='center' id='contact'>
      <Heading mb='60px' fontSize='48px' fontWeight={700}>Contact Us</Heading>
      <Flex w='100%' justifyContent='space-between' alignItems='center'>
      <Box w='45%'>
        <FormControl display='flex' flexDirection='column' gap='35px'>
            <Input type='text' placeholder='Full Name' className='input'/>
            <Input type='email'placeholder='E-mail' className='input'/>
            <Input type='text'placeholder='Message' className='input'/>
            <Input type='submit' bgColor='#FFFFFF' color='#17153D' borderRadius='48px'/>
        </FormControl>
      </Box>
      <Box w='45%'>
        <Image src = {Vector2} h='339px' w='100%'/>
      </Box>
      </Flex>
    </VStack>
  )
}

export default Footer
