import { TextAnimate } from "../magicui/text-animate";

export function TextHero() {
  return (
    <section className="flex flex-col items-center justify-center z-10  ">
      <div className="flex text-6xl font-black mb-4">
        <TextAnimate animation="blurIn" duration={800} className="text-white">
          مداد یوآی
        </TextAnimate>
      </div>
      <div className="flex text-3xl font-medium mb-8">
        <TextAnimate animation="blurIn" duration={800} className="text-white">
          طراحی حرفه ای رو با ما تجربه کنید
        </TextAnimate>
      </div>
      <div>
        <TextAnimate
          animation="blurIn"
          by="word"
          duration={5}
          className="text-white w-1/2 text-center m-auto leading-8"
        >
          ۱۰ سال روزی ۱۰ ساعت با گرافیک زندگی کردم و اینجام تا مسیر موفقیت رو
          برات راحت‌تر کنم. فقط کافیه همراهم بشی و قول بدی برای آیندت حاضری تلاش
          کنی ✌
        </TextAnimate>
      </div>
    </section>
  );
}
