import Image from "next/image";
import { RoughNotation } from "react-rough-notation";

export default function Hacker() {
  return (
    <div className="text-center">
      <div className="rotate">
        <RoughNotation color="oklch(var(--wa))" type="crossed-off" show>
          <h1 className="text-9xl mt-16">???????????????</h1>
        </RoughNotation>
      </div>

      <Image
        className="mx-auto mt-12"
        src="/images/hacker.jpg"
        alt="Stylized image of a computer hacker"
        width={540}
        height={360}
      />
    </div>
  );
}
