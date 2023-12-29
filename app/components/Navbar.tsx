import Image from "next/image";
import logo from "@/public/mercat.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 w-full px-6 py-6">
      <div className="flex items-center justify-between">
        <Image src={logo} alt="mercat exotic logo" className="w-60" />
        <Link
          href="/menu"
          className="w-24 border-2 px-4 py-1 text-center text-white"
        >
          MENU
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
