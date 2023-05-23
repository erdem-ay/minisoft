import React from 'react'
import allYouNeedToStart from "../assets/features/all-you-need-to-start.png"
import customizeAndExtend from "../assets/features/customize-and-extend.png"
import activeCommunity from "../assets/features/active-community.png"

const Features = () => {
    return (
        <div className='flex flex-col'>
            <p className="flex flex-col items-center justify-center font-semibold text-3xl leading-10 text-center text-[#272D4E]">
                Your eCommerce <br />
                made simple
            </p>
            <div className='flex justify-between px-4'>
                <div className='mt-8 w-1/3'>
                    <div className='w-full'>
                        <img src={allYouNeedToStart} alt="" className='w-full' />
                    </div>
                    <div className='flex flex-col gap-4 ml-auto mr-4 w-9/12'>
                        <h3 className="text-2xl text-[#272D4E]">All You Need to Start</h3>
                        <p className="text-[#94A2B3]">Add WooCommerce plugin to any WordPress site and set up a new store in minutes.</p>
                        <p className="text-[#299EF3]">Ecommerce for Wordpress ›</p>
                    </div>
                </div>
                <div className='mt-16 w-1/3'>
                    <div className=''>
                        <img src={customizeAndExtend} alt="" />
                    </div>
                    <div className='flex flex-col gap-4 mx-8'>
                        <h3 className="text-2xl text-[#272D4E]">Customize and Extend</h3>
                        <p className="text-[#94A2B3]">From subscriptions to gym classes to luxury cars, WooCommerce is fully customizable.</p>
                        <p className="text-[#299EF3]">Browse Extensions ›</p>
                    </div>
                </div>
                <div className='mt-24 w-1/3'>
                    <div className=''>
                        <img src={activeCommunity} alt="" />
                    </div>
                    <div className='flex flex-col gap-4 mx-8'>
                        <h3 className="text-2xl text-[#272D4E]">Active Community</h3>
                        <p className="text-[#94A2B3]">WooCommerce is one of the fastest-growing eCommerce communities.</p>
                        <p className="text-[#299EF3]">Check our Forums ›</p>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Features