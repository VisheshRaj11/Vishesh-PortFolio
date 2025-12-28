import { Info } from 'lucide-react'
import React from 'react'

const NotFound:React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full'>
        <Info size={36} className='mb-5'/>
        <p className='text-4xl text-gray-500'>404</p>
        <p className='text-4xl font-bold text-gray-300/50'>Not Found</p>
    </div>
  )
}

export default NotFound