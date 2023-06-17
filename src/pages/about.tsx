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
<div className='grid items-center grid-cols-2 gap-6 '>

<div className='flex items-center w-2/3 pl-6 my-4'>

<h1 className='text-xl tracking-wide text-white font-sfprodisplayregular '>After 20 years in corporate technology and marketing, I decided to take my own career advice. I have always told my children to do what they love doing and then find a way to make money doing it. My father instilled a love of woodworking in me. I was the neighbor constantly doing woodworking projects like building wooden boats in my garage. So, I decided to start a new career building beautiful things for people.</h1>

</div>
<div className='flex items-center my-4 w-max'>


<Image
              src={john}
              width={450}
              height={450}
              quality="100"
              className=""
              alt='Summary image'
          />

</div>
</div>
        </Container>
    )
}
   