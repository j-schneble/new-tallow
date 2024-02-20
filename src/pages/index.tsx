import Image from 'next/image'
import Container from '../../components/Container/index'
import React from 'react'
import Contact from '../../section/contact'
import { useRouter } from 'next/navigation';
import type { NextPage } from 'next';
import rates from '../../public/raa.png'
import hours from '../../public/hoo.png'
import {
    FormControl,
    FormLabel,
    Button,
    Input,
    useToast   
} from "@chakra-ui/react";
import emailjs from 'emailjs-com';
import Popup from 'reactjs-popup';
import { useState } from 'react';
import Link from 'next/link';

const Home: NextPage = () => {

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

    const handleSubmit = (e: { preventDefault: () => void; }) => {
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

  
  const router = useRouter();
  return (
    

<Container>

 
 <div className='mt-16'>
    <div className='flex items-center text-center justify-evenly'>
        <h1 className='font-semibold text-white text-8xl title-mob font-sfprodisplayregular'>Tallowhill <span className='text-emerald-600 bg-clip-text'>Home Services </span></h1>
    </div>
    <div className="flex items-center text-center">
      <h2 className="mt-8 text-3xl text-gray-400 ">
      We are a team of home improvement specialists, committed to delivering the highest quality service with a beautiful result four our customers. 
      </h2>
      </div>
 
 </div>
 <div className='flex items-center justify-center py-4 my-6 text-center mobileshow'>
   <p className='text-3xl font-light text-white font-sfprodisplayregular'>
              CALL US AT <span className='px-2 text-5xl font-medium text-orange-500 font-sfprodisplayregular'>(404)-402-4404</span>
            </p>
   </div>
 
          <div className='flex items-center justify-center mb-12 text-center border-b rounded-sm border-b-white/10 '>
             
                          
                
                  
 
             </div>
  
          <div className='px-2 mt-10 border-t min-w-max h-max border-black/10'>
            <div className='' >
            <div className='flex '>                             
                    <h1
                     className='pb-4 text-4xl tracking-wide text-emerald-600 section-title font-sfprodisplayregular'
                    >
                        Handyman Services 
                    </h1>
                </div>
            <div className='flex '>
                <h1 className='p-1 pl-2 mt-1 mb-4 ml-1 text-lg tracking-wider text-white border-l section-description font-sfprodisplaylight border-l-white/25'>
                <span className=''>Professional</span> and <span className=''>dependable </span>handyman service in Philadelphia and the surrounding region.
                </h1>                      
            </div>                  
            </div>
               
            <div className='grid grid-cols-3 p-4 mt-4 mb-10 rounded-md grid-mob '>
               <div
                className=
                'flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm grid-text bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '>  
                        <p className='handy-grid'>
                        TV Installation
                        </p>
                        </div>
                        <div
                    className=
                    'flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm grid-text bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '                     >  
                        <p className='handy-grid'>
                        TV Hanging  
                        </p>
                        </div>
                        <div
                      className=
                      'flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm grid-text bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '>  
                        <p className='handy-grid'>
                        Plaster Repair                
                        </p>
                        </div>
                        <div
                     className=
                     'flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm grid-text bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular ' >  
                        <p className='handy-grid'>
                       Ceiling Fans
                        </p>
                        </div>
                        <div className=
                        'flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm grid-text bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '>  
                        <p className='handy-grid'>
                       Hanging Artwork
                       </p>
                        </div>
                        <div className=
                        'flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm grid-text bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '>  
                        <p className='handy-grid'>
                        Shades                  
                        </p>
                        </div>
                        <div className=
                        'flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm grid-text bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '>  
                        <p className='handy-grid'>
                        Blinds                 
                        </p>
                        </div>
                        <div className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm grid-text bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular'>  
                        <p className='handy-grid'>
                        Wood Floor
                        </p>
                        </div>
                        <div className=
                        'flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm grid-text bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular ' >  
                        <p className='handy-grid'>
                        Drywall Repair
                        </p>
                         </div>
                        <div className=
                        'flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm grid-text bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '>  
                        <p className='handy-grid'>
                        Shelves
                        </p>
                        </div>
                        <div className=
                        'flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm grid-text bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '>  
                        <p className='handy-grid'>
                        Painting
                        </p>
                        </div>
                        <div className=
                        'flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm grid-text bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '>  
                        <p className='handy-grid'>    
                        Door Installation
                        </p>
                        </div>
                        <div className=
                        'flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm grid-text bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '>  
                        <p className='handy-grid'>
                        Plumbing
                        </p>
                        </div>
                        <div className=
                        'flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm grid-text bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '>  
                        <p className='handy-grid'>
                        Garbage Disposal
                        </p>
                        </div>
                        <div className=
                        'flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm grid-text bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '  >  
                        <p className='handy-grid'>
                        Carpentry
                        </p>
                        </div>
                        <div className=
                        'flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm grid-text bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '>  
                        <p className='handy-grid'>
                        Welding Repairs
                        </p>
                        </div>
                        <div className=
                        'flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm grid-text bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '>  
                        <p className='handy-grid'>
                        Furniture Assembly
                        </p>
                        </div>
                        <div className=
                        'flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm grid-text bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '>  
                        <p className='handy-grid'>
                        Power Washing
                        </p>
                        </div>                       
                </div>           
    <div className='grid items-center justify-center grid-cols-3 pb-20 mt-16 border-b hidden-grid border-b-white/25' >
    <div className='flex items-center justify-evenly'>
        <Image
              src={rates}
              width={300}
              height={300}
              quality="100"
              className=""
              alt='Summary image'
          />
</div>
<div className='flex items-center pb-20 mb-20 ml-1 text-center hidden-mobile justify-evenly '>
    <Popup trigger={ 
        <button
         aria-label='Github'>
         <div className='flex items-center px-4 py-3 text-center border rounded-md bg-zinc-950/50 border-white/10 justify-evenly'>
         <h1 className='text-lg text-emerald-600'
                     >
                        Request a Quote Today 
                 </h1>
         </div>
                
                 </button>} 
         position="top center">
             <div className='p-4 my-6 text-left border rounded-sm border-white/50 popup' >
                                 <form onSubmit={handleSubmit}>

                                     <FormControl  isRequired>
                                         <FormLabel  textColor={'white'}   fontFamily='sfprodisplayregular' key={'name'}>Full Name</FormLabel>
                                         <Input
                                             id='name'
                                             type={'text'}
                                             value={name}
                                             placeholder="First Name"
                                             marginLeft={6}
                                             paddingTop={4}
                                             paddingBottom={4}
                                             borderRadius={'2px'}
                                             size="xs"
                                             width={'45%'}
                                             onChange={event => setName(event.currentTarget.value)}
                                             backgroundColor={'gray.50'}
                                             
                                         />
                                         
                                           <Input
                                             id='name'
                                             type={'text'}
                                             value={name}
                                             placeholder="Last Name"
                                             marginLeft={6}
                                             paddingTop={4}
                                             paddingBottom={4}
                                             borderRadius={'2px'}
                                             size="xs"
                                             width={'45%'}
                                             onChange={event => setName(event.currentTarget.value)}
                                             backgroundColor={'gray.50'}
                                         />
                                     </FormControl>
                                     <FormControl isRequired mt={6}>
                                         <FormLabel  textColor={'white'}  fontFamily='sfprodisplayregular' key={'Location'}>Where you are located</FormLabel>
                                         <Input
                                             id='location'
                                             type={'location'}
                                             value={location}
                                             placeholder='Address'
                                             size="sm"
                                             borderRadius={'2px'}
                                             marginLeft={6}
                                             paddingTop={4}
                                             paddingBottom={4}
                                             width={'95%'}
                                             onChange={event => setLocation(event.currentTarget.value)}
                                             backgroundColor={'gray.50'}
                                         />
                                     </FormControl>
                                     <FormControl isRequired mt={6}>
                                         <FormLabel textColor={'white'}  fontFamily='sfprodisplayregular' key={'Project'}>What service(s) are you looking for</FormLabel>
                                         <Input
                                             id='project'
                                             type={'project'}
                                             value={project}
                                             placeholder='Type of project'
                                             size="sm"
                                             borderRadius={'2px'}
                                             marginLeft={6}
                                             paddingTop={4}
                                             paddingBottom={4}
                                             width={'95%'}
                                           
                                             onChange={event => setProject(event.currentTarget.value)}
                                             backgroundColor={'gray.50'}
                                         />
                                     </FormControl>
                                     <FormControl isRequired mt={6}>
                                         <FormLabel  textColor={'white'}   fontFamily='sfprodisplayregular' key={'email'}>Email</FormLabel>
                                         <Input
                                             id='email'
                                             type={'email'}
                                             value={email}
                                             placeholder='Email'
                                             borderRadius={'2px'}
                                             marginLeft={6}
                                             paddingTop={4}
                                             paddingBottom={4}
                                             size="sm"
                                           
                                             width={'95%'}
                                             onChange={event => setEmail(event.currentTarget.value)}
                                             backgroundColor={'gray.50'}
                                         />
                                     </FormControl>
                                     <FormControl isRequired mt={6}>
                                         <FormLabel  textColor={'white'}  fontFamily='sfprodisplayregular' key={'message'}>Additional details and when you are available</FormLabel>
                                         <Input
                                             id='message'
                                             type={'text'}
                                             value={message}
                                             placeholder="Type your message..."
                                            
                                             size="sm"
                                             borderRadius={'2px'}
                                             marginLeft={6}
                                             paddingTop={4}
                                             paddingBottom={4}
                                             width={'95%'}
                                             onChange={event => setMessage(event.currentTarget.value)}
                                             backgroundColor={'gray.50'}
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
                                         borderRadius={'2px'}
                                         marginLeft={6}
                                         paddingTop={4}
                                         paddingBottom={4}

                                     >
                                         Send Message
                                     </Button>
                                 </form>
                             </div>
           </Popup>
                 

             </div>
    
<div className='flex items-center justify-evenly'>
    <Image
        src={hours}
        width={300}
        height={300}
        quality="100"
        className=""
        alt='Summary image'
          />

</div>
    </div>
      </div>
        <div className='px-2 py-4 '>
     
            <div>
            <div className='flex'>                             
                    <h1
                        className='text-4xl tracking-wide text-emerald-600 section-title font-sfprodisplayregular'
                    >
                        Custom Carpentry
                    </h1>
                </div>
                

            <div className='flex mb-4 '> 
                <div className='p-1 pl-2 mt-4 mb-4 ml-1 text-lg text-white border-l section-description font-sfprodisplaylight border-l-white/25 '>
               <p>We deliver distinctive custom carpentry solutions.</p> 
             
                </div> 
                       </div>  
            </div>
            <div className='grid grid-cols-3 p-4 mt-2 mb-10 rounded-md grid-mob2 '>
                      <div
                    className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm range-main2 bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '
                      
                   >  
                        <p>
                        Pergolas   
                        </p>
                        </div>
                        <div
                      className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm range-main2 bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '
                      
                   >  
                        <p>
                        Wall Units
                 
                        </p>
                        </div>
                        <div
                     className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm range-main2 bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '
                      
                   >  
                        <p>
                        Cabinets
                 
                        </p>
                        </div>
                        <div
 className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm range-main2 bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '
                   >  
                        <p>
                        Shelving
                 
                        </p>
                        </div>
                        <div
 className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm range-main2 bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '
                      
                   >  
                        <p>
                        Storage 
                 
                        </p>
                        </div>
                     
                        <div
 className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm range-main2 bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '
                      
                   >  
                        <p>
                        Built-ins
                 
                        </p>
                         </div>
                        <div
 className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm range-main2 bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '
                      
                   >  
                        <p>
                        Tables
                 
                        </p>
                        </div>
                        <div
 className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm range-main2 bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '
                      
                   >  
                        <p>
                        Counter Tops
                 
                        </p>
                        </div>
                        <div
 className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm range-main2 bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '
                      
                   >  
                        <p>
                            
                        Vanities
                 
                        </p>
                        </div>
                    
                   
                   
                </div>
                
          <div className='grid grid-cols-2 py-6 pb-20 border-b carp-grid border-b-white/25 '>
          <div className='p-1 line-order'>
          <p className='py-3 antialiased text-white line-text text-medium text-sfprodisplayregular'>
          <span className='px-2 text-xs text-emerald-600 o-circle'>●</span>  
            We meet to discuss your needs, ideas , and budget.</p>
            <p className='py-3 antialiased text-white line-text text-medium text-sfprodisplayregular'>
            <span className='px-2 text-xs text-emerald-600 o-circle'>●</span> 
            We provide you with a detailed quote and design drawing.</p>
            <p className='py-3 antialiased text-white line-text text-medium text-sfprodisplayregular'>
            <span className='px-2 text-xs text-emerald-600 o-circle'>●</span>  
            Upon your acceptance, we provide you with a delivery/installation date. </p>
            <p className='py-3 antialiased text-white line-text text-mediumtext-sfprodisplayregular'>
            <span className='px-2 text-xs text-emerald-600 o-circle'>●</span>  
            Construction is completed in our shop, to minimize time in your building.</p>
            <p className='py-3 antialiased text-white line-text text-medium text-sfprodisplayregular'>
            <span className='px-2 text-xs text-emerald-600 o-circle'>●</span> 
            We deliver and/or install your project as promised.</p>
            <div className='flex mt-2 '
              

              >
                  <Popup trigger={ 
     <button
         aria-label='Github'
     >
         <div className='flex items-center px-4 py-3 text-center border rounded-md hidden-mobile bg-zinc-950/50 border-white/10 justify-evenly'>
         <h1 className='text-lg text-white'
                     >
                       <span className='px-2 text-xs text-emerald-600'>●</span>  Request a Quote Today 
                 </h1>
         </div>
                
                 </button>} 
         position="top center">
             <div className='p-4 my-6 text-left border rounded-sm border-white/50 popup' >
                                 <form onSubmit={handleSubmit}>

                                     <FormControl  isRequired>
                                         <FormLabel  textColor={'white'}   fontFamily='sfprodisplayregular' key={'name'}>Full Name</FormLabel>
                                         <Input
                                             id='name'
                                             type={'text'}
                                             value={name}
                                             placeholder="First Name"
                                             marginLeft={6}
                                             paddingTop={4}
                                             paddingBottom={4}
                                             borderRadius={'2px'}
                                             size="xs"
                                             width={'45%'}
                                             onChange={event => setName(event.currentTarget.value)}
                                             backgroundColor={'gray.50'}
                                             
                                         />
                                         
                                           <Input
                                             id='name'
                                             type={'text'}
                                             value={name}
                                             placeholder="Last Name"
                                             marginLeft={6}
                                             paddingTop={4}
                                             paddingBottom={4}
                                             borderRadius={'2px'}
                                             size="xs"
                                             width={'45%'}
                                             onChange={event => setName(event.currentTarget.value)}
                                             backgroundColor={'gray.50'}
                                         />
                                     </FormControl>
                                     <FormControl isRequired mt={6}>
                                         <FormLabel  textColor={'white'}  fontFamily='sfprodisplayregular' key={'Location'}>Where you are located</FormLabel>
                                         <Input
                                             id='location'
                                             type={'location'}
                                             value={location}
                                             placeholder='Address'
                                             size="sm"
                                             borderRadius={'2px'}
                                             marginLeft={6}
                                             paddingTop={4}
                                             paddingBottom={4}
                                             width={'95%'}
                                             onChange={event => setLocation(event.currentTarget.value)}
                                             backgroundColor={'gray.50'}
                                         />
                                     </FormControl>
                                     <FormControl isRequired mt={6}>
                                         <FormLabel textColor={'white'}  fontFamily='sfprodisplayregular' key={'Project'}>What service(s) are you looking for</FormLabel>
                                         <Input
                                             id='project'
                                             type={'project'}
                                             value={project}
                                             placeholder='Type of project'
                                             size="sm"
                                             borderRadius={'2px'}
                                             marginLeft={6}
                                             paddingTop={4}
                                             paddingBottom={4}
                                             width={'95%'}
                                           
                                             onChange={event => setProject(event.currentTarget.value)}
                                             backgroundColor={'gray.50'}
                                         />
                                     </FormControl>
                                     <FormControl isRequired mt={6}>
                                         <FormLabel  textColor={'white'}   fontFamily='sfprodisplayregular' key={'email'}>Email</FormLabel>
                                         <Input
                                             id='email'
                                             type={'email'}
                                             value={email}
                                             placeholder='Email'
                                             borderRadius={'2px'}
                                             marginLeft={6}
                                             paddingTop={4}
                                             paddingBottom={4}
                                             size="sm"
                                           
                                             width={'95%'}
                                             onChange={event => setEmail(event.currentTarget.value)}
                                             backgroundColor={'gray.50'}
                                         />
                                     </FormControl>
                                     <FormControl isRequired mt={6}>
                                         <FormLabel  textColor={'white'}  fontFamily='sfprodisplayregular' key={'message'}>Additional details and when you are available</FormLabel>
                                         <Input
                                             id='message'
                                             type={'text'}
                                             value={message}
                                             placeholder="Type your message..."
                                            
                                             size="sm"
                                             borderRadius={'2px'}
                                             marginLeft={6}
                                             paddingTop={4}
                                             paddingBottom={4}
                                             width={'95%'}
                                             onChange={event => setMessage(event.currentTarget.value)}
                                             backgroundColor={'gray.50'}
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
                                         borderRadius={'2px'}
                                         marginLeft={6}
                                         paddingTop={4}
                                         paddingBottom={4}

                                     >
                                         Send Message
                                     </Button>
                                 </form>
                             </div>
           </Popup>
                 

             </div>
          </div> 
          
          <div className='py-4 border rounded-sm margin-mobile bg-zinc-950/90 border-white/25'><p className='flex items-center justify-center text-lg text-center text-white range-1 font-sfprodisplayregular'>We work with a range of wood and other materials,</p>
          <p className='flex items-center justify-center text-center text-emerald-600 text-md font-sfprodisplayregular range-2'> including:</p>
          <div className=''>
            
         
         
          <div className='grid items-center grid-cols-2 px-6 py-4 rounded-md '>
                    <div
  className='flex items-center p-2 mx-2 my-2 mt-1 text-sm font-semibold tracking-wide text-center bg-white rounded-sm range-main2 text-black/90 justify-evenly font-sfprodisplayregular '
                       
                    >     
                        <p>
                            Concrete
                 
                        </p>
                    </div>
                
             

                    <div
                     className='flex items-center p-2 mx-2 my-2 mt-1 text-sm font-semibold tracking-wide text-center bg-white rounded-sm range-main2 text-black/90 justify-evenly font-sfprodisplayregular '
                       
                    >  
                        <p>
                            Softwoods 
                        </p>
                    </div>
                    <div
                     className='flex items-center p-2 mx-2 my-2 mt-1 text-sm font-semibold tracking-wide text-center bg-white rounded-sm range-main2 text-black/90 justify-evenly font-sfprodisplayregular '
                       
                    >  
                        <p>
                           Hardwoods
                        </p>
                    </div>
                 
                    <div
  className='flex items-center p-2 mx-2 my-2 mt-1 text-sm font-semibold tracking-wide text-center bg-white rounded-sm range-main2 text-black/90 justify-evenly font-sfprodisplayregular '
                       
                    >  
                        <p>
                          Plywood
                        </p>
                    </div>
                    <div
  className='flex items-center p-2 mx-2 my-2 mt-1 text-sm font-semibold tracking-wide text-center bg-white rounded-sm range-main2 text-black/90 justify-evenly font-sfprodisplayregular '
                       
                    >  
                        <p>
                        Live-edge wood 
                        </p>
                    </div>
                    <div
  className='flex items-center p-2 mx-2 my-2 mt-1 text-sm font-semibold tracking-wide text-center bg-white rounded-sm range-main2 text-black/90 justify-evenly font-sfprodisplayregular '
                       
                    >  
                        <p>
                         Reclaimed wood
                        </p>
                    </div>
                    <div
  className='flex items-center p-2 mx-2 my-2 mt-1 text-sm font-semibold tracking-wide text-center bg-white rounded-sm range-main2 text-black/90 justify-evenly font-sfprodisplayregular '
                       
                    >  
                        <p>
                         Glass 
                        </p>
                    </div>
                    <div
  className='flex items-center p-2 mx-2 my-2 mt-1 text-sm font-semibold tracking-wide text-center bg-white rounded-sm range-main2 text-black/90 justify-evenly font-sfprodisplayregular '
                       
                    >  
                        <p>
                         Steel
                        </p>
                    </div>
                    <div
  className='flex items-center p-2 mx-2 my-2 mt-1 text-sm font-semibold tracking-wide text-center bg-white rounded-sm range-main2 text-black/90 justify-evenly font-sfprodisplayregular '
                       
                    >  
                        <p>
                      Aluminum
                        </p>
                    </div>
                    <div
  className='flex items-center p-2 mx-2 my-2 mt-1 text-sm font-semibold tracking-wide text-center bg-white rounded-sm range-main2 text-black/90 justify-evenly font-sfprodisplayregular '
                       
                    >  
                        <p>
                        Brass
                        </p>
                    </div>
                </div>
                </div>
            </div> 
            </div>

        </div>
        <div className='px-2 py-4 '>
        <div className='flex'>                             
                    <h1
                        className='pb-1 text-4xl tracking-wide text-emerald-600 section-title font-sfprodisplayregular'
                    >
                        Home Improvement
                    </h1>
                </div>

            <div className='flex mb-4'> 
                <div className='p-1 pl-2 mt-2 ml-1 text-lg text-white border-l font-sfprodisplaylight section-description border-l-white/25 '>
               <p>Your home is special with unique needs. We will work closely with you to design the right solution for you and your home.</p> 
             
                </div> 
                       </div>  
            </div>
            <div className='flex hidden-mobile'
              

              >
                  <Popup trigger={ 
     <button
         aria-label='Github'
     >
         <div className='flex items-center px-4 py-3 text-center border rounded-md bg-zinc-950/50 border-white/10 justify-evenly'>
         <h1 className='text-lg text-white'
                     >
                       <span className='px-2 text-xs text-emerald-600'>●</span>  Request a Quote Today 
                 </h1>
         </div>
                
                 </button>} 
         position="top center">
             <div className='p-4 my-6 text-left border rounded-sm border-white/50 popup' >
                                 <form onSubmit={handleSubmit}>

                                     <FormControl  isRequired>
                                         <FormLabel  textColor={'white'}   fontFamily='sfprodisplayregular' key={'name'}>Full Name</FormLabel>
                                         <Input
                                             id='name'
                                             type={'text'}
                                             value={name}
                                             placeholder="First Name"
                                             marginLeft={6}
                                             paddingTop={4}
                                             paddingBottom={4}
                                             borderRadius={'2px'}
                                             size="xs"
                                             width={'45%'}
                                             onChange={event => setName(event.currentTarget.value)}
                                             backgroundColor={'gray.50'}
                                             
                                         />
                                         
                                           <Input
                                             id='name'
                                             type={'text'}
                                             value={name}
                                             placeholder="Last Name"
                                             marginLeft={6}
                                             paddingTop={4}
                                             paddingBottom={4}
                                             borderRadius={'2px'}
                                             size="xs"
                                             width={'45%'}
                                             onChange={event => setName(event.currentTarget.value)}
                                             backgroundColor={'gray.50'}
                                         />
                                     </FormControl>
                                     <FormControl isRequired mt={6}>
                                         <FormLabel  textColor={'white'}  fontFamily='sfprodisplayregular' key={'Location'}>Where you are located</FormLabel>
                                         <Input
                                             id='location'
                                             type={'location'}
                                             value={location}
                                             placeholder='Address'
                                             size="sm"
                                             borderRadius={'2px'}
                                             marginLeft={6}
                                             paddingTop={4}
                                             paddingBottom={4}
                                             width={'95%'}
                                             onChange={event => setLocation(event.currentTarget.value)}
                                             backgroundColor={'gray.50'}
                                         />
                                     </FormControl>
                                     <FormControl isRequired mt={6}>
                                         <FormLabel textColor={'white'}  fontFamily='sfprodisplayregular' key={'Project'}>What service(s) are you looking for</FormLabel>
                                         <Input
                                             id='project'
                                             type={'project'}
                                             value={project}
                                             placeholder='Type of project'
                                             size="sm"
                                             borderRadius={'2px'}
                                             marginLeft={6}
                                             paddingTop={4}
                                             paddingBottom={4}
                                             width={'95%'}
                                           
                                             onChange={event => setProject(event.currentTarget.value)}
                                             backgroundColor={'gray.50'}
                                         />
                                     </FormControl>
                                     <FormControl isRequired mt={6}>
                                         <FormLabel  textColor={'white'}   fontFamily='sfprodisplayregular' key={'email'}>Email</FormLabel>
                                         <Input
                                             id='email'
                                             type={'email'}
                                             value={email}
                                             placeholder='Email'
                                             borderRadius={'2px'}
                                             marginLeft={6}
                                             paddingTop={4}
                                             paddingBottom={4}
                                             size="sm"
                                           
                                             width={'95%'}
                                             onChange={event => setEmail(event.currentTarget.value)}
                                             backgroundColor={'gray.50'}
                                         />
                                     </FormControl>
                                     <FormControl isRequired mt={6}>
                                         <FormLabel  textColor={'white'}  fontFamily='sfprodisplayregular' key={'message'}>Additional details and when you are available</FormLabel>
                                         <Input
                                             id='message'
                                             type={'text'}
                                             value={message}
                                             placeholder="Type your message..."
                                            
                                             size="sm"
                                             borderRadius={'2px'}
                                             marginLeft={6}
                                             paddingTop={4}
                                             paddingBottom={4}
                                             width={'95%'}
                                             onChange={event => setMessage(event.currentTarget.value)}
                                             backgroundColor={'gray.50'}
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
                                         borderRadius={'2px'}
                                         marginLeft={6}
                                         paddingTop={4}
                                         paddingBottom={4}

                                     >
                                         Send Message
                                     </Button>
                                 </form>
                             </div>
           </Popup>
                 

             </div>
            <div className='py-4 border rounded-sm bg-zinc-950/90 border-white/25'><p className='flex items-center justify-center text-lg text-center text-white range-1 font-sfprodisplayregular'>We work with a range of wood and other materials,</p>
          <p className='flex items-center justify-center text-center text-emerald-600 range-2 text-md font-sfprodisplayregular'> including:</p>
          <div className=''>
            
         
         
          <div className='grid items-center grid-cols-2 px-6 py-4 rounded-md '>
                    <div
  className='flex items-center p-2 mx-2 my-2 mt-1 text-sm font-semibold tracking-wide text-center bg-white rounded-sm range-main2 text-black/90 justify-evenly font-sfprodisplayregular '
                       
                    >     
                        <p>
                        Decks
                 
                        </p>
                    </div>
                
             

                    <div
                     className='flex items-center p-2 mx-2 my-2 mt-1 text-sm font-semibold tracking-wide text-center bg-white rounded-sm range-main2 text-black/90 justify-evenly font-sfprodisplayregular '
                       
                    >  
                        <p>
                        Custom Cabinets
                        </p>
                    </div>
                 
                    <div
  className='flex items-center p-2 mx-2 my-2 mt-1 text-sm font-semibold tracking-wide text-center bg-white rounded-sm range-main2 text-black/90 justify-evenly font-sfprodisplayregular '
                       
                    >  
                        <p>
                        Kitchen reno
                        </p>
                    </div>
                    <div
  className='flex items-center p-2 mx-2 my-2 mt-1 text-sm font-semibold tracking-wide text-center bg-white rounded-sm range-main2 text-black/90 justify-evenly font-sfprodisplayregular '
                       
                    >  
                        <p>
                        Bathroom reno
                        </p>
                    </div>
                    <div
  className='flex items-center p-2 mx-2 my-2 mt-1 text-sm font-semibold tracking-wide text-center bg-white rounded-sm range-main2 text-black/90 justify-evenly font-sfprodisplayregular '
                       
                    >  
                        <p>
                        Flooring Installation
                        </p>
                    </div>
                    <div
  className='flex items-center p-2 mx-2 my-2 mt-1 text-sm font-semibold tracking-wide text-center bg-white rounded-sm range-main2 text-black/90 justify-evenly font-sfprodisplayregular '
                       
                    >  
                        <p>
                        Wood Floor 
                        </p>
                    </div>
                </div>
                </div>
            </div> 
            <div className='px-2 py-6 mt-10 mb-2 border-t border-t-white/10'>

        
 
<div className='hidden-mobile' >
<div className='flex '>                             
        <h1
         className='py-4 text-4xl tracking-wide text-emerald-600 section-title font-sfprodisplayregular'
        >
            Contact Us
        </h1>
    </div>
    <Contact />
               
</div>
</div>
                



</Container>
  )
}

export default Home