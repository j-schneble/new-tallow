import React from 'react'
import Link from 'next/link'

  import { IoLogoGithub , IoLogoLinkedin } from 'react-icons/io'
  
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
                  <IoLogoLinkedin className='w-6 h-auto transition-all duration-200 fill-current text-white/50 hover:text-white/25' />
                </Link>
                <Link
                  href='https://google.com/'
                  className='visible'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='Github'
                >
                  <IoLogoGithub className='w-6 h-auto transition-all duration-200 fill-current text-white/50 hover:text-white/25' />
                </Link>
          </div> */}

        <p className='m-auto text-lg text-white/50 font-sfprodisplayregular'
            
          
      
            
              
            >
             Copyright © Tallowhill Home Services {" "}
            </p>
      </div>
      </div>
    </footer>
  )
}

export default Footer