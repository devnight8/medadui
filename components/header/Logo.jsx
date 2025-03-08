import Link from "next/link";
import { TextAnimate } from "../magicui/text-animate";

export function Logo() {
  return (
    <Link href="/">
      <h1 className="flex text-3xl font-black ">
        <TextAnimate animation="blurIn" className="text-blue-600">
          مداد
        </TextAnimate>
        <span>
          <TextAnimate animation="blurIn">یوای</TextAnimate>
        </span>
      </h1>
    </Link>
  );
}
