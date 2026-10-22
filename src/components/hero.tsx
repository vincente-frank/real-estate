import React from 'react'
import NavigationComponent from './navigation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import TextPlugin from 'gsap/TextPlugin'
import { useGSAP } from '@gsap/react'

const Hero = () => {

    gsap.registerPlugin(ScrollTrigger, SplitText, TextPlugin)

    function heroAnimation ():gsap.core.Timeline {
        let hero = document.querySelector(".hero")
        let word1 = document.querySelector(".word1")
        let word2 = document.querySelector(".word2")
        let description = document.querySelector(".description")
        let link = document.querySelector(".link")
        let duration = 2
        const tl = gsap.timeline()
        .set(hero, {autoAlpha: 1})
        .from(word1, {opacity:0, xPercent:-100, ease:"back", duration:duration})
        .from(word2, {opacity:0, y:80, ease:"back", duration:duration},"-=1.3")
        .from(description, {opacity:0, y:80, ease:"back", duration:duration})
        .from(link, {opacity:0, y:80, ease:"back", duration:duration,
            scale:0.4})
        return tl;
    }

    useGSAP( ()=>{
        heroAnimation()
    }, []);

  return (

    <div>
        {/* the hero section */}
        <section className='min-h-screen h-auto p-6 relative bg-cover
        bg-[url("/hero.webp")] bg-center md:bg-bottom bg-fixed hero ' >
            {/* overlay */}
            <div className='absolute inset-0 bg-gradient-to-b from-sky-400
            to-black/40 '></div>
            {/* the content */}
            <div className='relative text-left '>
                {/* navigation */}
                <NavigationComponent/>
                {/* heading */}
                <h1 className='pt-24 font-momo text-[16px] font-black
                pb-4 text-white md:pt-18 '>
                    <span className='inline-block capitalize word1
                    md:text-[3rem] '>gwamaka real estates</span> <br />
                    <span className='inline-block font-thin lowercase
                    tracking-wide font-nova text-[20px] md:text-[3rem] word2
                     '>&nbsp;& constructions</span>
                </h1>
                {/* descriptions */}
                <p className='font-nova tracking-wide text-[24px] font-thin
                py-4 text-white md:pr-[16rem] md:text-[32px] description '>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem quisquam provident ducimus?
                </p>
                {/* linkk or button to contacts us */}
                <a href="#"
                className='bg-white px-2 py-1 rounded-[.2rem] font-black font-nova
                text-[20px] my-4 inline-block md:my-8 link '
                >what we do</a>
            </div>
        </section>
    </div>

  )

}

export default Hero

