import React from "react";
import { img_registerPage } from "../data/useImportAssests";
import FormHeaders from "../components/utils/FormHeaders";
import Button from "../components/utils/Button";

function RegisterPage() {
  return (
    <div className="flex h-screen w-screen justify-center items-center  mx-auto gap-x-[8rem] ">
      <section className="flex flex-col h-full justify-center gap-y-[2rem]">
        <header>
          <FormHeaders>Already have an account?</FormHeaders>
        </header>
        <div className="flex flex-col gap-y-[1rem]">
          <div className="form_div_style">
            <input type="email" placeholder="Email" className="form_inputs" />
          </div>
          <div className="form_div_style">
            <input
              type="password"
              placeholder="Password"
              className="form_inputs"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-[0.5rem]">
          <div className="w-[277px] h-[64px] text-4xl">
            <Button>Sign in</Button>
          </div>
          <div className="flex gap-x-[0.5rem]">
            <p className="text-2.5xl text-fontColor-gray_level_1">
              Don&apos;t have an account?
            </p>
            <a className="text-2.5xl text-fontColor-black hover:underline cursor-pointer">
              Sign Up
            </a>
          </div>
        </div>
      </section>
      <section className="relative h-screen flex items-center justify-center">
        <img src={img_registerPage} className="h-full"></img>
        <div className="absolute top-[5%] z-10 w-full flex justify-center">
          <FormHeaders type="no_para"> Your Personal Job Finder</FormHeaders>
        </div>
      </section>
    </div>
  );
}

export default RegisterPage;
