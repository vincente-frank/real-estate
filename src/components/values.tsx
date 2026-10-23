import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Grip } from 'lucide-react'




const Values = () => {

    gsap.registerPlugin(ScrollTrigger)

    function valuesAnimation ():gsap.core.Timeline {
        let valuesContainer = document.querySelector(".values-container")
        let values = document.querySelector(".values")
        let heading = document.querySelector(".values-heading")
        let description = document.querySelector(".values-description")
        let image = document.querySelector(".values-image")
        let innovative = document.querySelector(".innovative")
        let functionality = document.querySelector(".functionality")
        let modern = document.querySelector(".modern")
        let duration = 2
        const tl = gsap.timeline()
        .from(values, {opacity:0, scale:0.4, y:80, duration:duration, ease:"power1"})
        .from(heading, {opacity:0, y:80, duration:duration, ease:"back"})
        .from(description, {opacity:0, y:80, duration:duration, ease:"back"})
        .from(image, {opacity:0, scale:0.4, y:80, duration:duration, ease:"power"})
        .from(innovative, {opacity:0, y:80, duration:duration, ease:"back"})
        .from(functionality, {opacity:0, y:80, duration:duration, ease:"back"})
        .from(modern, {opacity:0, y:80, duration:duration, ease:"back"})

        ScrollTrigger.create({
            trigger: valuesContainer,
            start: "top 80%",
            end: "+=500",
            toggleActions: "play none none none",
            animation: tl,
        })

        return tl;
    }

    useGSAP ( ()=> { valuesAnimation() }, [] );

  return (

    <div>

        {/* our values, our foundation section */}
        <section className='min-h-screen h-auto p-6 values-container '>
            {/* heading div */}
            <div className='flex items-start justify-start flex-col
            md:flex-row '>
                {/* text div */}
                <div className='py-3 md:w-[85%] '>
                    {/* our values label */}
                    <div className='flex items-center  justify-start gap-x-1
                    values '>
                        <Grip className='size-5'/>
                        <p className='font-nova text-[20px] capitalize py-4 '>
                            our values
                        </p>
                    </div>
                    {/* heading */}
                    <h2 className='font-momo font-black capitalize tracking-widest
                    text-[18px] py-3 md:text-[2rem] values-heading '>our values, our foundation</h2>
                    {/* description */}
                    <p className='font-nova text-[18px] py-3 text-black/70 md:text-[24px]
                    md:pr-[35rem] values-description '>
                        Our values shape every design - integrity, innovation, excellence,
                        and sustainability - creating spaces that inspire, endure, and
                        enhance lives.
                    </p>
                </div>
                {/* button or link div */}
                <div className='py-3 md:pt-[15rem]'>
                    <a href="#"
                    className='font-momo font-medium text-[18px] tracking-wide
                    capitalize outline outline-2 outline-offet-2 px-2 py-1
                    rounded-[.2rem] md:text-[24px] hover:text-black/70
                    transition-all ease-in-out duration-700
                     '>learn more</a>
                </div>
            </div>
            {/* sketched image div */}
            <div>
                <img src="/sketch.webp" alt="" className='values-image' />
                <div className='flex flex-col item-center justify-center
                md:flex-row md:justify-evenly '>
                    <p className='font-momo font-medium capitalize innovative
                    tracking-widest text-center py-1 md:text-[2rem] '>innovative</p>
                    <p className='font-momo font-medium capitalize functionality
                    tracking-widest text-center py-1 md:text-[2rem] '>functionality</p>
                    <p className='font-momo font-medium capitalize modern
                    tracking-widest text-center py-1 md:text-[2rem] '>modern</p>
                </div>
            </div>
        </section>

    </div>

  )

}

export default Values

