import React from 'react';

import Image from 'next/image';
import tallnoback from '../public/tallowblack.png'

const ProfileSection = () => {
    return (

            <div className='max-w-6xl '>
                 
                <div className='flex items-center w-full justify-evenly'>   
                    <div className='flex items-center justify-center ml-4 img-mob'>
                    
                      
                        

                   


<Image
              src={tallnoback}
              width={1290}
              height={500}
              className=" recent-time brightness-110 hover:cursor-pointer"
              alt='Summary image'
          />

            
                        </div>
                    </div>
                  
             
   
           

            </div>

    )
}

export default ProfileSection;
