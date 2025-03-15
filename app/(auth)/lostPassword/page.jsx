"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

function LostPassword() {
    const [email, setEmail] = useState('')
    const router = useRouter()
    const submitHandler = (e) => {
        e.preventDefault();
        if (email) {
            toast.success('لینک فراموشی رمز برای شما ارسال شد ');
        } else {
            toast.error('لطفا تمامی فیلدها را پر کنید');
            return;
        }
        setTimeout(() => {
            router.push('/')
        }, 3000);
        console.log(email)
    }
    return (
        <section className='flex items-center justify-center h-screen'>
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" action="#">
                    <h5 className="text-xl text-gray-900 dark:text-white font-black text-center"> فراموشی رمز عبور  </h5>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ایمیل</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="name@company.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>


                    <button type="submit" onClick={submitHandler} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ارسال درخواست  </button>
                    <Toaster />

                </form>
            </div>
        </section>
    )
}

export default LostPassword
