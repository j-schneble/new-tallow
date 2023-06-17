import Image from 'next/image'
import Container from '../../components/Container/index'
import React from 'react'
import Contact from '../../section/contact'
import { useRouter } from 'next/navigation';
import type { NextPage } from 'next';
import IconPrices from '../../service/iconPrices'
import ProfileSection from '../../section/ProfileSection';
import wetall from '../../public/weare.png'
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
 
 <div className='mt-8'>
 <ProfileSection /> 
 </div>
    

     
          <div className='flex items-center mb-10 text-center border-b rounded-sm border-b-white/10 justify-evenly '>
               
          

              <div className='flex items-center w-2/3 pb-16 text-xl italic tracking-wide text-center text-gray-300 border-b we-mob border-b-black/10 font-sfprodisplayregular '>
                          <h1>
                   We are a team of home improvement specialists, committed to delivering the highest quality service with a beautiful result four our customers. 
                   </h1>
           
                   
                   {/* <div className='flex items-center mt-2 mb-4 tracking-wide text-center text-slate-500 we-mob2 font-sfprodisplaylight '>
                     <h1>
                     We are committed to delivering the highest quality service with a beautiful result four our customers. 
                     </h1>  
                 
           
             </div>  */}
            
              

           </div>
      
    
     
                
 
             </div>
          
           
          
{/*             
          <div className='grid items-center justify-center grid-cols-1 mt-8 text-center '>  
         
          
          
                  </div>
                  <div className='flex items-center p-4 mb-3 text-center bg-gray-500 rounded-sm justify-evenly'
                 
                 >
                 <h1 className='text-lg italic font-light text-slate-200 font-sfprodisplayregular '>
                 In most cases, we can provide a firm estimate after just a quick phone call. We would never exceed our estimate without your approval.
                 </h1>
                 <div className='grid items-center w-1/4 grid-cols-1 text-center border-2 rounded-lg bg-slate-100 border-slate-400 justify-evenly '>
          <h1 className='flex items-center py-4 text-xl text-center text-gray-900 font-sfprodisplayregular justify-evenly ' >  👉 Request a  Quote Today </h1>
          </div>
            </div>
        
      */}
   
          <div className='px-2 border-t min-w-max h-max border-black/10'>

        
 
            <div className='' >
            <div className='flex '>                             
                    <h1
                     className='pb-4 text-4xl tracking-wide text-orange-500 font-sfprodisplayregular'
                    >
                        Handyman Services 
                    </h1>
                </div>

            <div className='flex '>
                <h1 className='p-1 pl-2 mt-1 mb-4 ml-1 text-lg tracking-wider text-white border-l font-sfprodisplaylight border-l-white/25'>
                <span className=''>Professional</span> and <span className=''>dependable </span>handyman service in Philadelphia and the surrounding region.
                </h1>                      
            </div>                  
            </div>
            <div className='flex items-center px-6 mt-12 text-center justify-evenly'
         >
            
                       <div className='flex items-center my-4 w-max'>


<Image
              src={wetall}
              width={950}
              height={850}
              quality="100"
              className=""
              alt='Summary image'
          />

