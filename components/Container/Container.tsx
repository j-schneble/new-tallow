import React from 'react'
import { useState } from 'react';
import Footer from '../Footer';
import useScroll from '../../lib/hooks/use.scroll'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { cn } from '../../lib/classNames'
import Image from "next/image";
import tallow from '../../public/blacklogo.png'
import {RiInstagramLine, RiFacebookBoxFill} from 'react-icons/ri'

interface IContainerProps {
  back?: {
    href: string
    label: string
  }
  footer?: boolean
  children?: React.ReactNode
  title?: string
  description?: string
  image?: string
  [key: string]: any


}

export default function Container({
  footer = true,
  back,
  children,
  title = 'js.',
  description = 'Develop.',

  
}: IContainerProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const meta = {
    title: "Schneble.io - js",
    description: "Schneble.io v2",
    type: 'website',
  }
  const scrolled = useScroll(50);

  return (
    <> 
      <div
        className={cn(
       
          'text-primary',
          'relative h-full min-h-screen bg-black w-full',
          'flex flex-col',
          'motion-reduce:transition-none motion-reduce:transform-none'
        )}
      >



        

   <nav className='sticky top-0  bg-black border-b border-b-white/25 flex text-left justify-between z-[50] w-full mx-auto max-w-7xl'>
   <div
        className={`sticky w-full  md:top-4 max-w-7xl       ${
          scrolled
            ? " "
            : "bg-white/0"
        }  transition-all`}
      >
        <div className="flex mx-3 mt-2 mb-2 text-left top-mob xl:mx-auto">
          <Link href="/" className="flex mx-4 my-2 text-xl text-left left-1 cmd-mob">
          
          <Image
                src={tallow}
                width={30}
                height={30}
                quality="100"
                className=""
                alt='Summary image'
            />
            <h1 className='flex px-6 text-xl font-light text-white font-sfprodisplayregular '> Tallowhill Home Services </h1>
          </Link>
          <div>
            
            
  
          
          </div>
          </div>
          </div>
          <div className='flex flex-row mt-4 mr-8 space-x-6 item-center '>
          <a
                  href='https://www.instagram.com/callowhillhomeservices/'
                  className='visible lit2'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='Github'
                >
                  <RiInstagramLine className='h-auto transition-all duration-200 rounded-sm fill-current text-zinc-500 w-7 ' />
                </a>   
                <a
                  href='https://callowhillhomeservices.com/about/'
                  className='visible lit2'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='Twitter'
                >
                  <RiFacebookBoxFill className='h-auto transition-all duration-200 rounded-md fill-current text-zinc-500 w-7 ' />
                </a>
                
              </div>
          </nav>
            <main
              className={cn(
                'px-10 z-[1] ',
                'max-w-7xl',
                'mx-auto my-auto',
                'flex flex-col justify-center ',
                'divide-y divide-gray-300 dark:divide-gray-700',
                '',
              
              )}
            >
             
             <div className='flex flex-col gap-6 bg-black'>           
              {children}
            </div>
            {footer && (
              <Footer />
            )}
            </main>   
      </div>
    </>
  )
}

