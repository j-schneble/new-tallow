import React, { useState } from 'react';
import {
    Container,
    SlideFade,
    Box,
    FormControl,
    FormLabel,
    CircularProgress,
    Flex,
    Button,
    Input,
    Heading,
    Textarea,
    Text,
    useColorModeValue,
    useToast
} from '@chakra-ui/react';

import Head from 'next/head';

import { init } from 'emailjs-com';
import emailjs from 'emailjs-com';

const Contact = () => {

    

    const toast = useToast();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
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
            from_name: name,
            from_email: email,
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

    return (
         

            <div className='flex items-center text-center justify-evenly '>
               
                    <SlideFade in offsetX={80}>
                        <div className='flex items-center text-center justify-evenly bg-zinc-950'>
                            <div className='rounded-sm bg-white/90'
                              
                             
                               
                              
                            >
                            <div className='flex items-center my-4 mb-4 text-xl text-center text-white font-sfprodisplayregular'>
                            <h1  >Have any questions or would like to discuss a project that you are undertaking? </h1>
                            </div>

                               
                                <div className='px-6 py-6 my-4 text-left bg-zinc-950' >
                                    <form onSubmit={handleSubmit}>

                                        <FormControl isRequired>
                                            <FormLabel textColor={'gray.500'}  fontFamily='sfprodisplayregular' key={'name'}>Full Name</FormLabel>
                                            <Input
                                                id='name'
                                                type={'text'}
                                                value={name}
                                                placeholder="Your Name"
                                                borderRadius={'2px'}
                                                marginLeft={6}
                                                marginTop={4}
                                                paddingTop={4}
                                                paddingBottom={4}
                                                size="sm"
                                                width={'95%'}
                                                onChange={event => setName(event.currentTarget.value)}
                                                backgroundColor={'gray.100'}
                                            />
                                        </FormControl>
                                        <FormControl isRequired mt={6}>
                                            <FormLabel textColor={'gray.500'}  fontFamily='sfprodisplayregular' key={'email'}>Email</FormLabel>
                                            <Input
                                                id='email'
                                                type={'email'}
                                                value={email}
                                                placeholder='Email'
                                                size="sm"
                                                marginTop={4}
                                                marginLeft={6}
                                                paddingTop={4}
                                                paddingBottom={4}
                                                borderRadius={'2px'}
                                                width={'95%'}
                                                onChange={event => setEmail(event.currentTarget.value)}
                                                backgroundColor={'gray.100'}
                                            />
                                        </FormControl>
                                        <FormControl isRequired mt={6}>
                                            <FormLabel textColor={'gray.500'}  fontFamily='sfprodisplayregular' key={'message'}>Message</FormLabel>
                                            <Textarea
                                                id='message'
                                                type={'text'}
                                                marginTop={4}
                                                value={message}
                                                placeholder="Type your message..."
                                                borderRadius={'2px'}
                                                marginLeft={6}
                                                paddingTop={4}
                                                paddingBottom={4}
                                                size="sm"
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
                                            marginLeft={6}
                                                paddingTop={4}
                                                marginTop={4}
                                                paddingBottom={4}
                                            loadingText='Submitting'
                                            textColor={'white'}
                                            className='gla'
  
                                        >
                                            Send Message
                                        </Button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </SlideFade>
            
            </div>
  
    )
}

export default Contact;