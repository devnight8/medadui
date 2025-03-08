"use client"

import Image from "next/image";
import iconSearch from "../../public/img/search-normal.svg"
import Link from "next/link";
import { useState } from "react";

export function Login() {
  const [showAlert, setShowAlert] = useState(false)
  function showModalSearch() {
    setShowAlert(true)
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  }
  return (
    <div className="flex items-center justify-center gap-4">
      {showAlert ? (<p className="absolute top-24 z-10 rounded text-center left-0 right-0 p-2 bg-red-400 text-white m-auto w-fit px-20 ">سرچ بار فعال نیست !</p>) : null}
      <button onClick={showModalSearch} className="bg-gray-100 rounded-full p-2 hover:bg-blue-50 transition-all" >
        <Image src={iconSearch} width={24} height={24} alt="search icon" />
      </button>
      <Link href="/login" className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-900 transition-all">
        ثبت نام و ورود
      </Link>
    </div>

  );
}


