import React from 'react';
import { Container, Button } from '@material-ui/core';
import portal from './portalRM.png';
const containStyle = {
  backgroundColor:'#000000',
  borderRadius: '1em',
  color: '#314E1C',
  fontSize: '2.5em'
}

const buttonStyle = {
  float: 'right'
}

function App() {
  return (
    <Container maxWidth='xl' style={containStyle}>
       <Button style={buttonStyle}><img src={portal} alt='portal'/></Button>
      <p>
      Well I don't like your unemployed genes in my grandchildren, Jerry. Rikitikitavi, bitch! Well, she's my daughter, Summer. I outrank you. Or, family means nothing, in which case, don't play that card. I couldn't hear you over my own screaming. We've talked about this!
      </p>
      <p>
      Me irresponsible? All I wanted was for you to hand me a screwdriver! But instead you had me buckle down and make you a roofie juice serum, so you can roofie that poor girl at your school. W-w-w-w--are you kidding me, Morty?! You're really gonna try to take the high road on this one? Y'know your-you're a little creep, Morty! Your-your-your-you're just a little creepy creep person! This is it, Morty! It's full circle from the pilot! Full circle! … Oh, I guess we, uh… I guess we both just had to take a shit. That, out there. That's my grave. On one of our adventures Rick and I basically destroyed the whole world. So we bailed on that reality and we came to this one. Because in this one the world wasn't destroyed. And in this one, we were dead. So we came here a-a-and we buried ourselves and we took their place. And every morning, Summer, I eat breakfast 2 Lookin' good!
      </p>
     
    </Container>
  );
}

export default App;
