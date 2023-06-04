"use client";
import Link from "next/link";
import {Button, Typography} from "@cmusy/ui";

export default function Login() {
return (
  <section className="grid grid-cols-12">
    <div className="lg:col-span-5 md:col-span-6 mx-auto">
      <div className="flex flex-col flex-1 min-h-full justify-center max-w-xs">
        {/*<Link href="/">*/}
        {/*  /!*<a className="mt-5">*!/*/}
        {/*  /!*  /!*<Image*!/*!/*/}
        {/*  /!*  /!*  src="/cmusy-logo_for-white-background.svg"*!/*!/*/}
        {/*  /!*  /!*  height={40}*!/*!/*/}
        {/*  /!*  /!*  width={40}*!/*!/*/}
        {/*  /!*  /!*  className="justify-center-none"*!/*!/*/}
        {/*  /!*  /!*/>*!/*!/*/}
        {/*  /!*</a>*!/*/}
        {/*</Link>*/}
        <Button
          variant="text"
          color="primary"
          className="mt-3"
        >
          Text
        </Button>
        <div className="flex justify-center items-center mt-auto mb-10 whitespace-nowrap">
          <Typography variant="body-1" className="text-neutral-dark">
          Label
          </Typography>
          <Link href="/sign-up">
            <a className="text-primary ml-1">Register</a>
          </Link>
        </div>
      </div>
    </div>
    {/*<div className="lg:col-span-7 mx-auto bg-primary md:col-span-6 md:col-start-7">*/}
    {/*  <MarketingSlide />*/}
    {/*</div>*/}
  </section>
)

}
