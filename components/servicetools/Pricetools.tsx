import { cn } from '../../lib/classNames'

interface PriceProps {
    name: string
  
    icon?: React.ReactNode
    url: string
  }

  export default function Pricetool({
    name,
  
    icon,
    url,
  }: PriceProps): JSX.Element {
    return (
  
          <div className='flex items-center text-center bg-slate-600 justify-evenly'>
          <h2 className='flex items-center text-2xl text-center text-orange-500 rounded-full font-sfprodisplayregular'>{icon}</h2>

          <h2 className='flex items-center text-2xl text-center text-slate-100 font-sfprodisplayregular'>{name}</h2>
            </div>
         
     
      )
    }