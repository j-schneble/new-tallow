import { IService } from '../types';
import { IRates } from '../types';

export const services: IService[] = [
    {
        name: 'Handyman Service ',       
   
        summary_path: '/handyman',
        decide: 'Request Quote',
       
    },
    {
        name: 'Request Quote',       
   
        summary_path: 'Request Quote',
        decide: 'Request Quote',
       
    },
    {
        name: 'Custom Carpentry ',    
     
        summary_path: '/carpentry',
        decide: 'Request Quote',
      
    },
  
  
    
  ];


  export const rates: IRates[] =[
    {
        name: 'Rates',
        first: '$105 for the first hour',
        second: '$85/hour thereafter',
    },
    {
        name:'Hours',
        first: '9am - 6pm Mon-Fri',
        second: '9am - 1pm Sat',
    }
  ];
  
  
  