import { Grip } from "lucide-react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";



const Team = () => {

     gsap.registerPlugin(ScrollTrigger)

    function teamAnimation ():gsap.core.Timeline {
        let teamContainer = document.querySelector(".team-container")
        let title = document.querySelector(".team-title")
        let description = document.querySelector(".team-description")
        let property = document.querySelector(".team")
        let duration = 2
        const tl = gsap.timeline()
        .from(property, {opacity:0, scale:0.4, ease:"back", duration:duration})
        .from(title, {opacity:0, ease:"power1.inOut", duration:duration, y:80})
        .from(description, {opacity:0, ease:"power1.inOut", duration:duration, y:80})

        ScrollTrigger.create({
            trigger: teamContainer,
            animation: tl,
            start: "top 80%",
            toggleActions: "play none none none",
        })

        return tl;
    }

    useGSAP ( ()=> { teamAnimation() }, []);

  return (

    <div>
        {/* team section */}
        <section className="min-h-screen h-auto p-6 team-container ">
            {/* team label */}
            <div className='flex items-center  justify-start gap-x-1
            md:col-span-3 team '>
                <Grip className='size-5' />
                <p className='font-nova text-[20px] capitalize py-4
                 '>our team</p>
            </div>
            <h2 className='font-momo font-black capitalize tracking-widest
            text-[24px] py-3 md:text-[2.4rem] team-title '>meet our team</h2>
            <p className='font-nova text-[18px] py-3 text-black/70 md:text-[24px]
            md:pr-[28rem] md:text-[32px] team-description '>
                A passionate group of architects, designers and visionaries
                dedicated to crafting innovative, sustainable, and timeless
                spaces.
            </p>
            {/* team container div */}
            <div className="flex items-start justify-start flex-col gap-6
            md:flex-row " >
                {/* first member of the team */}
                <div className="bg-[url('/hero.webp')] h-[20rem] w-full bg-cover
                bg-center relative rounded-[1rem] cursor-pointer ">
                    <div className="absolute inset-0 bg-gradient-to-t
                    from-sky-400 to-transparent rounded-[1rem] "></div>
                    {/* content */}
                    <div className="z-10 text-black absolute bottom-5 left-5 right-5
                    text-left font-nova ">
                        <h3 className="font-black capitalize text-[20px] "> aisha yahya </h3>
                        <p className="py-1">legal officer</p>
                    </div>
                </div>
                {/* second member of the team */}
                <div className="bg-[url('/hero.webp')] h-[20rem] w-full bg-cover
                bg-center relative rounded-[1rem] cursor-pointer ">
                    <div className="absolute inset-0 bg-gradient-to-t
                    from-sky-400 to-transparent rounded-[1rem] "></div>
                    {/* content */}
                    <div className="z-10 text-black absolute bottom-5 left-5 right-5
                    text-left font-nova ">
                        <h3 className="font-black capitalize text-[20px] "> aisha yahya </h3>
                        <p className="py-1">legal officer 2</p>
                    </div>
                </div>
                {/* third member of the team */}
                <div className="bg-[url('/hero.webp')] h-[20rem] w-full bg-cover
                bg-center relative rounded-[1rem] cursor-pointer ">
                    <div className="absolute inset-0 bg-gradient-to-t
                    from-sky-400 to-transparent rounded-[1rem] "></div>
                    {/* content */}
                    <div className="z-10 text-black absolute bottom-5 left-5 right-5
                    text-left font-nova ">
                        <h3 className="font-black capitalize text-[20px] "> aisha yahya </h3>
                        <p className="py-1">legal officer 3</p>
                    </div>
                </div>
                {/* fourth member of the team */}
                <div className="bg-[url('/hero.webp')] h-[20rem] w-full bg-cover
                bg-center relative rounded-[1rem] cursor-pointer ">
                    <div className="absolute inset-0 bg-gradient-to-t
                    from-sky-400 to-transparent rounded-[1rem] "></div>
                    {/* content */}
                    <div className="z-10 text-black absolute bottom-5 left-5 right-5
                    text-left font-nova ">
                        <h3 className="font-black capitalize text-[20px] "> aisha yahya </h3>
                        <p className="py-1">legal officer 4</p>
                    </div>
                </div>
            </div>

        </section>

    </div>

  )

}

export default Team

