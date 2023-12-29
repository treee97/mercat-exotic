import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io";
import Image from "next/image";
import leafbg from "../../../public/fall-leaf.jpg";
import Navbar from "../Navbar";
const Heading = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col justify-around ">
      <Navbar />

      {/* <Image
        src={leafbg}
        alt="leaf background"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      /> */}
      <h1 className="text-center text-6xl">EL ARTE DE LA COMIDA</h1>
      <div className="flex items-center justify-center gap-2 ">
        <Link
          href="#reserva"
          className="w-32 border-2 px-4 py-1 text-center text-white"
        >
          RESERVA
        </Link>
        <Link
          href="/menu"
          className="w-32 border-2 px-4 py-1 text-center text-white"
        >
          VER MENU
        </Link>
      </div>

      <div className="flex items-center justify-center">
        <Link href={"https://www.instagram.com/mercatexotic/"} className="flex">
          <IoLogoInstagram size={50} className="text-2xl text-white" />
        </Link>
      </div>
    </div>
  );
};

export default Heading;
