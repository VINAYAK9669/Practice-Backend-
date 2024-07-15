import React from "react";
import FormHeaders from "../components/utils/FormHeaders";
import Button from "../components/utils/Button";
import { img_registerPage } from "../data/useImportAssests";

function CreateAccPage() {
  return (
    <div className="flex h-screen w-screen justify-center items-center  mx-auto gap-x-[8rem] ">
      <section className="flex flex-col h-full justify-center gap-y-[2rem]">
        <header>
          <FormHeaders>Create an account</FormHeaders>
        </header>
        <div className="flex flex-col gap-y-[1rem]">
          <div className="form_div_style">
            <input type="text" placeholder="Name" className="form_inputs" />
          </div>
          <div className="form_div_style">
            <input type="email" placeholder="Email" className="form_inputs" />
          </div>
          <div className="form_div_style">
            <input type="tel" placeholder="Mobile" className="form_inputs" />
          </div>
          <div className="form_div_style">
            <input
              type="password"
              placeholder="Password"
              className="form_inputs"
            />
          </div>
          <div className="flex gap-x-1 items-center">
            <input type="checkbox" className="w-[15px] h-[12px]" />
            <p className="text-fontColor-gray_level_1 text-base">
              By creating an account, I agree to our terms of use and privacy
              policy
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-[0.5rem]">
          <div className="w-[277px] h-[64px] text-4xl">
            <Button>Create Account</Button>
          </div>
          <div className="flex gap-x-[0.5rem]">
            <p className="text-2.5xl text-fontColor-gray_level_1">
              Already have an account?
            </p>
            <a className="text-2.5xl text-fontColor-black hover:underline cursor-pointer">
              Sign In
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

export default CreateAccPage;
