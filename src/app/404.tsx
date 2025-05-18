import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1>404 - Page Not Found</h1>
      <Link href={"/"}>
        <button
          className="btn_futuristic_secondary flex flex-row items-center"
          data-augmented-ui="tr-clip bl-clip"
        >
          <FaHome className="mr-2" />
          Home
        </button>
      </Link>
    </div>
  );
}
