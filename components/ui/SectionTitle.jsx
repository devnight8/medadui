import React from 'react'
import { TextAnimate } from '../magicui/text-animate'

function SectionTitle({ title, subTitle, textButton = null }) {
    return (
        <div className='flex justify-between '>
            <div className='flex mb-4 gap-1'>
                <span className="flex text-3xl lg:text-3xl font-black ">
                    <TextAnimate animation="blurIn" duration={800} className="text-blue-500">
                        {title}
                    </TextAnimate>
                </span>
                <span className="flex text-2xl  lg:text-3xl font-black ">
                    <TextAnimate animation="blurIn" duration={800} className="text-black">

                        {subTitle}
                    </TextAnimate>
                </span>
            </div>
            <div>
                <button className='bg-white px-5 py-2 rounded-md border  hover:bg-gray-100 border-gray-100  transition-all duration-300'>
                    {textButton}
                </button>
            </div>
        </div>

    )
}

export default SectionTitle
