import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, Grip } from 'lucide-react'



const Services = () => {

    gsap.registerPlugin(ScrollTrigger)

    function servicesAnimation ():gsap.core.Timeline {
        let servicesContainer = document.querySelector(".services-container")
        let architecture = document.querySelector(".architecture")
        let heading = document.querySelector(".title")
        let description = document.querySelector(".services-description")
        let services = document.querySelector(".services")
        let duration = 2
        const tl = gsap.timeline()
        .from(architecture, {opacity:0, scale:0, y:80,
            duration:duration, ease:"back.in"
        })
        .from(heading, {opacity:0, y:80, duration:duration, ease:"back"})
        .from(description, {opacity:0, y:80, duration:duration, ease:"back"})
        .from(services, {opacity:0, scale:0.4, y:80,
            duration:duration, ease:"back"
        })

        ScrollTrigger.create({
            trigger: servicesContainer,
            start: "top 80%",
            end: "+=500",
            toggleActions: "play none none none",
            animation: tl
        })
        return tl;
    }

    useGSAP ( ()=> { servicesAnimation() }, [] );

  return (

    <div>
        {/* services section */}
        <section className='min-h-screen h-auto p-6 bg-white text-black
        font-nova services-container '>
            {/* services heading */}
                <div className='grid grid-cols-1 items-start justify-center
                md:grid-cols-12 ' >
                {/* architecture label */}
                <div className='flex items-center  justify-start gap-x-1
                md:col-span-3 architecture '>
                <Grip className='size-5'/>
                <p className='font-nova text-[20px] capitalize py-4 '>
                architecture
                </p>
                </div>
                {/* heading */}
                <div className='md:col-span-9 ' >
                    <h2 className='font-momo font-black capitalize tracking-widest
                    text-[24px] py-3 md:text-[2.4rem] title '>our services</h2>
                    <p className='font-nova text-[18px] py-3 text-black/70 md:text-[24px]
                    md:pr-[.1rem] services-description '>
                        Our services blend innovative design, sustainability,
                        and functionality to create visionary architectural
                        solutions that transform spaces and  enhance everday
                        experiences.
                    </p>
                </div>
            </div>
            {/* services container */}
            <div className='grid grid-cols-1 items-center justify-center
            md:grid-cols-12 gap-x-6 gap-y-12 md:items-start pt-12 pb-6 services '>
                {/* urban planning */}
                <div className='rounded-[.2rem] h-auto rounded-[.8rem] shadow
                py-3 px-6 shadow-black/50 shadow-md relative cursor-pointer
                md:col-span-5 h-full '>
                    <p className='text-[24px] font-black '>01</p>
                    <h3 className=' font-bold text-[18px] capitalize tracking-wide
                     '>urban planning</h3>
                    <p className='py-3 '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laudantium earum tenetur odio.
                    </p>
                    {/* the image */}
                    <img src="/hero2.webp" alt=""
                    className='rounded-[1rem] md:h-[40rem] w-full saturate-200
                    object-cover object-center '
                    />
                    {/* link to contacts */}
                    <a href="#"
                    className='bg-white rounded-full absolute bottom-8 left-12 '>
                        <ArrowUpRight className='size-7'/>
                    </a>
                </div>
                {/* other services */}
                <div className='md:col-span-7 grid grid-cols-1 md:grid-cols-2
                gap-4 '>
                    {/* feasibilitiy studies */}
                    <div className='rounded-[.2rem] h-auto rounded-[.8rem] shadow
                    py-3 px-6 relative cursor-pointer '>
                    <p className='text-[24px] font-black '>02</p>
                    <h3 className=' font-bold text-[18px] capitalize tracking-wide
                    '>feasibility studies</h3>
                    <p className='py-3 '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium earum tenetur odio.
                    </p>
                    {/* the image */}
                    <img src="/hero2.webp" alt=""
                    className='rounded-[1rem] w-full saturate-200 '
                    />
                    {/* link to contacts */}
                    <a href="#"
                    className='bg-white rounded-full absolute bottom-8 left-12 '>
                    <ArrowUpRight className='size-7'/>
                    </a>
                    </div>
                    {/* interior design */}
                    <div className='rounded-[.2rem] h-auto rounded-[.8rem] shadow
                    py-3 px-6 relative cursor-pointer '>
                    <p className='text-[24px] font-black '>03</p>
                    <h3 className=' font-bold text-[18px] capitalize tracking-wide
                    '>interior design</h3>
                    <p className='py-3 '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium earum tenetur odio.
                    </p>
                    {/* the image */}
                    <img src="/hero2.webp" alt=""
                    className='rounded-[1rem] w-full saturate-200 '
                    />
                    {/* link to contacts */}
                    <a href="#"
                    className='bg-white rounded-full absolute bottom-8 left-12 '>
                    <ArrowUpRight className='size-7'/>
                    </a>
                    </div>
                    {/* landscapping design */}
                    <div className='rounded-[.2rem] h-auto rounded-[.8rem] shadow
                    py-3 px-6 relative cursor-pointer '>
                    <p className='text-[24px] font-black '>04</p>
                    <h3 className=' font-bold text-[18px] capitalize tracking-wide
                    '>landscaping design</h3>
                    <p className='py-3 '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium earum tenetur odio.
                    </p>
                    {/* the image */}
                    <img src="/hero2.webp" alt=""
                    className='rounded-[1rem] w-full saturate-200 '
                    />
                    {/* link to contacts */}
                    <a href="#"
                    className='bg-white rounded-full absolute bottom-8 left-12 '>
                    <ArrowUpRight className='size-7'/>
                    </a>
                    </div>
                    {/* building renovation */}
                    <div className='rounded-[.2rem] h-auto rounded-[.8rem] shadow
                    py-3 px-6 relative cursor-pointer '>
                    <p className='text-[24px] font-black '>05</p>
                    <h3 className=' font-bold text-[18px] capitalize tracking-wide
                    '>building renovation</h3>
                    <p className='py-3 '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium earum tenetur odio.
                    </p>
                    {/* the image */}
                    <img src="/hero2.webp" alt=""
                    className='rounded-[1rem] w-full saturate-200 '
                    />
                    {/* link to contacts */}
                    <a href="#"
                    className='bg-white rounded-full absolute bottom-8 left-12 '>
                    <ArrowUpRight className='size-7'/>
                    </a>
                    </div>
                </div>
                
                
            </div>

        </section>

        {/* huge image secction */}
        <section className='h-screen bg-[url("/hero.webp")] bg-cover
        bg-center md:bg-bottom grayscale '></section>

    </div>

  )

}

export default Services

