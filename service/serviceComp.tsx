import Image from 'next/image'
import {
    Box,
    Flex,
    Text,
    Heading,
    SimpleGrid,
    Container,
    SlideFade,

    FormControl,
    FormLabel,
    CircularProgress,

    Button,
    Input,

    Textarea,

    useColorModeValue,
    useToast
    
} from "@chakra-ui/react";
import emailjs from 'emailjs-com';
import React from 'react';
import Popup from 'reactjs-popup';
import { useState } from 'react';

import Parallax from '../components/Parallax/index'
import { services } from '../service/serviceItems'
import { IoLogoGithub } from 'react-icons/io'
import type { NextPage } from 'next'
import NextLink from 'next/link'



export default function ServiceComp () {

    

    const toast = useToast();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [project, setProject] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const clearInput = () => {
        setName('');
        setEmail('');
        setMessage('');
        setIsLoading(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsLoading(true);

        emailjs.send("service_asdf", "asdf_email_template", {
            from_firstname: name,
            from_lastname: name,
            from_email: email,
            from_location: location,
            message: message,
        }).then((result) => {
            clearInput();

            toast({
                title: 'Email sent.',
                description: 'You had successfully sent the email. We will respond within the next 24 hours!',
                status: 'success',
                duration: 9000,
                isClosable: true
            })

        }, (error) => {
            clearInput();

            toast({
                title: 'Email not sent.',
                description: error.text,
                status: 'error',
                duration: 9000,
                isClosable: true
            })
        });
    }

    return(
<SimpleGrid columns={[1, 2, 2,]} mt={5}>
    {services.map((service, key) => (
        <Parallax key={key}>
             <Box className='border-2 '
           
             backgroundColor={'blue.800'}
            p={4} display={{ md: "flex",  }} borderWidth={1}  rounded={'3px'}
            _hover={{
                borderColor: "orange.500",
            }}
        > 
              <Flex
                alignItems="center" justifyContent="space-around" direction={{ base: 'column', md: 'row' }}
            >

                <Flex flexDirection="column"  >

                <Heading 
         marginBottom={2}
         fontSize={{ base: '20px', md: '20px', lg: '25px' }}
         fontWeight='semibold'
         fontFamily='sfprodisplaybold'
         color={'white'}
  
                 >
                    {service.name} 
                    </Heading>
                    <Box 
                    marginTop="2px"
                   
                    textAlign={'center'}
                    borderRadius="5px"
                    backgroundColor={'gray.50'}
                    borderColor={'orange.500'}
                    borderWidth="2px"
                    marginBottom="5px"
                    fontSize={'md'}
                    className='shadd'
                    
              
                    >
                      

                        
                    <NextLink
                    
                     href={service.summary_path}  passHref scroll={false}>
                    <button 
     
                  aria-label='Github'
                >
                    <Heading  fontSize={'md'}
                    
                    textColor={'gray.700'}
                    letterSpacing={'wide'}
                    fontFamily="sfprodisplayregular" >Learn More →</Heading>
                    </button>
                    </NextLink>

                        </Box>
                        <Box 
                   marginTop="2px"
                   width={'1/2'}
                   textAlign={'center'}
                   borderRadius="5px"
                   backgroundColor={'gray.50'}
                   borderColor={'orange.500'}
                   borderWidth="2px"
                   className='shadd'
                   >
                    
                      <Popup trigger={ 
        <button
            aria-label='Github'
        >
            <Heading 
                fontSize={'md'}
                textColor={'gray.700'}
                letterSpacing={'wide'}
                fontFamily="sfprodisplayregular" >Request Quote</Heading>
        </button>} 
            position="top center">
                <Box my={4}  className='popup' p={1} borderWidth={'3px'} borderColor={'blue.800'} textAlign="left">
                                    <form onSubmit={handleSubmit}>

                                        <FormControl  isRequired>
                                            <FormLabel  textColor={'black'}   fontFamily='sfprodisplayregular' key={'name'}>Full Name</FormLabel>
                                            <Input
                                                id='name'
                                                type={'text'}
                                                value={name}
                                                placeholder="First Name"
                                                marginLeft={1}
                                                borderRadius={'6px'}
                                                size="xs"
                                                width={'45%'}
                                                onChange={event => setName(event.currentTarget.value)}
                                                backgroundColor={'gray.100'}
                                                
                                            />
                                            
                                              <Input
                                                id='name'
                                                type={'text'}
                                                value={name}
                                                placeholder="Last Name"
                                                marginLeft={5}
                                                borderRadius={'6px'}
                                                size="xs"
                                                width={'45%'}
                                                onChange={event => setName(event.currentTarget.value)}
                                                backgroundColor={'gray.100'}
                                            />
                                        </FormControl>
                                        <FormControl isRequired mt={6}>
                                            <FormLabel  textColor={'black'}  fontFamily='sfprodisplayregular' key={'Location'}>Where you are located</FormLabel>
                                            <Input
                                                id='location'
                                                type={'location'}
                                                value={location}
                                                placeholder='Address'
                                                size="sm"
                                                borderRadius={'6px'}
                                                marginLeft={2}
                                                width={'95%'}
                                                onChange={event => setLocation(event.currentTarget.value)}
                                                backgroundColor={'gray.100'}
                                            />
                                        </FormControl>
                                        <FormControl isRequired mt={6}>
                                            <FormLabel textColor={'black'}  fontFamily='sfprodisplayregular' key={'Project'}>What service(s) are you looking for</FormLabel>
                                            <Input
                                                id='project'
                                                type={'project'}
                                                value={project}
                                                placeholder='Type of project'
                                                size="sm"
                                                borderRadius={'6px'}
                                                width={'95%'}
                                                marginLeft={2}
                                                onChange={event => setProject(event.currentTarget.value)}
                                                backgroundColor={'gray.100'}
                                            />
                                        </FormControl>
                                        <FormControl isRequired mt={6}>
                                            <FormLabel  textColor={'black'}   fontFamily='sfprodisplayregular' key={'email'}>Email</FormLabel>
                                            <Input
                                                id='email'
                                                type={'email'}
                                                value={email}
                                                placeholder='Email'
                                                marginLeft={2}
                                                size="sm"
                                                borderRadius={'6px'}
                                                width={'95%'}
                                                onChange={event => setEmail(event.currentTarget.value)}
                                                backgroundColor={'gray.100'}
                                            />
                                        </FormControl>
                                        <FormControl isRequired mt={6}>
                                            <FormLabel  textColor={'black'}  fontFamily='sfprodisplayregular' key={'message'}>Additional details and when you are available</FormLabel>
                                            <Input
                                                id='message'
                                                type={'text'}
                                                value={message}
                                                placeholder="Type your message..."
                                                borderRadius={'6px'}
                                                size="sm"
                                                marginLeft={2}
                                                width={'95%'}
                                                onChange={event => setMessage(event.currentTarget.value)}
                                                backgroundColor={'gray.100'}
                                            />
                                        </FormControl>
                                        <Button
                                            variant="solid"
                                            type="submit"
                                            width="full"
                                            backgroundColor={'blue.800'}
                                            mt={8}
                                            isLoading={isLoading}
                                            loadingText='Submitting'
                                            textColor={'white'}
                                            className='gla'
  
                                        >
                                            Send Message
                                        </Button>
                                    </form>
                                </Box>
              </Popup>
                    
                   </Box>

                   <div>
    
    
  </div>
                
     
       </Flex>
       </Flex>
         </Box>
        </Parallax>
        
    ))}
</SimpleGrid>
    )
    }