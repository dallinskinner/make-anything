import Image from "next/image";

export default function Hacker() {
  return (
    <div className="text-center">
      <h1 className="text-9xl mt-16">???????????????</h1>

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
