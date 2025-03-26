import React from 'react'

import CardBlogItem from './CardBlogItem'
function CardBlog() {
    return (
        <>

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
