"use client";

import { Button } from "react-daisyui";
import { RoughNotation } from "react-rough-notation";

export default function Intro() {
  return (
    <>
      <h1 className="mt-12 text-6xl text-center font-bold">
        Welcome to Make Anything!
      </h1>

      <p className="mt-12 text-2xl leading-normal">
        Make Anything is a{" "}
        <RoughNotation color="oklch(var(--wa))" type="highlight" show>
          campaign
        </RoughNotation>{" "}
        that lets you make anything you can dream up! You can make a sports
        league, company, logo, or even a shoe brand.
      </p>

      <p className="mt-12 text-2xl leading-normal">
        To get started, simply click the link to go to form, fill out your
        details, and you will receive a confirmation email.
      </p>

      <div className="text-center mt-12">
        <Button size="lg" color="primary" tag="a" href="/hacker">
          Get Started
        </Button>{" "}
        or{" "}
        <Button size="lg" color="secondary" tag="a" href="/careers">
          Work Here
        </Button>
      </div>

      <div>
        <h2 className="text-center mt-24 text-4xl font-bold">Recent updates</h2>

        <h3 className="text-xl font-bold mt-6">December 30, 2024</h3>
        <p>
          Removed the hacker changes and fixed the profile picture. Added recent
          updates to home page.
        </p>

        <h3 className="text-xl font-bold mt-6">December 29, 2024</h3>
        <p>?????????????</p>
      </div>
    </>
  );
}
