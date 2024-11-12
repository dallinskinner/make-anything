"use client";

import { Link } from "react-daisyui";
import { RoughNotation } from "react-rough-notation";

export default function Welcome() {
  return (
    <>
      <h1 className="mt-12 text-6xl text-center font-bold">
        Work at Make Anything Labs
      </h1>

      <p className="mt-12 text-2xl leading-normal">
        Welcome! We'd love for you to work here. We're a small team of
        developers. We're looking for people who are passionate about{" "}
        <RoughNotation color="oklch(var(--wa))" type="highlight" show>
          making anything!
        </RoughNotation>
      </p>

      <h2 className="mt-24 mb-6 text-4xl text-center font-bold">
        Get started by{" "}
        <RoughNotation color="oklch(var(--wa))" type="underline" show>
          <Link href="mailto:juliantheskinner@gmail.com" target="_blank">
            sending us an email
          </Link>
        </RoughNotation>
      </h2>

      <p className="text-center mt-8">
        Please include your first and last name in the email.
      </p>
    </>
  );
}
