import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import imageCard from "../../public/img/hero-card-complete.jpeg"

function CardBlogItem() {
    return (
        <>
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
        </>
    )
}

export default CardBlogItem
