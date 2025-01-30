import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1>404 - Page Not Found</h1>
      <Link href={"/"}>Home</Link>
    </div>
  );
}
