import Image from "next/image";
import Link from "next/link";
import { HiOutlinePencilSquare } from "react-icons/hi2";

export default function Navbar() {
    return (
        <nav className="flex border-b h-14 px-8">
            <div className="flex justify-between items-center w-full">
                <div className="flex items-center space-x-4 gap-3">
                    <Link href="/" className="font-bold text-3xl">
                        PixShop
                    </Link>
                    {/* <input type="text" placeholder="Search" className="bg-slate-100 outline-none rounded-full p-2 pl-6 placeholder:text-sm" /> */}
                </div>
                <div className="flex items-center space-x-4 gap-3">
                    {/* <Link href="/write" className="hover:text-slate-950 flex flex-row justify-center items-center gap-2 text-slate-600">
                        <HiOutlinePencilSquare className="text-xl text-slate-600" />
                        Write
                    </Link> */}

                    <Link href="/register" className="text-zinc-600 hover:text-zinc-800 text-sm">
                        Register
                    </Link>
                    <Link href="/login" className="text-zinc-600 hover:text-zinc-800 text-sm">
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
}
