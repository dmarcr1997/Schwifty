import React from 'react';
import { NavLink } from 'react-router-dom';

import {
    Button,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure
} from "@chakra-ui/core";
function Navigation(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    function capitalize(word){
        debugger
        return word.charAt(1).toUpperCase() + word.slice(2);
    };

    return (
      <>
        <Button variantColor='green' color='white' onClick={onOpen}>
          NavLinks
        </Button>
        <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Navigation</DrawerHeader>
            <DrawerBody>
                {props.links.map(link => <Button variantColor='green' color='white'><NavLink to={`${link}`} exact>{capitalize(link)}</NavLink></Button>)}  
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  }
  export default Navigation;