import Navbar from "../../components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="border-2 rounded-md">
        <div className="mb-7"></div>
        <h1 className="font-bold text-center text-2xl">
          Hello and welcome to Dalton&apos;s ASMR!
        </h1>
        <h2>This website was actually coded and programmed by me.</h2>
        <h2>This will be where I put the newest videos on here.</h2>
        <div className="mt-7"></div>
        <Link
          href="https://www.youtube.com/@daltonsasmr"
          className="italic font-bold"
        >
          Channel link
        </Link>
      </div>

      <div className="flex flex-row justify-evenly">
        <div className="mt-7">
          <div className="border-2 rounded-lg w-[400px]">
            <Link href="https://www.youtube.com/watch?v=Th0oRxtqON0">
            <img src="/images/1.jpg" alt="" />
            </Link>
          </div>
        </div>

        <div className="mt-7">
          <div className="border-2 rounded-lg w-[400px]">
            <Link href="https://www.youtube.com/watch?v=pU0uaOa0d_k">
            <img src="/images/2.jpg" alt="" />
            </Link>
          </div>
        </div>

        <div className="mt-7">
          <div className="border-2 rounded-lg w-[400px] h-[300px]">
            <h1 className="text-center font-bold">Adding more later..!</h1>
          </div>
        </div>
      </div>
    </>
  );
}
