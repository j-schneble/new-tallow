import Image from 'next/image'
import Container from '../../components/Container/index'
import React from 'react'
import john from '../../public/john.png'


export default function About() {
    return (
        <Container>
            {/* <div className='flex items-center text-center justify-evenly'>
                <h1 className='text-xl tracking-wide text-white font-sfprodisplayregular'>We are NOT your average group of construction workers and carpenters. We are a team of artists, designers and craftspeople with deep experience in construction, custom furniture, cabinetry and fabrication.</h1>
            </div> */}
            <div className='flex mb-12'>                             
                    <h1
                     className='text-3xl tracking-wide text-orange-500 font-sfprodisplayregular'
                    >
                       Behind Callowhill Home Services
                    </h1>
                </div>
            <div className='flex items-center text-center justify-evenly'></div>
<div className='grid items-center grid-cols-2 mb-16 text-center justify-evenly '>

{/* <div className='flex items-center w-2/3 px-2 py-2 pl-6 my-4 bg-zinc-950'>

<h1 className='text-xl font-light tracking-wide text-white font-sfprodisplayregular '>After 20 years in corporate technology and marketing, I decided to take my own career advice. I have always told my children to do what they love doing and then find a way to make money doing it. My father instilled a love of woodworking in me. I was the neighbor constantly doing woodworking projects like building wooden boats in my garage. So, I decided to start a new career building beautiful things for people.</h1>

</div> */}
<div className='flex items-center mb-4 text-center justify-evenly'>


<Image
              src={john}
              width={350}
              height={350}
              quality="100"
              className=""
              alt='Summary image'
          />
        
</div>
<div className='grid items-center grid-cols-1 mb-3 text-center'>
<div className='flex '>
    <h1 className='text-3xl font-light text-white font-sfprodisplayregular'>Meet John Schneble  </h1>
    </div>
    <div className='flex '>
    <h2 className='mb-6 text-lg italic font-light text-white/75 font-sfprodisplayregular'>Founder, President</h2>
    </div>
    <h1 className='flex items-center w-2/3 text-lg font-light tracking-wide text-left bg-zinc-950/50 text-white/90 font-sfprodisplayregular '>After 20 years in corporate technology and marketing, I decided to take my own career advice. I have always told my children to do what they love doing and then find a way to make money doing it. My father instilled a love of woodworking in me. I was the neighbor constantly doing woodworking projects like building wooden boats in my garage. So, I decided to start a new career building beautiful things for people.</h1>
</div>
</div>

        </Container>
    )
}
   