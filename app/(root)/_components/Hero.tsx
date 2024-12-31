import Image from "next/image";

import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <div className="w-full flex-1 flex items-center justify-between h-screen">
      <div className="flex flex-col items-start">
        <h1 className="text-7xl font-bold">The happier workspace</h1>
        <p className="py-4 text-2xl text-gray-600">
          Write. Plan. Collaborate. With a little help from AI.
        </p>
        <Button>Get Notly free</Button>
      </div>
      <Image
        width={300}
        height={300}
        className="pt-10"
        alt="Hero Add Notes"
        src="/hero-add-notes.svg"
      />
    </div>
  );
}

export default Hero;
