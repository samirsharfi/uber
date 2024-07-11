import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="relative">
      <Image
        src="/uberbanner.jpg"
        alt="Logo"
        width={900}
        height={1000}
        className="w-full h-screen object-cover"
      />
      <div className="absolute top-20 left-20">
        <SignIn />;
      </div>
    </div>
  );
}
