import React from 'react';
import Project1 from '../Images/nftss.png';
import Project2 from '../Images/adminDashboard.png';
import { Link } from '@chakra-ui/react';

import { Box, Flex, Image, VStack, Heading, Text, Button } from '@chakra-ui/react';

const cardData = [
    {
        ig : Project1,
        heading : 'NFT Place',
        text : 'A Beautifully designed NFT marketplace, with bunch of features for its users. A user friendly platform for sale purchase of NFTs.',
        url: 'https://nft-marketplace-2xjs.vercel.app/'
    },
    {
      ig : Project2,
      heading : 'Justice Hub',
      text : 'Revolutionizing justice delivery by creating an FIR management system, which satifies all needs of a Police Station',
      url: 'https://justice-hub-puuh.vercel.app/'
    },
]
const Cards = () => {
  return (
    <Flex flexWrap='wrap' gap='30px' justifyContent='center' my='20px'>
      {cardData.map((data)=>{
        return(
            <VStack w='48%'  borderRadius='30px' bgColor='black' border='2px solid black'>
                <Image src={data.ig} h='330px' w='100%' objectFit='fit' borderTopRadius='30px'/>
                <Heading color='#fff' mt='20px'>{data.heading}</Heading>
                <Text color='#fff' fontSize='16px' mt='10px' px='78px' textAlign='justify'>
                  {data.text}
                </Text>
                <Button  py='25px' my='20px' mb='30px' px='40px' bgColor='#00AAFF' borderRadius='30px' border={0}>
                <a href={data.url}>Visit site</a>
                </Button>
            </VStack>
        )
      })}
    </Flex>
  )
}

export default Cards
