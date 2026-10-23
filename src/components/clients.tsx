import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Grip } from 'lucide-react'

const Clients = () => {

    gsap.registerPlugin(ScrollTrigger)

    
    function clientAnimation ():gsap.core.Timeline {
        let container = document.querySelector(".container")
        let clients = document.querySelector(".clients")
        let grip = document.querySelector(".grip")
        let heading = document.querySelector(".heading")
        let description = document.querySelector(".client-description")
        let duration = 2
        const tl = gsap.timeline()
        .from(grip, {opacity:0, y:80, scale:0.4, ease:"back.out", duration:duration})
        .from(heading, {opacity:0, xPercent:-250, ease:"back", duration:duration},"-=1.4")
        .from(description, {opacity:0, y:80, ease:"back", duration:duration})
        .from(clients, {opacity:0, y:80, ease:"back", duration:duration},"-=1.5")

        ScrollTrigger.create({
            trigger: container,
            start: "top 80%",
            end: "+=500",
            animation: tl,
            toggleActions: "play none none none",
        })

        return tl;
    }

    useGSAP ( ()=> { clientAnimation() }, [] );

  return (

    <div>
        {/* clients section */}
        <section className='h-auto px-6 bg-white text-left py-12 container ' >
            {/* client label */}
            <div className='flex items-center  justify-start gap-x-1
            grip '>
                <Grip className='size-5'/>
                <p className='font-nova text-[20px] capitalize py-4 '>Clients</p>
            </div>
            {/* heading */}
            <h2 className='font-momo font-black capitalize tracking-widest
            text-[18px] py-3 md:text-[2rem] heading '>estemeed clients over the years</h2>
            {/* description */}
            <p className='font-nova text-[18px] py-3 text-black/70 md:text-[32px]
            md:pr-[15rem] client-description '>
                We're honored to have partnered with these reputable
                organizations on impactful architectural projects through
                the decades.
            </p>
            {/* container for client logos */}
            <div className='grid grid-cols-2 items-center justify-center
            gap-x-6 gap-y-12 md:grid-cols-4 md:gap-x-16 py-12 clients '>
                {/* client one */}
                <div>
                    <p className='font-momo font-black text-[24px]
                    text-black/50 tracking-wide '>epek</p>
                </div>
                {/* client two */}
                <div>
                    <p className='font-momo font-black text-[24px]
                    text-black/50 tracking-wide '>epek</p>
                </div>
                {/* client three */}
                <div>
                    <p className='font-momo font-black text-[24px]
                    text-black/50 tracking-wide '>epek</p>
                </div>
                {/* client four */}
                <div>
                    <p className='font-momo font-black text-[24px]
                    text-black/50 tracking-wide '>epek</p>
                </div>
            </div>

        </section>
    </div>

  )

}

export default Clients

