"use client";

import Image from "next/image";

import {
  Badge,
  Navbar as BaseNavBar,
  Button,
  Dropdown,
  NavbarProps,
} from "react-daisyui";

export function Navbar({ className, ...props }: NavbarProps) {
  return (
    <BaseNavBar className={`${className} bg-base-100 p-3 shadow-md`} {...props}>
      <div className="flex-1">
        <Button tag="a" href="/" className="text-xl normal-case" color="ghost">
          Make Anything
        </Button>
      </div>
      <div>
        <Image
          className="bounce-left"
          src="/images/arrow.png"
          alt=""
          height={40}
          width={40}
        />
      </div>
      <div className="flex-none">
        <Dropdown end>
          <Button
            tag="label"
            tabIndex={0}
            color="ghost"
            className="avatar"
            shape="circle"
          >
            <div className="w-10 rounded-full">
              <Image src="/images/hacker.jpg" alt="" width="40" height="40" />
            </div>
          </Button>
          <Dropdown.Menu className="mt-3 z-[1] w-52 menu-sm shadow-xl">
            <li>
              <a className="justify-between">
                Profile
                <Badge className="badge">New</Badge>
              </a>
            </li>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </BaseNavBar>
  );
}
