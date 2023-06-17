import { cn } from '../lib/classNames'

interface ServiceProps {
    name: string
  
    icon?: React.ReactNode
    url: string
  }

  export default function Servicetool({
    name,
  
    icon,
    url,
  }: ServiceProps): JSX.Element {
    return (
        <a
          className={cn(
            'flex  space-betweenitems-center',
            'hover:bg-white dark:hover:bg-white',
            'rounded-lg ',
            'cursor-pointer'
          )}
          href={url}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='flex p-9 '>
          <div className='text-xl text-orange-500 rounded-full '>{icon}</div>
        <div className=''>
          <h2 className='font-bold text-white font-sfprodisplayregular'>{name}</h2>
            </div>
          </div>
        </a>
      )
    }