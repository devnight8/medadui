import React from 'react'
import HeroSection from '../hero/HeroSection'
import CardBlog from '../ui/CardBlog'
import SectionTitle from '../ui/SectionTitle'

function HomePage() {
    return (
        <>
            <HeroSection />
            <SectionTitle title="مقالات" subTitle="مداد یوای" textButton="مشاهده همه" />
            <CardBlog />
        </>
    )
}

export default HomePage
