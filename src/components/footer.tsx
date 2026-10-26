


const Footer = () => {

  return (

    <div>
        {/* footer section */}
        <section id="footer"
        className="min-h-screen h-screen bg-white text-black
        p-6 grid grid-cols-1 items-center justify-center md:gap-y-6
        gap-y-12 ">
            {/* first div */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-center
            justify-center md:items-start ">
                {/* heading div */}
                <div className="py-3 ">
                    <p className="font-nova text-[16px] italic font-thin py-3
                     ">perspective in motion</p>
                    <h3 className="font-momo font-black text-[24px] py-3
                    tracking-widest leading-[2.4rem] ">
                        Refusing the generic in architectural spaces.
                    </h3>
                </div>
                {/* sectional navigation div */}
                <div className="py-3 md:pt-[6rem] md:pb-3 ">
                    <h2 className="font-nova text-[24px] py-3
                    capitalize ">our space</h2>
                    <nav className="flex items-start justify-start flex-col
                    gap-2 capitalize ">
                        <a href="#hero"
                        className="text-black/70 font-nova text-[18px] "
                        >home</a>
                        <a href="#services"
                        className="text-black/70 font-nova text-[18px] "
                        >services</a>
                        <a href="#property"
                        className="text-black/70 font-nova text-[18px] "
                        >properties</a>
                        <a href="#values"
                        className="text-black/70 font-nova text-[18px] "
                        >our values</a>
                        <a href="#team"
                        className="text-black/70 font-nova text-[18px] "
                        >our team</a>
                        <a href="#fag"
                        className="text-black/70 font-nova text-[18px] "
                        >FAQ</a>
                    </nav>
                </div>
                {/* contacts / social media div */}
                <div className="py-3 md:pt-[6rem] md:pb-3 ">
                    <h2 className="font-nova text-[24px] py-3
                    capitalize ">our channels</h2>
                    <nav className="flex items-start justify-start flex-col
                    gap-2 capitalize ">
                        <a href="#"
                        className="text-black/70 font-nova text-[18px] "
                        >instagram</a>
                        <a href="#"
                        className="text-black/70 font-nova text-[18px] "
                        >youtube</a>
                        <a href="#"
                        className="text-black/70 font-nova text-[18px] "
                        >whatsapp</a>
                        <a href="#"
                        className="text-black/70 font-nova text-[18px] "
                        >tiktok</a>
                    </nav>
                </div>
            </div>
            {/* huge title div */}
            <div className="text-center ">
                <p className="text-center font-nova capitalize 
                text-[28px] font-black md:text-[7rem] ">
                    <span className="inline-block ">gwamaka real estates</span>
                    <span className="inline-block " >&nbsp;& constructions.</span>
                </p>
            </div>
            {/* rights div */}
            <div className="text-center ">
                <p className="text-black/70 capitalize md:py-2 md:text-[24px]
                ">&nbsp;2026 all rights preserved.</p>
            </div>
        </section>

    </div>

  )

}

export default Footer

