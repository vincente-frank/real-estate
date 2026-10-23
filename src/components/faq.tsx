import { Grip, PlusCircleIcon, XCircleIcon } from "lucide-react"
import { useState } from "react"
import { Questions } from "../utils/questions"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";



const FAQ = () => {

    gsap.registerPlugin(ScrollTrigger)

    const [activeQuestion, setActiveQuestion] = useState<number | null>(null)

    

    function faqAnimation ():gsap.core.Timeline {
        let faqContainer = document.querySelector(".faq-container")
        let title = document.querySelector(".faq-title")
        let description = document.querySelector(".faq-description")
        let faq = document.querySelector(".faq")
        let duration = 2
        const tl = gsap.timeline()
        .from(faq, {opacity:0, scale:0.4, ease:"back", duration:duration})
        .from(title, {opacity:0, ease:"power1.inOut", duration:duration, y:80})
        .from(description, {opacity:0, ease:"power1.inOut", duration:duration, y:80})

        ScrollTrigger.create({
            trigger: faqContainer,
            animation: tl,
            start: "top 80%",
            toggleActions: "play none none none",
        })

        return tl;
    }

    useGSAP ( ()=> { faqAnimation() }, []);


  return (

    <div>
        {/* faq section */}
        <section className="min-h-screen h-auto px-6 py-12 faq-container ">
            {/* team label */}
            <div className='flex items-center  justify-start gap-x-1
            md:col-span-3 faq '>
                <Grip className='size-5' />
                <p className='font-nova text-[20px] uppercase py-4
                 '>faq</p>
            </div>
            <h2 className='font-momo font-black capitalize tracking-widest
            text-[24px] py-3 md:text-[2.4rem] faq-title
             '> frequently asked questions</h2>
            <p className='font-nova text-[18px] py-3 text-black/70 md:text-[24px]
            md:pr-[28rem] md:text-[32px] faq-description '>
                Find answers to common questionss about our services, design process,
                sustainability, project timelines, and architectural expertise.
            </p>

            {/* faq questions container div */}
            <div className="py-12 md:pr-[12rem] ">
                { Questions.map ( (question, index) => (
                    <div key={question.id}>
                        {/* question heading div */}
                        <div className="flex items-center justify-between py-3 ">
                            {/* question with number */}
                            <div className="flex items-center gap-x-3 py-4">
                                <span className="font-momo font-black md:text-[24px]
                                "> 0{index + 1}. </span>
                                <p className="font-momo md:text-[32px] "> {question.question} </p>
                            </div>
                            {/* changing icon */}
                            <div>
                                { activeQuestion === index ? (
                                    <XCircleIcon onClick={ ()=> setActiveQuestion(null) }
                                    className="cursor-pointer md:size-12 "/>
                                ):(
                                    <PlusCircleIcon onClick={ ()=> setActiveQuestion(index) }
                                    className="cursor-pointer md:size-12 "/>
                                ) }
                            </div>
                        </div>
                        {/* answer div */}
                        <div>
                            {activeQuestion === index && (
                                <p className="font-nova text-black/70 py-3 md:text-[24px]
                                border-b border-black/70 rounded-[.3rem]
                                 "> {question.answer} </p>
                            )}
                        </div>
                    </div>
                ) ) }
            </div>

        </section>

    </div>

  )

}

export default FAQ

