import { HStack, Heading, VStack,Button, Flex } from '@chakra-ui/react';
import React from 'react'
import Cards from './Cards';

const Projects = () => {
  return (
    <VStack alignItems='center' className='paddinglr' mt='30px' mb='138px' id='projects'>
      <Heading fontSize='48px' color='#fff' fontWeight={700} mt='20px'>Projects</Heading>
        <Button py='25px' px='54px' my='10px' borderRadius='30px' bgColor='#00AAFF' border={0}>
            Website Development
        </Button>      
        <Cards/>

    </VStack>
  )
}

export default Projects;
