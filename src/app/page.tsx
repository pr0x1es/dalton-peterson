import Navbar from "../../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Shorts from "../../components/Shorts";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="border-2 rounded-lg p-7 mt-7">
        <h1 className="font-bold text-center text-3xl mb-7">
          Dalton&apos;s ASMR 😎
        </h1>
        <div className="mt-7"></div>
        <Link
          href="https://www.youtube.com/@daltonsasmr"
          className="hover:italic hover:transition-all hover:font-bold transition-all"
        >
          <div className="text-center Home">Channel link</div>
        </Link>
      </div>

      <h1 className="text-center font-bold text-2xl mt-7">Videos</h1>
      <div className="flex flex-col justify-evenly">
        <div className="mt-7">
          <div className="border-4 rounded-2xl p-8 bg-stone-950 hover:bg-neutral-900 hover:transition-all transition-all">
            <h1 className="text-center mb-7 text-lg">My first ASMR video 🥲</h1>
            <Link href="https://www.youtube.com/watch?v=Th0oRxtqON0">
              <div className="flex place-content-center">
              <Image src="/images/1.jpg" alt="" width="800" height="400" className="rounded-md" />
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-7">
          <div className="border-4 rounded-2xl p-8 bg-stone-950 hover:bg-neutral-900 hover:transition-all transition-all">
            <h1 className="mb-7 text-center">[ASMR] Tapping triggers and stuff</h1>
            <Link href="https://www.youtube.com/watch?v=pU0uaOa0d_k">
              <div className="flex place-content-center">
              <Image src="/images/2.jpg" alt="" width="800" height="400" className="rounded-md" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <h1 className="font-bold text-2xl text-center mt-7">Shorts</h1>
      <div>
        <Shorts />
      </div>

      <footer>
        <div className="border-2 p-6 mt-7 rounded-md">
          <h1 className="font-bold">Credits</h1>
          <h1 className="italic">Favicon info:</h1>
          <Link
            href="https://creativecommons.org/licenses/by/4.0/"
            className="hover:italic hover:font-bold hover:transition-all transition-all"
          >
            CC-BY-4 License
          </Link>
          <br />
          <Link
            href="https://twemoji.twitter.com/"
            className="hover:italic hover:font-bold hover:transition-all transition-all"
          >
            Link to original favicon source library.
          </Link>
          <h2>No changes were made.</h2>
        </div>
      </footer>
    </>
  );
}
