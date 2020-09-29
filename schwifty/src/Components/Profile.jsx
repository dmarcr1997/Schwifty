import React, {Component} from 'react';
import { Grid, Image, Text,Heading, Stack, Box } from "@chakra-ui/core";
import { connect } from 'react-redux';
class Profile extends Component{

    async componentDidMount(){
        this.props.setLinks(['/home', '/message'])
        
    }

    render(){
        return(
            <Stack align='center' justify='center'> 
                <Grid bg='#69AD53' borderRadius={10} w='70%' templateColumns="repeat(3, 1fr)" p={5} gap={8}>
                    <Stack><Text> </Text></Stack>
                    <Stack isInline w='100%' align='center'>
                        <Heading as='h1' fontSize='2xl'>{this.props.name}</Heading>
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
                    <Stack  left='5' bg='black' color='white' borderRadius={10} w='100%'>
                        {this.props.posts.map(p =>  <Box size='xl' color='black' bg='gray.100'><Heading as='h2'>Post from:{p.createdAt.split('T')[0]}</Heading><Text id={p._id} fontSize='xl' w='100%' size='md'>{p.content}</Text></Box>)}  
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
        status: state.user.status,
        posts: state.user.posts
    })
}

export default connect(mapStateToProps)(Profile);