import React from 'react';
import { Grid, Image, Text,Heading, Stack } from "@chakra-ui/core";

function Profile(){

    return(
        <Stack align='center' justify='center'> 
            <Grid bg='#69AD53' borderRadius={10} w='70%' templateColumns="repeat(3, 1fr)" p={5} gap={8}>
                <Stack><Text> </Text></Stack>
                <Stack isInline w='100%' align='center'>
                    <Image border='5px white solid' size='xl' src="https://rickandmortyapi.com/api/character/avatar/580.jpeg" alt='turle'/>
                    <Text border='5px white solid' bg='black' as='b' fontSize='2em' color='#314E11' size='xl'>
                        id: 580<br/>
                        name: Secret Service Snake<br/>
                        status: Alive<br/>
                        species: Animal<br/>
                        type: Snake<br/>
                        gender: Male<br/>
                    </Text>
                </Stack>
                <Stack><Text> </Text></Stack>
                <Stack><Text> </Text></Stack>
                <Stack  bg='black' color='white' borderRadius={10} isInline w='100%' align='center'>
                    <Text id='text1' size='xl'>
                        In the U.S., you can make your own food, including shrimp and cheese.

                        In the U.S. we'll also offer shrimp dishes to the public.

                        One example is a crab or shrimp braised beef.

                        For a chicken or chicken? Check.

                        But I like seafood more for breakfast out. The seafood? You won't get it unless you have a good meal, but even a one in three will serve us just fine.

                        One in six diners wants to go on a soggy week as a soup for the hungry.

                        In addition to "dog eating" eating, shrimp braises are a favorite in my household.

                        On the weekends, duckies are a favorite at the grocery store.

                        A little bit of turkey? Check.

                        Not for the hot dogs? Check.

                        Or something along those lines, too – the shrimp, lobster and turkey, as they are described here.

                        If you are hungry, take a bite out of that while watching television!

                        One in 10 Chinese tourists travels to the U.S. this year is in poor health.

                        This article originally appeared on dengue.net

                        Read More: The U.S. Food Food Stamp Program May Delay or Delay Food Stamp Recipients More By Bill Berkrot and Rumpelstit

                        23 September 2014
                    </Text>
                    <Text id='textid' size='xl'>
                        For the past month the Ukrainian military has been holed up in the besieged eastern city of Luhansk. Only an hour after Russian tanks had effectively surrounded Donetsk and Luhansk city streets, the Ukrainian army called in a new "line of defense" of their battalions and armor.

                        Paradoxically, it appears that the "rebels" have been gaining ground in the pro-Russian forces movement in Donetsk. The official Ukrainian propaganda mouthpiece SR, which is controlled by the pro-Russian "Sluty" Democratic Republics and the Russian "Russians" at national and regional levels, declares that the pro-Russian forces are now "blocking the so-called "Kiev government," from Kiev, and all other channels are watching the conflict with their "frozen conflict."

                        The release of this "series of "color revolutions" by the anti-Kiev government forces, "Maidan" and "democracy" as instigated by the government, provokes yet further accusations of dangerous and irresponsible thinking. Other reports suggest that the pro-Russian military are fighting for "national liberation."

                        The Russian Military is Militarily Responsible For Reset

                        In an effort to control the so-called war in eastern Ukraine a week ago, the Ukrainian military, observing the situation in the country at the Russian border, announced that it was in control of Luhansk airport by military officers.
                    </Text>
                </Stack>
                <Stack><Text> </Text></Stack>
            </Grid>
        </Stack>
    )
}

export default Profile;