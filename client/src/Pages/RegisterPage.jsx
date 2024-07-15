import React from "react";
import { img_registerPage } from "../data/useImportAssests";
import FormHeaders from "../components/utils/FormHeaders";
import Button from "../components/utils/Button";

function RegisterPage() {
  return (
    <div className="flex h-screen w-screen justify-center items-center  mx-auto gap-x-[2rem]">
      <section className="flex flex-col">
        <header>
          <FormHeaders>Already have an account?</FormHeaders>
        </header>
        <div className="">
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
          <div></div>
        </div>
        <div className="">
          <div className="w-[277px] h-[64px] text-4xl">
            <Button>Sign in</Button>
          </div>
          <div>
            <p className="text-2.5xl text-fontColor-gray_level_1">
              Don&apos;t have an account?
            </p>
            <a className="text-2.5xl text-fontColor-black">Sign Up</a>
          </div>
        </div>
      </section>
      <section className="relative h-screen flex items-center justify-center">
        <img src={img_registerPage} className="h-full"></img>
        {/* <h1 >
          Your Personal Job Finder
        </h1> */}
        <div className="absolute top-[5%] z-10 w-full flex justify-center">
          <FormHeaders type="no_para"> Your Personal Job Finder</FormHeaders>
        </div>
      </section>
    </div>
  );
}

export default RegisterPage;
