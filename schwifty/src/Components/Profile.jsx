import React, {Component} from 'react';
import { Grid, Image, Text,Heading, Stack } from "@chakra-ui/core";
import { connect } from 'react-redux';
class Profile extends Component{
    state={
        text: []
    }

    async componentDidMount(){
        this.props.setLinks(['/home', '/message'])
        
    }

    render(){
        return(
            <Stack align='center' justify='center'> 
                <Grid bg='#69AD53' borderRadius={10} w='70%' templateColumns="repeat(3, 1fr)" p={5} gap={8}>
                    <Stack><Text> </Text></Stack>
                    <Heading as='h1' fontSize='2xl'>{this.props.name}</Heading>
                    <Stack isInline w='100%' align='center'>
                        <Image border='5px white solid' size='xl' src={this.props.image} alt='turle'/>
                        <Text border='5px white solid' bg='black' as='b' fontSize='2em' color='#314E11' size='xl'>
                            status: {this.props.status}<br/>
                            species: {this.props.species}<br/>
                            type: {this.props.type}<br/>
                            gender: GET LATER<br/>
                        </Text>
                    </Stack>
                    <Stack><Text> </Text></Stack>
                    <Stack><Text> </Text></Stack>
                    <Stack  bg='black' color='white' borderRadius={10} isInline w='100%' align='center'>
                        <Text id='text1' size='xl'>
                            {this.state.text[0]}
                        </Text>
                        <Text id='textid' size='xl'>
                            {this.state.text[1]}
                        </Text>
                    </Stack>
                    <Stack><Text> </Text></Stack>
                </Grid>
            </Stack>
        )
    }
}

const mapStateToProps = state => {
    return({
        name: state.user.name,
        type: state.user.type,
        species: state.user.species,
        image: state.user.image,
        location: state.user.location,
        status: state.user.status
    })
}

export default connect(mapStateToProps)(Profile);