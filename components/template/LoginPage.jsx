"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const submitHandler = (e) => {
        e.preventDefault();
        if (email && password) {
            toast.success(' ورود با موفقیت انجام شد');
        } else {
            toast.error('لطفا تمامی فیلدها را پر کنید');
            return;
        }
        console.log(email,
            password)
        setTimeout(() => {
            router.push('/')
        }, 3000);

    }
    return (
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" action="#">
                <h5 className="text-xl text-gray-900 dark:text-white font-black text-center"> ورود در مداد یوای</h5>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ایمیل</label>
                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">رمز عبور</label>
                    <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div>
                <div className="flex items-start">

                    <Link href="/lostPassword" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">فراموشی رمز عبور</Link>
                </div>
                <button type="submit" onClick={submitHandler} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ورود به سایت</button>
                <Toaster />
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    ثبت نام نکردی ؟ <Link href="/register" className="text-blue-700 hover:underline dark:text-blue-500">ایجاد حساب کاربری</Link>
                </div>
            </form>
        </div>
    )
}

export default LoginPage
