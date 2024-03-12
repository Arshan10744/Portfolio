import { Flex, Heading, Text, Box, ListItem, UnorderedList } from '@chakra-ui/react';
import React from 'react'

const exp = [
    {
        text : `Associate Software Engineer`, 
        Comapnay: `Geeky Bugs`,
        Date : `January, 2024 - Present`
    },
    {
        text : `Frontend Developer`, 
        Comapnay: `Beyond Logics INC.`,
        Date : `June, 2023 - Dec 2023`    },
    
    
]
const Experience = () => {
  return (
    <Flex  h='552px' w='100%' flexDirection='column' className='paddinglr' id='experience'>
      <Heading fontSize='48px' fontWeight={700} mt='38px' mb='81px' textAlign='center'> Experience </Heading>
      <UnorderedList>
      <Flex flexWrap='wrap' justifyContent='space-evenly'  flexDirection='row'>

        {exp.map((value)=>{

            return(
                <ListItem>
                    <Box display='inline'>
                    <Text fontSize="40px" fontWeight={600}>{value.text}</Text>
                    <Text fontSize="40px" fontWeight={200}>{value.Comapnay}</Text>
                    <Text fontSize="40px" fontWeight={200}>{value.Date}</Text>
                    </Box>
                </ListItem>
            )
        })}

      </Flex>
      </UnorderedList>
    </Flex>
  )
}

export default Experience;
