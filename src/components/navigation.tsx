import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { MenuIcon, XIcon } from 'lucide-react'
import React, { useState } from 'react'

const NavigationComponent = () => {

    const [menu, setMenu] = useState<boolean>(false)

    function navAnimation ():gsap.core.Timeline {
        let nav = document.querySelector(".nav")
        let smallNav = document.querySelector(".small-nav")
        let duration = 2
        const tl = gsap.timeline()
        .from(smallNav, {opacity:0, duration:duration, ease:"back", y:-80})
        .from(nav, {opacity:0, duration:duration, ease:"back", y:-80},"<")
        return tl;
    }

    useGSAP ( ()=> {navAnimation()}, [] );

  return (

    <div>

        {/* navigation on smaller screens */}
        <section className='bg-black text-white p-3 rounded-[2rem] flex
        items-center justify-between m-3 md:hidden small-nav '>
            {/* logo */}
            <div>
                <h1 className='font-momo tracking-wide font-black
                capitalize cursor-pointer '>gwamaka</h1>
            </div>
            {/* menu icon logic */}
            <div className=''>
                {menu ? (
                    <XIcon onClick={ ()=> setMenu(!menu) }
                    className='cursor-pointer'
                    />
                ):(
                    <MenuIcon onClick={ ()=>(setMenu(!menu))}
                    className='cursor-pointer'
                    />
                ) }
            </div>
        </section>
        {/* navigation drawer in smaller screens */}
        {menu && (
            <div className='bg-black text-white h-auto mx-3 '>
                <nav className='flex items-start justify-start flex-col
                gap-y-3 '>
                <a href="#"
                className='inline-block capitalize font-nova tracking-wide
                text-[17px] px-2 py-1 '
                >home</a>
                <a href="#"
                className='inline-block capitalize font-nova tracking-wide
                text-[17px] px-2 py-1 '
                >home</a>
                <a href="#"
                className='inline-block capitalize font-nova tracking-wide
                text-[17px] px-2 py-1 '
                >home</a>
                </nav>
            </div>
        )}

        {/* navigation on medium to larger screens */}
        <section className='md:flex items-center justify-between px-6 py-3
        bg-black text-white rounded-[2rem] mx-[16rem] my-4 hidden nav '>
            {/* logo */}
            <div>
                <h1 className='font-momo tracking-wide font-black
                capitalize cursor-pointer '>gwamaka</h1>
            </div>
            {/* navigation */}
            <div>
                <nav className='flex items-start justify-start flex-row
                gap-x-3 '>
                <a href="#"
                className='inline-block capitalize font-nova tracking-wide
                text-[17px] px-2 py-1 '
                >home</a>
                <a href="#"
                className='inline-block capitalize font-nova tracking-wide
                text-[17px] px-2 py-1 '
                >home</a>
                <a href="#"
                className='inline-block capitalize font-nova tracking-wide
                text-[17px] px-2 py-1 '
                >home</a>
                </nav>
            </div>
            {/* contact us button */}
            <div>
                 <a href="#"
                className='inline-block capitalize font-nova tracking-wide
                text-[17px] px-2 py-1 font-black '
                >contact us</a>
            </div>
        </section>

    </div>

  )

}

export default NavigationComponent

