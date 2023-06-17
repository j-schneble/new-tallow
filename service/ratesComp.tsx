// import Image from 'next/image'
// import {
//     Box,
//     Flex,
//     Text,
//     Heading,
//     SimpleGrid,
//     Container,
//     Divider
// } from "@chakra-ui/react";

// import Parallax from '../components/Parallax/index'
// import { rates } from '../service/serviceItems'
// import { IoLogoGithub } from 'react-icons/io'
// import type { NextPage } from 'next'
// import NextLink from 'next/link'



        






// export default function RatesComp() {
//     return (

//   <Container>
//     {rates.map((rate, key) => (
//         <Parallax key={key}>
//              <Box className='border-2 shadowgu '
//             p={4} display={{ md: "flex",  }} borderWidth={1} margin={3} rounded={'10px'} 
//             _hover={{
//                 borderColor: "orange.500",
//             }}
//         > 
//               <Flex
//                 textAlign="center" justifyContent="space-around" direction={{ base: 'column', md: 'row' }}
//             >

//                 <Flex flexDirection="column" ml={[0, 5, 5]} mt={[2, 2, 0, 0]}>
// <div>


//          <p className='mb-2 text-xl font-semibold text-center font-sfprodisplaybold wider' color={'blue.800'} >
//                     {rate.name} ⤵
//                     </p>
//                     </div>
//                     <div className='w-2/3 mt-2 text-center rounded bg-orange-500/90 ml-9' >
//                         {rate.first}
//                </div>
//   </Flex>
//   </Flex>
//         </Box>
//         </Parallax>
//         ))}
//         </Container>
//         )
// }