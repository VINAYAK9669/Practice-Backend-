import React, { useState } from "react";
import FormHeaders from "../components/utils/FormHeaders";
import Button from "../components/utils/Button";
import { img_registerPage } from "../data/useImportAssests";
import useAuthentication from "../configuration/useAuthentication";

function CreateAccPage() {
  const { addUser } = useAuthentication();

  console.log(addUser);
  // TODO: Below state holds the form data of the user while registering
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // {mutate, isLoading, isError, Error} = addUser
    addUser.mutate(formData);
  };

  return (
    <div className="flex h-screen w-screen justify-center items-center mx-auto gap-x-[8rem]">
      <section className="flex flex-col h-full justify-center gap-y-[2rem]">
        <header>
          <FormHeaders>Create an account</FormHeaders>
        </header>
        <form className="flex flex-col gap-y-[1rem]" onSubmit={handleSubmit}>
          <div className="form_div_style">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form_inputs"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form_div_style">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form_inputs"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form_div_style">
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile"
              className="form_inputs"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form_div_style">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form_inputs"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex gap-x-1 items-center">
            <input type="checkbox" className="w-[15px] h-[12px]" required />
            <p className="text-fontColor-gray_level_1 text-base">
              By creating an account, I agree to our terms of use and privacy
              policy
            </p>
          </div>
          <div className="flex flex-col gap-y-[0.5rem]">
            <div className="w-[277px] h-[64px] text-4xl">
              <Button type="submit" disabled={addUser.isPending}>
                {addUser.isPending ? "Creating..." : "Create Account"}
              </Button>
            </div>
            {addUser.isError && (
              <p className="text-red-500">Error: {addUser.error.message}</p>
            )}
            <div className="flex gap-x-[0.5rem]">
              <p className="text-2.5xl text-fontColor-gray_level_1">
                Already have an account?
              </p>
              <a className="text-2.5xl text-fontColor-black hover:underline cursor-pointer">
                Sign In
              </a>
            </div>
          </div>
        </form>
      </section>
      <section className="relative h-screen flex items-center justify-center">
        <img src={img_registerPage} className="h-full" />
        <div className="absolute top-[5%] z-10 w-full flex justify-center">
          <FormHeaders type="no_para">Your Personal Job Finder</FormHeaders>
        </div>
      </section>
    </div>
  );
}

export default CreateAccPage;
