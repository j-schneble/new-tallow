import React from 'react'
import Link from 'next/link'

  import { IoLogoGithub , IoLogoLinkedin } from 'react-icons/io'
  import {RiInstagramLine, RiFacebookBoxFill} from 'react-icons/ri'
  const iconProps = {
    variant: "ghost",
    size: "lg",
    isRound: true
  };
  
  const Footer: React.FC = () => {
  
   
  
    return (
      <footer className="bg-transparent">
      <div className="flex max-w-4xl gap-4 px-4 pt-1 mx-auto overflow-hidden text-xs leading-loose text-white sm:px-6 lg:px-8">
        
        <div className="sticky mx-auto">
          {/* <div className="flex items-center flex-grow space-x-4">
            
          <Link
                  href='https://google.com/'
                  className='visible'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='Twitter'
                >
                  <RiInstagramLine className='w-8 h-auto text-white transition-all duration-200 fill-current hover:text-white/25' />
                </Link>
                <Link
                  href='https://google.com/'
                  className='visible'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='Github'
                >
                  <RiFacebookBoxFill className='w-8 h-auto text-white transition-all duration-200 fill-current hover:text-white/25' />
                </Link>
          </div>  */}

        <p className='m-auto text-lg text-white/50 font-sfprodisplayregular'
            
          
      
            
              
            >
             Copyright © Tallow Services LLC d/b/a Tallowhill Home Services {" "}
            </p>
      </div>
      </div>
    </footer>
  )
}

export default Footer