import React from 'react'
import { Setting2 } from 'iconsax-react'
import img1 from '../../../assets/vuexy-logo.svg'
import { Button } from '../button'
import navigation from '@/lib'
import { NavLink } from 'react-router'
import img from '../../../assets/profile.png'
function Navbar() {
  return (
    <>
    <div className=' shadow shadow-gray-200'>
    <div className='flex  justify-between p-4'>
    <div className='  flex items-center gap-4'>  <img src={img1}></img>
    <h1 className='flex text-2xl font-semibold text-gray-500'>نظام إدارة المطاعم</h1></div>
   <div className='flex gap-1'> <Setting2 size="30" color='#6a7282'/>
   <img src={img} className='w-10 h-8 object-cover'></img></div>
    </div>
    <hr/>
     <div className='flex gap-4 mt-2'>
      {navigation.map((nav, index) => (
        <>
        <Button className={'bg-white text-gray-500 font-semibold  hover:bg-gradient-to-r  from-primary to-white hover:rounded-md hover:text-gray-700'} key={nav.id} asChild>
          <NavLink to={nav.link}>
            <nav.icon color="#6a7282"  size={"1rem"} />
            <span className='flex p-3'>{nav.title}</span>
          </NavLink>



        </Button>
            {index < navigation.length - 1 &&(  <span className='w-0.5 h-6  bg-gray-300 '></span>)}
        </>
      ))}

</div>
</div>
    </>
  )
}

export default Navbar;
