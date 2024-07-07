import Image from "next/image";
import Link from "next/link";
export default function Shorts() {
  return (
    <div className="flex flex-row justify-evenly">
      <div className="mt-7">
        <div className="border-4 rounded-2xl p-5">
          <h1> My first ASMR video #asmr </h1>
          <Link href="https://www.youtube.com/watch?v=Th0oRxtqON0">
            <Image src="/images/3.jpg" alt="" width="400" height="400" />
          </Link>
        </div>

        <div className="mt-7">
          <div className="border-4 rounded-2xl p-5">
            <h1> English or Spanish #asmr </h1>
            <Link href="https://www.youtube.com/shorts/p5glJmiSAYo">
              <Image src="/images/5.jpg" alt="" width="400" height="400" />
            </Link>
          </div>
          <div className="mt-7">
            <div className="border-4 rounded-2xl p-5">
              <h1> ASMR Brainrot Quiz #asmr #viral #fyp </h1>
              <Link href="https://www.youtube.com/shorts/C_g1Q7i7Qjk">
                <Image src="/images/4.jpg" alt="" width="400" height="400" />
              </Link>
            </div>
            <div className="mt-7">
              <div className="border-4 rounded-2xl p-5">
                <h1> Your Rizz is low #asmr #fyp #viral </h1>
                <Link href="https://www.youtube.com/shorts/390TRZ-v2mA">
                  <Image src="/images/6.jpg" alt="" width="400" height="400" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
