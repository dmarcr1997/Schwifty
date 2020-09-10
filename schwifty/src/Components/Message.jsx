import React from 'react';
import { Stack, Flex, Grid, Box, Image, Text,Heading, Textarea, Button, Icon } from "@chakra-ui/core";

function Message(props){
    return(
        <Grid w='100%' templateColumns="repeat(3, 1fr)">
        <Stack><Text>    </Text></Stack>
        <Stack p={5} borderRadius={10} align='center' bg='gray.800' w='100%'>
            <Heading color='white'>Message To User</Heading><br/>
            <Grid align="center" justify="center" w='100%' templateColumns="repeat(2, 1fr)">
                <Flex align="center" justify="center">
                    <Image borderRadius={10} size='xl' src="https://rickandmortyapi.com/api/character/avatar/16.jpeg" alt='amish'/>
                </Flex>
                <Flex>
                    <Image borderRadius={10} size='xl' src="https://rickandmortyapi.com/api/character/avatar/154.jpeg" alt='hamurai'/>
                </Flex>
            </Grid><br/>
            <Grid align="center" justify="center" w='100%' align="center" justify="center" templateColumns="repeat(1, 1fr)">
                <Box borderRadius={10} bg='white'><Icon name="arrow-right" color='green.400' /><Text fontSize='lg'>Message1</Text></Box><br/>
                <Box borderRadius={10} bg='white'><Icon name="arrow-left" color='green.600'/><Text fontSize='lg'>Message2</Text></Box><br/>
                <Box borderRadius={10} bg='white'><Icon name="arrow-right" color='green.400'/><Text fontSize='lg'>Message3</Text></Box><br/>
                <Box borderRadius={10}><Textarea w='97%' placeholder="New Message"/></Box><br/>
                <Box><Button border='none' borderRadius={10} bg='#69AD53' color= '#C1F762'>Send Message</Button></Box>
            </Grid>
        </Stack>
        <Stack><Text>   </Text></Stack>    
        </Grid>
    )
}

export default Message;