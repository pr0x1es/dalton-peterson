import Navbar from "../../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Shorts from "../../components/Shorts";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="border-2 rounded-md p-7 mt-7">
        <h1 className="font-bold text-center text-3xl mb-7">
          Dalton&apos;s ASMR
        </h1>
        <div className="mt-7"></div>
        <Link
          href="https://www.youtube.com/@daltonsasmr"
          className="hover:italic hover:transition-all hover:font-bold transition-all"
        >
          <div className="text-center">Channel link</div>
        </Link>
      </div>

      <h1 className="text-center font-bold text-2xl mt-7">Videos</h1>
      <div className="flex flex-row justify-evenly">
        <div className="mt-7">
          <div className="border-4 rounded-2xl p-5">
            <h1>My first ASMR video 🥲</h1>
            <Link href="https://www.youtube.com/watch?v=Th0oRxtqON0">
              <Image src="/images/1.jpg" alt="" width="400" height="400" />
            </Link>
          </div>
        </div>

        <div className="mt-7">
          <div className="border-4 rounded-2xl p-5">
            <h1>[ASMR] Tapping triggers and stuff</h1>
            <Link href="https://www.youtube.com/watch?v=pU0uaOa0d_k">
              <Image src="/images/2.jpg" alt="" width="400" height="400" />
            </Link>
          </div>
        </div>
      </div>

      <h1 className="font-bold text-2xl text-center">Shorts</h1>
      <div>
        <Shorts />
      </div>
    </>
  );
}