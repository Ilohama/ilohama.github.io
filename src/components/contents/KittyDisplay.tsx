import { useState } from "react";
import catGif from "@/imgs/nyan-cat-nyan.gif";
import Image from "next/image";
import { Link } from "@/i18n/routing";

export default function KittyDisplay() {
  const [password, setPassword] = useState("");

  return password === process.env.NEXT_PUBLIC_SECRET_0 ? (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-6xl">Meow ! &lt;3</h1>
      <hr className="w-full border-slate-400 my-3" />
      <Link href="/kitty/more">
        <Image src={catGif} alt="Cat gif..." />
      </Link>
      <p className="text-sm italic">You found a secret!</p>
    </div>
  ) : (
    <div className="flex flex-col justify-center h-full">
      <h1 className="text-4xl">Meow ?!?</h1>
      <hr className="w-full border-slate-400 my-3" />
      <input
        className="text-black"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
}
