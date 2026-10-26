import React from 'react'

const Contacts = () => {

  return (

    <div>
        {/* contacts section */}
        <section id='contacts'
        className='min-h-screen h-auto p-6 bg-[url("/hero2.webp")]
        bg-cover bg-center relative '>
            {/* overlay */}
            <div className='absolute inset-0 bg-gradient-to-b from-white
            to-sky-300/10 backdrop-blur-md '></div>
            {/* content div */}
            <div className='relative py-12 grid grid-cols-1 items-center justify-center
            gap-6 md:grid-cols-12 gap-8 md:items-start '>
                {/* heading */}
                <div className='md:col-span-6'>
                    <h2 className='font-momo font-black capitalize tracking-widest
                    text-[16px] md:text-[2rem] py-3 '>gwamaka</h2>
                    <p className='font-nova text-black/70 text-[16px] py-3
                    md:text-[24px] ' >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Magni possimus veritatis recusandae assumenda debitis
                        molestias tempore sint ex! Deleniti repellendus dignissimos
                        enim recusandae non.
                    </p>
                    <img src="/sketch.webp" alt=""
                    className='hidden md:block h-[15rem] w-full rounded-[.2rem] '
                    />
                </div>
                {/* contact form div */}
                <div className='border p-4 border-black/70 rounded-[.4rem]
                my-4 md:col-span-6 '>
                    <form action="#">
                        {/* name input */}
                        <div className='flex flex-col items-start my-3 '>
                            <p className='font-nova capitalize font-black text-[16px]
                            py-2 '>name</p>
                            <input type="text" placeholder='frank vincent' required
                            className='w-full outline-none border-b border-black/70
                            px-2 py-1 rounded-[.2rem] border-b-2 ' />
                        </div>
                        {/* email input */}
                        <div className='flex flex-col items-start my-3 '>
                            <p className='font-nova capitalize font-black text-[16px]
                            py-2 '>email address</p>
                            <input type="email" placeholder='info@gwamaka.com' required
                            className='w-full outline-none border-b border-black/70
                            px-2 py-1 rounded-[.2rem] border-b-2 ' />
                        </div>
                        {/* phone input */}
                        <div className='flex flex-col items-start my-3 '>
                            <p className='font-nova capitalize font-black text-[16px]
                            py-2 '>phone number</p>
                            <input type="number" placeholder='+255 766 355 608' required
                            className='w-full outline-none border-b border-black/70
                            px-2 py-1 rounded-[.2rem] border-b-2 ' />
                        </div>
                        {/* textarea input */}
                        <div className='flex flex-col items-start my-3 '>
                            <p className='font-nova capitalize font-black text-[16px]
                            py-2 '>message on the project</p>
                            <textarea placeholder='frank vincent' required
                            className='w-full outline-none border-b border-black/70
                            px-2 py-1 rounded-[.2rem] border-b-2 ' />
                        </div>
                        {/* submit button */}
                        <button className='text-white font-nova tracking-widest
                        bg-black px-2 py-1 rounded-[.2rem] my-3 cursor-pointer
                         ' >submit message</button>
                    </form>
                </div>
            </div>
        </section>

    </div>

  )

}

export default Contacts

