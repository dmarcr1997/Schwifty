import React, {Component} from 'react';
import { Grid, Flex, Box, Collapse, Text, Heading, Button} from "@chakra-ui/core";
import PortalGun from '../media/portalGun.jpg';
class Feed extends Component{

    state = {
        show: false
    }

    componentDidMount(){
        this.props.setLinks(['/user', '/message'])
    }

    handleToggle = () => {
        let sh = !this.state.show
        this.setState({
            show: sh
        })
    }

    render(){
        return(
            <>
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
            </Grid><br/>
            <Grid w='100%' color='white' templateColumns="repeat(1 1fr)" gap={6}>
                <Flex w='100%' align="center" justify="center">
                    <Collapse  bg='#69AD53' color= '#C1F762' isOpen={this.state.show}>
                        <Heading as='u'>Schwifty @2020</Heading>
                        <Text>No jumping in the sewer! Principal Vagina here, don't let the name fool you; I'm very much in charge. Reminding you that tonight is our annual flu season dance. I don't know how many times I have to say this, but if you have the flu, stay home. The flu season dance is about awareness, not celebration. You don't bring dead babies to Passover. I'd like to order one large person with extra people please. white people, no no no black people... and hispanic on half. Where do you want to die?</Text>
                    </Collapse>
                </Flex>
            </Grid>
            <Button size='sm' onClick={() => this.handleToggle()} mt='1rem'>Show {this.state.show ? "Less" : "More"}</Button>
            </>
        )
    }
}

export default Feed;