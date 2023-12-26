import Image from "next/image";
import logo from "@/public/mercat.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full px-6 py-6">
      <div className="flex items-center justify-between">
        <Image src={logo} alt="mercat exotic logo" className="w-60 " />
        <Link href="/menu" className="border px-4 py-1">
          MENU
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
