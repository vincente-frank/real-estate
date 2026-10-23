import { ChevronLeft, ChevronRight, Grip, } from "lucide-react"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react"



const Property = () => {

  return (

    <div>
        {/* property section */}
        <section className="min-h-screen h-auto px-6 pt-16 pb-12 ">
            {/* property headings */}
            <div className="py-12">
                {/* property label */}
                <div className='flex items-center  justify-start gap-x-1
                md:col-span-3 property '>
                    <Grip className='size-5'/>
                    <p className='font-nova text-[20px] capitalize py-4 '>property</p>
                </div>
                {/* title */}
                <h2 className='font-momo font-black capitalize tracking-widest
                 text-[24px] py-3 md:text-[2.4rem] title '>renting house & sell property</h2>
                <p className='font-nova text-[18px] py-3 text-black/70 md:text-[24px]
                md:pr-[28rem] md:text-[32px] '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt ut soluta fugit!
                </p>
            </div>
            {/* property carousel container */}
            <div className="relative py-12">

                <Swiper
                modules={[Navigation, Pagination, EffectFade, Autoplay]}
                pagination={{clickable: true}}
                navigation={{
                    nextEl:".custom-next",
                    prevEl:".custom-prev"
                }}
                effect="fade"
                loop={true}
                slidesPerView={1}>
                    {/* the first carousel */}
                    <SwiperSlide style={{height:"auto"}}
                     className="bg-white rounded-[1rem] p-3 ">
                        <p className="font-nova text-black/40 capitalize
                        py-2 font-black md:text-[24px] ">discover</p>
                        <h3 className="font-momo capitalize font-black
                        tracking-widest py-2 md:text-[32px] ">iconic project highlights</h3>
                        <p className="font-nova text-[18px] text-black/70 py-3
                        md:text-[24px] md:pr-[20rem] md:pb-6 ">
                            Dive into detailed case studies of remarkable
                            architectural projects, showcasing creativity,
                            and sustainability
                        </p>
                        <div className="bg-[url('/hero.webp')] bg-cover relative
                        h-[11.8rem] md:h-[20rem] bg-right rounded-[.3rem] ">
                            <div className="absolute inset-0 bg-gradient-to-b
                            from-white to-sky-300/20 "></div>
                        </div>
                     </SwiperSlide>
                    {/* the second carousel */}
                    <SwiperSlide style={{height:"auto"}}
                     className="bg-white rounded-[1rem] p-3 ">
                        <p className="font-nova text-black/40 capitalize
                        py-2 font-black md:text-[24px] ">discover</p>
                        <h3 className="font-momo capitalize font-black
                        tracking-widest py-2 md:text-[32px] ">iconic project highlights</h3>
                        <p className="font-nova text-[18px] text-black/70 py-3
                        md:text-[24px] md:pr-[20rem] md:pb-6 ">
                            Dive into detailed case studies of remarkable
                            architectural projects, showcasing creativity,
                            and sustainability
                        </p>
                        <div className="bg-[url('/hero2.webp')] bg-cover relative
                        h-[11.8rem] md:h-[20rem] bg-right rounded-[.3rem] ">
                        <div className="absolute inset-0 bg-gradient-to-b
                        from-white to-sky-300/20 "></div>
                        </div>
                    </SwiperSlide>
                    {/* the third carousel */}
                    <SwiperSlide style={{height:"auto"}}
                     className="bg-white rounded-[1rem] p-3 ">
                        <p className="font-nova text-black/40 capitalize
                        py-2 font-black md:text-[24px] ">discover</p>
                        <h3 className="font-momo capitalize font-black
                        tracking-widest py-2 md:text-[32px] ">iconic project highlights</h3>
                        <p className="font-nova text-[18px] text-black/70 py-3
                        md:text-[24px] md:pr-[20rem] md:pb-6 ">
                            Dive into detailed case studies of remarkable
                            architectural projects, showcasing creativity,
                            and sustainability
                        </p>
                        <div className="bg-[url('/sketch.webp')] bg-cover relative
                        h-[11.8rem] md:h-[20rem] bg-right rounded-[.3rem] ">
                        <div className="absolute inset-0 bg-gradient-to-b
                        from-white to-sky-300/20 "></div>
                        </div>
                    </SwiperSlide>
                    


                </Swiper>
                {/* custom navigation */}
                <div className="absolute bottom-18 left-5 z-10 flex gap-3
                z-10 ">
                    {/* previous button */}
                    <ChevronLeft className="bg-white rounded-full size-10 p-2 custom-prev
                    cursor-pointer"/>
                    {/* next button */}
                    <ChevronRight className="bg-white rounded-full size-10 p-2 custom-next
                    cursor-pointer"/>
                </div>

            </div>

        </section>
    </div>

  )

}

export default Property

