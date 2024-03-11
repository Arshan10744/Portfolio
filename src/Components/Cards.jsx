import React from 'react';
import Project1 from '../Images/project1.png';
import Project2 from '../Images/plantsProject.PNG';
import Project3 from '../Images/gymProject.PNG';
import { Box, Flex, Image, VStack, Heading, Text, Button } from '@chakra-ui/react';

const cardData = [
    {
        ig : Project3,
        heading : 'Fitness Club',
        text : 'As a passionate and skilled web developer, I took on the exciting challenge of creating a dynamic and engaging fitness website.'
    },
    {
      ig : Project2,
      heading : 'Planto',
      text : `Immerse in the beauty of nature! My ReactJS plant selling web project 'Planto' brings greenery to your fingertips effortlessly.`
    },
]
const Cards = () => {
  return (
    <Flex flexWrap='wrap' gap='30px' justifyContent='center' my='20px'>
      {cardData.map((data)=>{
        return(
            <VStack w='48%'  borderRadius='30px' bgColor='black' border='1px solid red'>
                <Image src={data.ig} h='330px' w='100%' objectFit='fit' borderTopRadius='30px'/>
                <Heading color='#fff' mt='20px'>{data.heading}</Heading>
                <Text color='#fff' fontSize='10px' mt='10px' px='78px' textAlign='justify'>
                  {data.text}
                </Text>
                <Button py='25px' my='20px' mb='30px' px='40px' bgColor='#00AAFF' borderRadius='30px' border={0}>
                  Visit Site
                </Button>
            </VStack>
        )
      })}
    </Flex>
  )
}

export default Cards
