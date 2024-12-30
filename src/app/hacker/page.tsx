"use client";

import Image from "next/image";
import { Button } from "react-daisyui";

export default function Hacker() {
  return (
    <div className="text-center">
      <h1 className="text-6xl mt-16">We&lsquo;re working on it</h1>

      <Image
        className="mx-auto mt-12"
        src="/images/rnl.png"
        alt="Stylized image of a computer hacker"
        width={540}
        height={540}
      />

      <p className="mt-10">
        While we&lsquo;re fixing it, access the usual Make Anything app{" "}
        <Button size="sm" color="secondary" tag="a" href="/make">
          here
        </Button>
      </p>
    </div>
  );
}
