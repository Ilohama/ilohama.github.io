import { useState } from "react";
import secrets from "@/secret.json";
import catGif from "@/imgs/nyan-cat-nyan.gif";
import Image from "next/image";

export default function KittyDisplay() {
  const [password, setPassword] = useState("");
  return password === secrets["secret-0"] ? (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-6xl">Meow ! &lt;3</h1>
      <hr className="w-full border-slate-400 my-3" />
      <Image src={catGif} alt="Cat gif..." />
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
