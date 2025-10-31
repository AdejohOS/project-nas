import React from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Car, Menu, PlaneTakeoff, Truck } from "lucide-react";
import Link from "next/link";
import { DottedSeparator } from "./ui/dotted-separator";
import { FaShieldAlt } from "react-icons/fa";

const Mobile = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Menu className="size-5 text-gray-300 cursor-pointer" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            {" "}
            <VisuallyHidden>
              <SheetTitle>Menu</SheetTitle>
            </VisuallyHidden>
          </SheetHeader>
          <div className="p-4">
            <div>
              <ul className="flex gap-4 font-semibold justify-center divide-x divide-gray-400">
                <li className="pr-4">
                  <Link href="/business">BUSINESS</Link>
                </li>
                <li>
                  <Link href="/personal">PERSONAL</Link>
                </li>
              </ul>
              <DottedSeparator className="my-4" />
            </div>
            <div>
              <ul className="font-semibold space-y-4">
                <li>
                  <Link href="/car-hire" className="flex items-center gap-2">
                    <Car className="size-6  animate-out" />
                    <span>CAR HIRE</span>
                  </Link>
                </li>
                <li>
                  <Link href="/air-travel" className="flex items-center gap-2">
                    <PlaneTakeoff className="size-5 " />
                    <span>AIR TRAVEL</span>
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="/protocol-security-services"
                    className="flex items-center gap-2"
                  >
                    <FaShieldAlt className="size-5" />
                    <span> PROTOCOL + SECURITY SERVICES</span>
                  </Link>
                </li>
                <li>
                  <Link href="/logistics" className="flex items-center gap-2">
                    <Truck className="size-5" />
                    <span> LOGISTICS</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Mobile;
