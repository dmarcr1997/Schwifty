import React from 'react';
import { Grid, Flex, Box, Image, Text,Heading } from "@chakra-ui/core";
import PortalGun from '../media/portalGun.jpg';
function Feed(){
    return(
        <Grid w='100%' h='100%' color='white' templateColumns="repeat(3, 1fr)" gap={6}>
            <Flex align="center" justify="center" w='100%' bg='gray.800'>
                <Box w='80%'>
                    <Heading as='u'>People</Heading>
                    <Flex w='100%'>
                        <Text>Hi</Text>
                    </Flex>
                </Box>
            </Flex>
            <Flex align="center" justify="center" w='100%' bg='gray.800'>
                <Box w='80%'>
                    <Heading as='u'>Content</Heading>
                    <Text>Hi</Text>
                </Box>
            </Flex>
            <Flex align="center" justify="center" w='100%' bg='gray.800'>
                <Box w='80%'>
                    <Heading as='u'>Images</Heading>
                    <Text>Hi</Text>
                </Box>
            </Flex>
            
        </Grid>
    )
}

export default Feed;