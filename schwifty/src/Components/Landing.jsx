import React, {Component} from 'react';
import { Grid, Box, Image, Text,Heading } from "@chakra-ui/core";
import portal from '../media/portalRM.png';
import { connect } from 'react-redux';
import { getUser } from '../Actions/PersonActions';

class Landing extends Component {
    render(){
      return (
        <Grid w='100%' h= '100%' templateColumns="repeat(3, 1fr)">
    
          <Box bg='black' w='100%' color='#314E1C'>
            <Heading color='white' as='h1' size='2xl'>
              Portal Landing
            </Heading>
            <Text as='b' fontSize='3xl'>
              Me irresponsible? All I wanted was for you to hand me a screwdriver! But instead you had me buckle down and make you a roofie juice serum, so you can roofie that poor girl at your school. W-w-w-w--are you kidding me, Morty?! You're really gonna try to take the high road on this one? Y'know your-you're a little creep, Morty! Your-your-your-you're just a little creepy creep person! This is it, Morty! It's full circle from the pilot! Full circle! … 
            </Text>
          </Box>
          
        
          <Box bg='black' w='100%' color='#314E1C'>
            <Image size='100%' onClick={() => {
              this.props.getUser()
              this.props.goToHomePage()
              }} src={portal} alt='portal'/>
          </Box>
          <Box w='100%' bg='black' color='#314E1C'>
            <Text as='b' fontSize='3xl'>
            Oh, I guess we, uh… I guess we both just had to take a shit. That, out there. That's my grave. On one of our adventures Rick and I basically destroyed the whole world. So we bailed on that reality and we came to this one. Because in this one the world wasn't destroyed. And in this one, we were dead. So we came here a-a-and we buried ourselves and we took their place. And every morning, Summer, I eat breakfast 2 Lookin' good! Well I don't like your unemployed genes in my grandchildren, Jerry. Rikitikitavi, bitch! Well, she's my daughter, Summer. I outrank you. Or, family means nothing, in which case, don't play that card. I couldn't hear you over my own screaming. We've talked about this!
            </Text>
          </Box>
        </Grid>
      );
    }
}
const mapStateToProps = state => {
  return
}
const mapDispatchToProps = dispatch => {
  return{
    getUser: () => dispatch(getUser())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Landing)  