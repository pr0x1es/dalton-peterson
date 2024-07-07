import Image from "next/image";
import Link from "next/link";

export default function Shorts() {
  return (
    <div className="flex justify-evenly flex-col">
      <div className="mt-7">
        <div className="border-4 rounded-2xl p-8 bg-stone-950 hover:bg-neutral-900 hover:transition-all transition-all hover:rounded-3xl">
          <h1 className="text-center mb-7 text-lg">
            My first ASMR video #asmr
          </h1>
          <div className="flex place-content-center">
            <Link href="https://www.youtube.com/watch?v=Th0oRxtqON0">
              <Image
                src="/images/3.jpg"
                alt=""
                width="800"
                height="400"
                className="rounded-3xl"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-7">
        <div className="border-4 rounded-2xl p-8 bg-stone-950 hover:bg-neutral-900 hover:transition-all transition-all hover:rounded-3xl">
          <h1 className="text-center mb-7 text-lg">English or Spanish #asmr</h1>
          <div className="flex place-content-center">
            <Link href="https://www.youtube.com/watch?v=Th0oRxtqON0">
              <Image
                src="/images/5.jpg"
                alt=""
                width="800"
                height="400"
                className="rounded-3xl"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-7">
        <div className="border-4 rounded-2xl p-8 bg-stone-950 hover:bg-neutral-900 hover:transition-all transition-all  hover:rounded-3xl">
          <h1 className="text-center mb-7 text-lg">
            ASMR Brainrot Quiz #asmr #viral #fyp
          </h1>
          <div className="flex place-content-center">
            <Link href="https://www.youtube.com/watch?v=Th0oRxtqON0">
              <Image
                src="/images/4.jpg"
                alt=""
                width="800"
                height="400"
                className="rounded-3xl"
              />
            </Link>
          </div>
        </div>
        <div className="mt-7">
          <div className="border-4 rounded-2xl p-8 bg-stone-950 hover:bg-neutral-900 hover:transition-all transition-all  hover:rounded-3xl">
            <h1 className="text-center mb-7 text-lg">
              Your Rizz is low #asmr #fyp #viral
            </h1>
            <div className="flex place-content-center">
              <Link href="https://www.youtube.com/watch?v=Th0oRxtqON0">
                <Image
                  src="/images/6.jpg"
                  alt=""
                  width="800"
                  height="400"
                  className="rounded-3xl"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
