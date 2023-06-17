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
// import Pricetool from '../components/servicetools/Pricetools'
// import { PriceBox } from '../components/tools/toolBox'


// const iconPrices = () => {
//     return (
//         <Container
//         >
//             <div className='mt-2 mb-2 '>
//             <div className='grid grid-cols-3 grid-rows-2 gap-2 '>
//                     {/* Lazy */}
//                         {PriceBox.sort((a, b) => {
//                         if (a.name < b.name) {
//                             return -1
//                         }
//                         if (a.name > b.name) {
//                             return 1
//                         }
//                         return 0
//                         }).map(pricetool => (
//                         <Pricetool
                        
//                             icon={pricetool.icon}
//                             key={pricetool.name}
//                             name={pricetool.name}
//                             url={pricetool.url}
//                         />
//                         ))}
//                     </div>


//             </div>

//         </Container>
//     )
// }

// export default iconPrices