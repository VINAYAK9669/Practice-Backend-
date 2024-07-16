import React from "react";
import FormHeaders from "../components/utils/FormHeaders";
import Button from "../components/utils/Button";
import { img_jobAddPage } from "../data/useImportAssests";

function JobDetailPage() {
  const formDiv = "grid grid-cols-4 gap-x-[1rem]";
  const inputForm =
    "border-2 border-borderColor-gray_light rounded-[5px] outline-none p-2 col-span-3";
  const label = "text-3xl font-[400]";
  const textArea =
    "border-2 border-borderColor-gray_light rounded-[5px] outline-none px-2 py-2 col-span-3 resize-none";

  return (
    <div className="flex h-screen w-screen justify-center items-center mx-auto 2xl:w-[1512px]">
      <section className="flex flex-col h-full justify-center gap-y-[2rem] items-center flex-grow">
        <header>
          <FormHeaders type="no_paraBlack">Add job description</FormHeaders>
        </header>
        {/* IT HOLDS ALL THE INPUT */}
        <div className="grid grid-cols-1 gap-y-[1rem]">
          <div className={formDiv}>
            <label htmlFor="companyName" className={label}>
              Company Name
            </label>
            <input
              id="companyName"
              type="text"
              placeholder="Enter your company name here"
              className={inputForm}
            />
          </div>
          <div className={formDiv}>
            <label htmlFor="logoUrl" className={label}>
              Add logo URL
            </label>
            <input
              id="logoUrl"
              type="text"
              placeholder="Enter the link"
              className={inputForm}
            />
          </div>
          <div className={formDiv}>
            <label htmlFor="jobPosition" className={label}>
              Job position
            </label>
            <input
              id="jobPosition"
              type="text"
              placeholder="Enter job position"
              className={inputForm}
            />
          </div>
          <div className={formDiv}>
            <label htmlFor="monthlySalary" className={label}>
              Monthly salary
            </label>
            <input
              id="monthlySalary"
              type="text"
              placeholder="Enter Amount in rupees"
              className={inputForm}
            />
          </div>
          <div className={formDiv}>
            <label htmlFor="jobType" className={label}>
              Job Type
            </label>
            <select id="jobType" className={inputForm}>
              <option>Select</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className={formDiv}>
            <label htmlFor="remoteOffice" className={label}>
              Remote/office
            </label>
            <select id="remoteOffice" className={inputForm}>
              <option>Select</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className={formDiv}>
            <label htmlFor="location" className={label}>
              Location
            </label>
            <input
              id="location"
              type="text"
              placeholder="Enter Location"
              className={inputForm}
            />
          </div>
          <div className={formDiv}>
            <label htmlFor="jobDescription" className={label}>
              Job Description
            </label>
            <textarea
              id="jobDescription"
              placeholder="Type the job description"
              className={textArea}
            ></textarea>
          </div>
          <div className={formDiv}>
            <label htmlFor="aboutCompany" className={label}>
              About Company
            </label>
            <textarea
              id="aboutCompany"
              placeholder="Type about your company"
              className={textArea}
            ></textarea>
          </div>
          <div className={formDiv}>
            <label htmlFor="skillsRequired" className={label}>
              Skills Required
            </label>
            <input
              id="skillsRequired"
              type="text"
              placeholder="Enter the must have skills"
              className={inputForm}
            />
          </div>
          <div className={formDiv}>
            <label htmlFor="additionalInformation" className={label}>
              Information
            </label>
            <textarea
              id="additionalInformation"
              placeholder="Enter the additional information"
              className={textArea}
            ></textarea>
          </div>
          <div className="flex justify-end w-full gap-[2rem]">
            <button className="h-[43px] w-[147px] border-2 border-borderColor-gray_lighter rounded-[7px] text-fontColor-gray_level_5 font-medium text-lg">
              Cancel
            </button>
            <div className=" w-[147px] h-[43px]  ">
              <Button>+&nbsp;Add Job</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="relative h-screen flex items-center justify-center bg-orange-500">
        <img
          src={img_jobAddPage}
          className="h-full"
          alt="Job addition page illustration"
        ></img>
        <div className="absolute top-[5%] z-10 w-full flex justify-center">
          <FormHeaders type="no_para">
            Recruiter add job details here
          </FormHeaders>
        </div>
      </section>
    </div>
  );
}

export default JobDetailPage;
