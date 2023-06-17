// import Image from 'next/image'
// import {
//     Box,
//     Flex,
//     Text,
//     Heading,
//     SimpleGrid,
//     Container,
//     SlideFade,

//     FormControl,
//     FormLabel,
//     CircularProgress,

//     Button,
//     Input,

//     Textarea,

//     useColorModeValue,
//     useToast
    
// } from "@chakra-ui/react";
// import emailjs from 'emailjs-com';
// import React from 'react';
// import Popup from 'reactjs-popup';
// import { useState } from 'react';


// import { services } from '../service/serviceItems'
// import { IoLogoGithub } from 'react-icons/io'
// import type { NextPage } from 'next'
// import NextLink from 'next/link'

// import { ToolBox } from '../components/tools/toolBox'


// const mostPopular = () => {
//     return (
   
//             <Box
           
         
//             >
      
//                     <Box className='border border-gray-200 rounded-sm bg-slate-700'
//                    >

                  
//                      <div className='items-center text-center'>
//             <div className='flex gap-1 '>
//                     {/* Lazy */}
//                         {ToolBox.sort((a, b) => {
//                         if (a.name < b.name) {
//                             return -1
//                         }
//                         if (a.name > b.name) {
//                             return 1
//                         }
//                         return 0
//                         }).map(servicetools => (
//                         <Servicetool
                        
//                             icon={servicetools.icon}
//                             key={servicetools.name}
//                             name={servicetools.name}
//                             url={servicetools.url}
//                         />
//                         ))}
//                     </div>
//                     </div>
//                     </Box>
//             </Box>
      
//     )
// }

// export default mostPopular