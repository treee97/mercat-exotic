import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io";
const Heading = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-center text-6xl">EL ARTE DE LA COMIDA</h1>
      {/* <video
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src="../video-mercat-exotic.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="flex items-center justify-center">
        <Link href={"https://www.instagram.com/mercatexotic/"} className="flex">
          <IoLogoInstagram size={50} />
        </Link>
      </div>
    </div>
  );
};

export default Heading;