</div>
           
            </div> 
        
            <div className='grid grid-cols-4 p-4 mt-4 mb-10 rounded-md '>
                      <div
                    className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '
                      
                   >  
                        <p>
                        TV Installation/Hanging  
                        </p>
                        </div>
                        <div
                      className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '
                      
                   >  
                        <p>
                        TV Installation/Hanging
                 
                        </p>
                        </div>
                        <div
                     className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '
                      
                   >  
                        <p>
                       Ceiling Fans
                        </p>
                        </div>
                        <div
 className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '
                   >  
                        <p>
                       Hanging Artwork
                 
                        </p>
                        </div>
                        <div
 className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '
                      
                   >  
                        <p>
                        Shades + Blinds
                 
                        </p>
                        </div>
                        <div
 className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '
                      
                   >  
                        <p>
                        Wood Floor Refinishing
                 
                        </p>
                        </div>
                        <div
 className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '
                      
                   >  
                        <p>
                        Drywall + Plaster Repair
                 
                        </p>
                         </div>
                        <div
 className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '
                      
                   >  
                        <p>
                        Shelves
                 
                        </p>
                        </div>
                        <div
 className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '
                      
                   >  
                        <p>
                        Painting
                 
                        </p>
                        </div>
                        <div
 className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '
                      
                   >  
                        <p>
                            
                        Door Installation
                 
                        </p>
                        </div>
                        <div
 className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '
                      
                   >  
                        <p>
                        Plumbing
                 
                        </p>
                        </div>
                        <div
 className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '
                      
                   >  
                        <p>
                        Garbage Disposal
                 
                        </p>
                        </div>
                   
                        <div
 className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '
                      
                   >  
                        <p>
                        Carpentry
                 
                        </p>
                        </div>
                        <div
 className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '
                      
                   >  
                        <p>
                        Welding Repairs
                 
                        </p>
                        </div>
                        <div
 className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '
                      
                   >  
                        <p>
                        Furniture Assembly
                 
                        </p>
                        </div>
                        <div
 className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '
                      
                   >  
                        <p>
                        Power Washing
                 
                        </p>
                        </div>
                       
                </div>
                
            
    <div className='grid items-center justify-center grid-cols-3 pb-20 mt-16 border-b border-b-white/25' >
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
<div className='flex items-center pb-20 mb-20 ml-1 text-center justify-evenly '
              

              >
                  <Popup trigger={ 
     <button
         aria-label='Github'
     >
         <div className='flex items-center px-4 py-3 text-center border rounded-md bg-zinc-950/50 border-white/10 justify-evenly'>
         <h1 className='text-lg text-orange-500'
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
                                         <FormLabel textColor={'black'}  fontFamily='sfprodisplayregular' key={'Project'}>What service(s) are you looking for</FormLabel>
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
                                         <FormLabel  textColor={'black'}   fontFamily='sfprodisplayregular' key={'email'}>Email</FormLabel>
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
                                         <FormLabel  textColor={'black'}  fontFamily='sfprodisplayregular' key={'message'}>Additional details and when you are available</FormLabel>
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

   
            
            {/* <div className='mt-6 '>                  
                <div className='grid grid-cols-2 p-6 '>
                    <div
                  className='p-2 '
                   
                    >
                        <h1 className='mb-2 text-xl font-semibold text-center text-slate-700 font-sfprodisplayregular'>
                           Rates
                        </h1>
                        <div className='grid items-center grid-cols-1 p-1 text-center bg-slate-200 '
                       >
                        <div className='grid items-center grid-cols-1 text-xl tracking-wide text-center font-sfprodisplaybold text-slate-700'
>
                            <h1>First hour</h1>
                        </div>                        
                        <div className='grid items-center grid-cols-1 text-lg tracking-wide text-center text-slate-700 font-sfprodisplayregular'  >
                            <h1>$105</h1>
                        </div>
                        </div>
                        <div className='p-1 bg-slate-200'
                       >                    
                        <div className='grid items-center grid-cols-1 text-xl tracking-wide text-center font-sfprodisplaybold text-slate-700'
                           >
                            <h1>Hours after</h1>
                        </div>                        
                        <div className='grid items-center grid-cols-1 text-lg tracking-wide text-center text-slate-400 font-sfprodisplayregular'
                                          
                       >
                            <h1>$85</h1>
                        </div>
             
                    </div>
                    </div>
                   
                    <div
                  className='p-2 '
                   
                    >
                    
                    <h1 className='mb-2 text-xl font-semibold text-center text-slate-800 font-sfprodisplayregular'>
                           Hours
                        </h1>
                        <div className='grid items-center grid-cols-1 p-1 text-center bg-slate-700'
                       >
                        <div className='grid items-center grid-cols-1 text-xl tracking-wide text-center font-sfprodisplaybold text-slate-100'
>
                            <h1>Monday - Friday</h1>
                        </div>                        
                        <div className='grid items-center grid-cols-1 text-lg tracking-wide text-center text-slate-100 font-sfprodisplayregular'  >
                            <h1>9am - 6pm</h1>
                        </div>
                        </div>
                        <div className='p-1 bg-slate-700'
                       >                    
                        <div className='grid items-center grid-cols-1 text-xl tracking-wide text-center font-sfprodisplaybold text-slate-100'
                           >
                            <h1>Saturday</h1>
                        </div>                        
                        <div className='grid items-center grid-cols-1 text-lg tracking-wide text-center text-slate-100 font-sfprodisplayregular'
                                          
                       >
                            <h1>9am - 1pm</h1>
                        </div>
             
                    </div>
                </div>
                </div>

            </div>
            
           
     */}
        </div>
        <div className='px-2 py-4 '>
     
            <div>
            <div className='flex'>                             
                    <h1
                        className='text-4xl tracking-wide text-orange-500 font-sfprodisplayregular'
                    >
                        Custom Carpentry
                    </h1>
                </div>
                

            <div className='flex mb-4'> 
                <div className='p-1 pl-2 mt-4 mb-4 ml-1 text-lg text-white border-l font-sfprodisplaylight border-l-white/25 '>
               <p>We deliver distinctive custom carpentry solutions.</p> 
             
                </div> 
                       </div>  
            </div>
            <div className='grid grid-cols-3 p-4 mt-2 mb-10 rounded-md '>
                      <div
                    className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '
                      
                   >  
                        <p>
                        Pergolas   
                        </p>
                        </div>
                        <div
                      className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '
                      
                   >  
                        <p>
                        Wall Units
                 
                        </p>
                        </div>
                        <div
                     className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '
                      
                   >  
                        <p>
                        Cabinets
                 
                        </p>
                        </div>
                        <div
 className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '
                   >  
                        <p>
                        Shelving
                 
                        </p>
                        </div>
                        <div
 className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '
                      
                   >  
                        <p>
                        Storage Solutions
                 
                        </p>
                        </div>
                        <div
 className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '
                      
                   >  
                        <p>
                        Floating Shelves
                 
                        </p>
                        </div>
                        <div
 className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '
                      
                   >  
                        <p>
                        Built-ins
                 
                        </p>
                         </div>
                        <div
 className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '
                      
                   >  
                        <p>
                        Tables
                 
                        </p>
                        </div>
                        <div
 className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '
                      
                   >  
                        <p>
                        Counter Tops
                 
                        </p>
                        </div>
                        <div
 className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '
                      
                   >  
                        <p>
                            
                        Vanities
                 
                        </p>
                        </div>
                        <div
 className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '
                      
                   >  
                        <p>
                        Reclaimed Wood
                 
                        </p>
                        </div>
                        <div
 className='flex items-center p-2 mt-1 text-sm font-semibold tracking-wide text-center text-white border rounded-sm bg-zinc-950/90 border-white/10 justify-evenly font-sfprodisplayregular '
                      
                   >  
                        <p>
                        Live Edge
                 
                        </p>
                        </div>
                   
                </div>
                
          <div className='grid grid-cols-2 py-6 pb-20 border-b border-b-white/25 '>
          <div className='p-1 '>
          <p className='py-3 antialiased text-white text-medium text-sfprodisplayregular'>
          <span className='px-2 text-xs text-orange-500'>●</span>  
            We meet to discuss your needs, ideas , and budget.</p>
            <p className='py-3 antialiased text-white text-medium text-sfprodisplayregular'>
            <span className='px-2 text-xs text-orange-500'>●</span> 
            We provide you with a detailed quote and design drawing.</p>
            <p className='py-3 antialiased text-white text-medium text-sfprodisplayregular'>
            <span className='px-2 text-xs text-orange-500'>●</span>  
            Upon your acceptance, we provide you with a delivery/installation date. </p>
            <p className='py-3 antialiased text-white text-mediumtext-sfprodisplayregular'>
            <span className='px-2 text-xs text-orange-500'>●</span>  
            Construction is completed in our shop, to minimize time in your building.</p>
            <p className='py-3 antialiased text-white text-medium text-sfprodisplayregular'>
            <span className='px-2 text-xs text-orange-500'>●</span> 
            We deliver and/or install your project as promised.</p>
            <div className='flex mt-2 '
              

              >
                  <Popup trigger={ 
     <button
         aria-label='Github'
     >
         <div className='flex items-center px-4 py-3 text-center border rounded-md bg-zinc-950/50 border-white/10 justify-evenly'>
         <h1 className='text-lg text-white'
                     >
                       <span className='px-2 text-xs text-orange-500'>●</span>  Request a Quote Today 
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
                                         <FormLabel textColor={'black'}  fontFamily='sfprodisplayregular' key={'Project'}>What service(s) are you looking for</FormLabel>
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
                                         <FormLabel  textColor={'black'}   fontFamily='sfprodisplayregular' key={'email'}>Email</FormLabel>
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
                                         <FormLabel  textColor={'black'}  fontFamily='sfprodisplayregular' key={'message'}>Additional details and when you are available</FormLabel>
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
          
          <div className='py-4 border rounded-sm bg-zinc-950/90 border-white/25'><p className='flex items-center justify-center text-lg text-center text-white font-sfprodisplayregular'>We work with a range of wood and other materials,</p>
          <p className='flex items-center justify-center text-center text-orange-500 text-md font-sfprodisplayregular'> including:</p>
          <div className=''>
            
         
         
          <div className='grid items-center grid-cols-2 px-6 py-4 rounded-md '>
                    <div
  className='flex items-center p-2 mx-2 my-2 mt-1 text-sm font-semibold tracking-wide text-center bg-white rounded-sm text-black/90 justify-evenly font-sfprodisplayregular '
                       
                    >     
                        <p>
                            Concrete
                 
                        </p>
                    </div>
                
             

                    <div
                     className='flex items-center p-2 mx-2 my-2 mt-1 text-sm font-semibold tracking-wide text-center bg-white rounded-sm text-black/90 justify-evenly font-sfprodisplayregular '
                       
                    >  
                        <p>
                            Softwoods + Hardwoods
                        </p>
                    </div>
                 
                    <div
  className='flex items-center p-2 mx-2 my-2 mt-1 text-sm font-semibold tracking-wide text-center bg-white rounded-sm text-black/90 justify-evenly font-sfprodisplayregular '
                       
                    >  
                        <p>
                         Highest quality plywood
                        </p>
                    </div>
                    <div
  className='flex items-center p-2 mx-2 my-2 mt-1 text-sm font-semibold tracking-wide text-center bg-white rounded-sm text-black/90 justify-evenly font-sfprodisplayregular '
                       
                    >  
                        <p>
                        Live-edge + reclaimed wood
                        </p>
                    </div>
                    <div
  className='flex items-center p-2 mx-2 my-2 mt-1 text-sm font-semibold tracking-wide text-center bg-white rounded-sm text-black/90 justify-evenly font-sfprodisplayregular '
                       
                    >  
                        <p>
                         Glass 
                        </p>
                    </div>
                    <div
  className='flex items-center p-2 mx-2 my-2 mt-1 text-sm font-semibold tracking-wide text-center bg-white rounded-sm text-black/90 justify-evenly font-sfprodisplayregular '
                       
                    >  
                        <p>
                         Steel, aluminum, and brass
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
                        className='pb-1 text-4xl tracking-wide text-orange-500 font-sfprodisplayregular'
                    >
                        Home Improvement
                    </h1>
                </div>

            <div className='flex mb-4'> 
                <div className='p-1 pl-2 mt-2 ml-1 text-lg text-white border-l font-sfprodisplaylight border-l-white/25 '>
               <p>Your home is special with unique needs. We will work closely with you to design the right solution for you and your home.</p> 
             
                </div> 
                       </div>  
            </div>
            <div className='flex '
              

              >
                  <Popup trigger={ 
     <button
         aria-label='Github'
     >
         <div className='flex items-center px-4 py-3 text-center border rounded-md bg-zinc-950/50 border-white/10 justify-evenly'>
         <h1 className='text-lg text-white'
                     >
                       <span className='px-2 text-xs text-orange-500'>●</span>  Request a Quote Today 
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
                                         <FormLabel textColor={'black'}  fontFamily='sfprodisplayregular' key={'Project'}>What service(s) are you looking for</FormLabel>
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
                                         <FormLabel  textColor={'black'}   fontFamily='sfprodisplayregular' key={'email'}>Email</FormLabel>
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
                                         <FormLabel  textColor={'black'}  fontFamily='sfprodisplayregular' key={'message'}>Additional details and when you are available</FormLabel>
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
            <div className='py-4 border rounded-sm bg-zinc-950/90 border-white/25'><p className='flex items-center justify-center text-lg text-center text-white font-sfprodisplayregular'>We work with a range of wood and other materials,</p>
          <p className='flex items-center justify-center text-center text-orange-500 text-md font-sfprodisplayregular'> including:</p>
          <div className=''>
            
         
         
          <div className='grid items-center grid-cols-2 px-6 py-4 rounded-md '>
                    <div
  className='flex items-center p-2 mx-2 my-2 mt-1 text-sm font-semibold tracking-wide text-center bg-white rounded-sm text-black/90 justify-evenly font-sfprodisplayregular '
                       
                    >     
                        <p>
                        Decks
                 
                        </p>
                    </div>
                
             

                    <div
                     className='flex items-center p-2 mx-2 my-2 mt-1 text-sm font-semibold tracking-wide text-center bg-white rounded-sm text-black/90 justify-evenly font-sfprodisplayregular '
                       
                    >  
                        <p>
                        Custom Cabinets
                        </p>
                    </div>
                 
                    <div
  className='flex items-center p-2 mx-2 my-2 mt-1 text-sm font-semibold tracking-wide text-center bg-white rounded-sm text-black/90 justify-evenly font-sfprodisplayregular '
                       
                    >  
                        <p>
                        Kitchen + Bathroom Renovations
                        </p>
                    </div>
                    <div
  className='flex items-center p-2 mx-2 my-2 mt-1 text-sm font-semibold tracking-wide text-center bg-white rounded-sm text-black/90 justify-evenly font-sfprodisplayregular '
                       
                    >  
                        <p>
                        Kitchen Islands
                        </p>
                    </div>
                 
                    <div
  className='flex items-center p-2 mx-2 my-2 mt-1 text-sm font-semibold tracking-wide text-center bg-white rounded-sm text-black/90 justify-evenly font-sfprodisplayregular '
                       
                    >  
                        <p>
                        Flooring Installation
                        </p>
                    </div>
                    <div
  className='flex items-center p-2 mx-2 my-2 mt-1 text-sm font-semibold tracking-wide text-center bg-white rounded-sm text-black/90 justify-evenly font-sfprodisplayregular '
                       
                    >  
                        <p>
                        Wood Floor Refinishing
                        </p>
                    </div>
                </div>
                </div>
            </div> 
            <div className='px-2 py-6 mt-10 mb-2 border-t border-t-white/10'>

        
 
<div className='' >
<div className='flex '>                             
        <h1
         className='py-4 text-4xl tracking-wide text-orange-500 font-sfprodisplayregular'
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