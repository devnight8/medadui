import Image from "next/image";
import iconSearch from "../../public/img/search-normal.svg"
import Link from "next/link";

export function Login() {
  return (
    <div className="flex items-center justify-center gap-4">
      <button id="searchIcon" className="bg-gray-100 rounded-full p-2 hover:bg-blue-50 transition-all">
        <Image src={iconSearch} width={24} height={24} alt="search icon" />
      </button>
      <Link href="/login" className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-900 transition-all">
        ثبت نام و ورود
      </Link>



    </div>

  );
}


