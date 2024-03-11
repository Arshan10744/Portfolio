import { Flex, Heading, Text, Box, ListItem, UnorderedList } from '@chakra-ui/react';
import React from 'react'

const exp = [
    {
        text : `Associate Software Engineer | Frontend`, 
        Comapnay: `Geeky Bugs`,
        Date : `Feb, 2024 - Present`
    },
    {
        text : `Trainee Software Engineer`, 
        Comapnay: `Freelancer, US Upwork`,
        Date : `June, 2023 - Dec 2023`    },
    {
        text : `Software Engineer Intern | Frontend`, 
        Comapnay: `Cedar Financial`,
        Date : `Jan 2023 - Feb 2023`    },

    
]
const Experience = () => {
  return (
    <Flex bgColor='#000' h='552px' w='100%' flexDirection='column' className='paddinglr' id='experience'>
      <Heading fontSize='48px' fontWeight='700px' mt='38px' mb='81px' textAlign='center'> Experience </Heading>
      <UnorderedList>
      <Flex flexWrap='wrap' justifyContent='space-between' gap='38px' flexDirection='column'>

        {exp.map((value)=>{

            return(
                <ListItem>
                    <Box display='inline'>
                    <Text fontWeight={600}>{value.text}</Text>
                    <Text fontWeight={200}>{value.Comapnay}</Text>
                    <Text fontWeight={200}>{value.Date}</Text>
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
