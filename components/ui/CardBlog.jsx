import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { TextAnimate } from '../magicui/text-animate'
import { Card } from '@heroui/react'
import CardBlogItem from './CardBlogItem'
import SectionTitle from './SectionTitle'
function CardBlog() {
    return (

        <>
            <SectionTitle title="مقالات" subTitle="مداد یوای" textButton="مشاهده همه" />
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4  mt-3'>
                <CardBlogItem />
                <CardBlogItem />
                <CardBlogItem />
                <CardBlogItem />
            </div >
        </>
    )
}

export default CardBlog
