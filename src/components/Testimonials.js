import React from 'react'
import testimonialsBg from "../assets/testimonials-bg.png"
import comment from "../assets/testimonails-comment.png"

const Testimonials = () => {
    return (
        <div
            className="pt-20"
            style={{
                backgroundImage: `url(${testimonialsBg})`,
                backgroundRepeat: "no-repeat",
                width: "100%",
                backgroundSize: "cover",
                height: "100vh",
            }}
        >
            <div className='flex flex-col'>
                <div className='mx-auto'>
                    <h3 class="font-circular font-bold text-55 leading-70 text-3xl text-center text-blue-900">
                        Trusted by Agencies <br />& Store Owners
                    </h3>
                </div>
                <div className='relative flex w-5/12 mx-auto mt-32 h-4/12'>
                    <div>
                        <img src={comment} alt="" />
                        <p class="font-circular font-normal w-6/12 m-auto  -mt-[280px] leading-32 text-center">
                            No other eCommerce platform allows people to start for free and grow their store as their business grows. More importantly, WooCommerce doesn't charge you a portion of your profits as your business grows!
                        </p>
                    </div>
                    <div class="absolute w-5/12 h-198 left-677 top-3741 flex justify-center items-center">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials