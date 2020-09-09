import React from 'react';
import { Stack, Flex, Grid, Box, Image, Text,Heading, Textarea, Button } from "@chakra-ui/core";

function Message(props){
    return(
        <Grid w='100%' templateColumns="repeat(3, 1fr)">
        <Stack><Text>    </Text></Stack>
        <Stack p={2} borderRadius={10} align='center' bg='black' w='100%'>
            <Heading color='white'>Message To User</Heading><br/>
            <Grid align="center" justify="center" w='100%' templateColumns="repeat(2, 1fr)">
                <Flex align="center" justify="center">
                    <Image size='xl' src="https://rickandmortyapi.com/api/character/avatar/16.jpeg" alt='amish'/>
                </Flex>
                <Flex>
                    <Image size='xl' src="https://rickandmortyapi.com/api/character/avatar/154.jpeg" alt='hamurai'/>
                </Flex>
            </Grid><br/>
            <Grid align="center" justify="center" w='100%' align="center" justify="center" templateColumns="repeat(1, 1fr)">
                <Box bg='grey'><Text>Message1</Text></Box><br/>
                <Box bg='grey'><Text>Message2</Text></Box><br/>
                <Box bg='grey'><Text>Message3</Text></Box><br/>
                <Box><Textarea w='80%' placeholder="New Message"/></Box><br/>
                <Box><Button>Send Message</Button></Box>
            </Grid>
        </Stack>
        <Stack><Text>   </Text></Stack>    
        </Grid>
    )
}

export default Message;