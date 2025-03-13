import Image from 'next/image'
import React from 'react'
import imageCard from "../../public/img/hero-card-complete.jpeg"
import Link from 'next/link'
import { TextAnimate } from '../magicui/text-animate'
function CardBlog() {
    return (

        <>
            <div className='flex justify-between '>
                <div className='flex mb-4 gap-1'>
                    <span className="flex text-3xl lg:text-3xl font-black ">
                        <TextAnimate animation="blurIn" duration={800} className="text-blue-500">
                            مقالات
                        </TextAnimate>
                    </span>
                    <span className="flex text-2xl  lg:text-3xl font-black ">
                        <TextAnimate animation="blurIn" duration={800} className="text-black">

                            مداد یوآی
                        </TextAnimate>
                    </span>
                </div>
                <div>
                    <button className='bg-white px-5 py-2 rounded-md border  hover:bg-gray-100 border-gray-100  transition-all duration-300'>همه مقالات</button>
                </div>
            </div>


            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4  mt-3'>
                <article className='bg-red hover:-translate-y-2 rounded-2xl overflow-hidden flex flex-col items-start gap-2 hover:shadow-2xl hover:transition-all transition-all duration-500'>
                    <Image src={imageCard} alt='iamge' className='w-full' />
                    <div className='p-4'>
                        <span className='text-gray-400 text-xl mb-2'>فیگما</span>
                        <Link href="/" className='text-xl font-black text-gray-900 truncate text-nowrap'><h2 className='truncate  max-w-[350px]'>آموزش نصب فونت در فیگما</h2></Link>
                        <div className='flex gap-x-5 mt-3 '>
                            <span className='text-xl font-medium text-gray-500'>دونایت</span>
                            <span className='text-xl font-medium text-gray-500'>26 دی 1403</span>
                        </div>
                    </div>
                </article >
                <article className='bg-red hover:-translate-y-2 rounded-2xl overflow-hidden flex flex-col items-start gap-2 hover:shadow-2xl hover:transition-all duration-500 transition-all '>
                    <Image src={imageCard} alt='iamge' className=' w-full' />
                    <div className='p-4'>
                        <span className='text-gray-400 text-xl mb-2'>فیگما</span>
                        <Link href="/" className='text-xl font-black text-gray-900 truncate text-nowrap'><h2 className='truncate  max-w-[350px]'>آموزش نصب فونت در فیگما</h2></Link>
                        <div className='flex gap-x-5 mt-3 '>
                            <span className='text-xl font-medium text-gray-500'>دونایت</span>
                            <span className='text-xl font-medium text-gray-500'>26 دی 1403</span>
                        </div>
                    </div>
                </article >
                <article className='bg-red hover:-translate-y-2 rounded-2xl overflow-hidden flex flex-col items-start gap-2 hover:shadow-2xl hover:transition-all  transition-all duration-500'>
                    <Image src={imageCard} alt='iamge' className=' w-full' />
                    <div className='p-4'>
                        <span className='text-gray-400 text-xl mb-2'>فیگما</span>
                        <Link href="/" className='text-xl font-black text-gray-900 truncate text-nowrap'><h2 className='truncate  max-w-[350px]'>آموزش نصب فونت در فیگما</h2></Link>
                        <div className='flex gap-x-5 mt-3 '>
                            <span className='text-xl font-medium text-gray-500'>دونایت</span>
                            <span className='text-xl font-medium text-gray-500'>26 دی 1403</span>
                        </div>
                    </div>
                </article >
                <article className='bg-red hover:-translate-y-2 rounded-2xl overflow-hidden flex flex-col items-start gap-2 hover:shadow-2xl hover:transition-all  transition-all duration-500'>
                    <Image src={imageCard} alt='iamge' className=' w-full' />
                    <div className='p-4'>
                        <span className='text-gray-400 text-xl mb-2'>فیگما</span>
                        <Link href="/" className='text-xl font-black text-gray-900 '><h2 className='truncate  max-w-[350px]'>آموزش نصب فونت در فیگما</h2></Link>
                        <div className='flex gap-x-5 mt-3 '>
                            <span className='text-xl font-medium text-gray-500'>دونایت</span>
                            <span className='text-xl font-medium text-gray-500'>26 دی 1403</span>
                        </div>
                    </div>
                </article >
            </div >
        </>
    )
}

export default CardBlog
