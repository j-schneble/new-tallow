
import React from 'react'
import { 
    MdOutlinePlumbing,

MdOutlineKitchen,

MdOutlineDoorSliding,

MdOutlineRoofing,
MdOutlineBathroom

} from 'react-icons/md'

import {
    HiOutlineCash

} from 'react-icons/hi'

import {
    BsCalendarCheck
} from 'react-icons/bs'

import {
    AiOutlineTag
} from 'react-icons/ai'

import { GiWoodenChair, GiFloorPolisher } from 'react-icons/gi'

interface Tool {
    name: string
    url: string
    icon?: React.ReactNode
}

interface Price {
    name: string
    url: string
    icon?: React.ReactNode
}

export const ToolBox: Tool[] = [
  
    {
        name: 'Furniture',
        icon: <GiWoodenChair  />,
        url: "https://chakra-ui.com/",
      },
    {
        name: 'Bathroom',
        icon: <MdOutlineBathroom />,
        url: "https://chakra-ui.com/",
      },  
  
      {
        name: 'Roofing',
        icon: <MdOutlineRoofing />,
        url: "https://chakra-ui.com/",
      },  
      {
        name: 'Windows',
        icon: <MdOutlineDoorSliding />,
        url: "https://chakra-ui.com/",
      },  
      {
        name: 'Kitchen ',
        icon: <MdOutlineKitchen />,
        url: "https://chakra-ui.com/",
      },  
      {
        name: 'Plumbing',
        icon: < MdOutlinePlumbing />,
        url: "https://chakra-ui.com/",
      },  
]

export const PriceBox: Price[] = [
   

      {
        name: 'See your price.',
        icon: <AiOutlineTag/>,
        url: "https://chakra-ui.com/",
      }, 
      {
        name: 'Book a time.',
        icon: <BsCalendarCheck  />,
        url: "https://chakra-ui.com/",
      },
    {
        name: 'Pay online.',
        icon: < HiOutlineCash/>,
        url: "https://chakra-ui.com/",
      },  
  
]
