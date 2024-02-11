// imports
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { GrMenu } from "react-icons/gr";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "./theme-toggle";

export default function Navbar({}): any {
  return (
    <nav className="w-full backdrop-blur-md bg-opacity-30 z-50 fixed h-24 flex justify-between items-center py-10 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <Link href="/">
        <Image
          alt="logo-dark"
          className="cursor-pointer w-40 hidden dark:block"
          src="/logo-dark.svg"
          height={100}
          width={170}
        />
        <Image
          alt="logo-light"
          className="cursor-pointer w-40 dark:hidden"
          src="/logo-light.svg"
          height={100}
          width={170}
        />
      </Link>
      <div className="gap-1 md:gap-2 lg:gap-4 hidden md:flex">
        <Button variant="ghost" className="font-semibold text-md">
          <Link href="/">Home</Link>
        </Button>
        <Link href="/about">
          <Button variant="ghost" className="font-semibold text-md">
            About
          </Button>
        </Link>
        <Link href="/privacy-policy">
          <Button variant="ghost" className="font-semibold text-md">
            Privacy Policy
          </Button>
        </Link>
        <ThemeToggle />
      </div>
      <Link href="https://github.com/rajarshisamaddar/" target="_blank">
        <Button
          variant="default"
          className="rounded-full w-fit bg-primary gap-2 items-center hidden md:flex"
          size="lg"
        >
          <span>GitHub</span>
          <span className="text-xl">
            <BsGithub />
          </span>
        </Button>
      </Link>

      {/* MOBILE NAV */}
      <Sheet>
        <SheetTrigger className="block md:hidden p-3">
          <span className="text-2xl">
            <GrMenu />
          </span>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription>
              <section className="flex flex-col items-center justify-center h-screen space-y-[15rem]">
                <div className="w-full space-y-3">
                  <Link href="/">
                    <Button
                      variant="link"
                      className="font-semibold text-md w-full"
                    >
                      Home
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button
                      variant="link"
                      className="font-semibold text-md w-full"
                    >
                      About
                    </Button>
                  </Link>
                  <Link href="/privacy-policy">
                    <Button
                      variant="link"
                      className="font-semibold text-md w-full"
                    >
                      Privacy Policy
                    </Button>
                  </Link>
                  <ThemeToggle variant="link" />
                </div>
                <div className="w-full flex justify-center">
                  <Link
                    href="https://github.com/rajarshisamaddar/"
                    target="_blank"
                  >
                    <Button
                      variant="default"
                      className="rounded-full w-fit bg-primary gap-2 items-center flex"
                      size="lg"
                    >
                      <span>GitHub</span>
                      <span className="text-xl">
                        <BsGithub />
                      </span>
                    </Button>
                  </Link>
                </div>
              </section>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
