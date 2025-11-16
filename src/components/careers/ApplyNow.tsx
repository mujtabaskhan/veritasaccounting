"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import React from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const ApplyNow = () => {
  const [selectedService, setSelectedService] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null);
  const [isCvDragging, setIsCvDragging] = useState(false);
  const [isCoverLetterDragging, setIsCoverLetterDragging] = useState(false);
  const cvInputRef = useRef<HTMLInputElement>(null);
  const coverLetterInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const services = [
    { value: "accounting", label: "Junior Accountant" },
    { value: "tax", label: "Senior Tax Consultant" },
    { value: "payroll", label: "Client Success Coordinator" },
  ];

  const handleServiceSelect = (service: { value: string; label: string }) => {
    setSelectedService(service.value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCvUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setCvFile(file);
    }
  };

  const handleCoverLetterUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setCoverLetterFile(file);
    }
  };

  const handleCvAreaClick = () => {
    cvInputRef.current?.click();
  };

  const handleCoverLetterAreaClick = () => {
    coverLetterInputRef.current?.click();
  };

  const handleFileValidation = (file: File): boolean => {
    const validTypes = [".pdf", ".doc", ".docx"];
    const fileExtension = "." + file.name.split(".").pop()?.toLowerCase();
    return validTypes.includes(fileExtension);
  };

  const handleCvDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsCvDragging(true);
  };

  const handleCvDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsCvDragging(false);
  };

  const handleCvDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsCvDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (handleFileValidation(file)) {
        setCvFile(file);
      }
    }
  };

  const handleCoverLetterDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsCoverLetterDragging(true);
  };

  const handleCoverLetterDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsCoverLetterDragging(false);
  };

  const handleCoverLetterDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsCoverLetterDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (handleFileValidation(file)) {
        setCoverLetterFile(file);
      }
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear status message when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setSubmitStatus({
        type: "error",
        message:
          "Please fill in all required fields (Name, Email, and Message).",
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    // Validate files if uploaded
    if (cvFile && !handleFileValidation(cvFile)) {
      setSubmitStatus({
        type: "error",
        message: "CV/Resume must be a PDF, DOC, or DOCX file.",
      });
      return;
    }

    if (coverLetterFile && !handleFileValidation(coverLetterFile)) {
      setSubmitStatus({
        type: "error",
        message: "Cover Letter must be a PDF, DOC, or DOCX file.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const positionLabel = selectedService
        ? services.find((s) => s.value === selectedService)?.label
        : undefined;

      // Create FormData for file uploads
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name.trim());
      formDataToSend.append("email", formData.email.trim());
      formDataToSend.append("phone", formData.phone.trim());
      formDataToSend.append("message", formData.message.trim());
      if (positionLabel) {
        formDataToSend.append("position", positionLabel);
      }
      if (cvFile) {
        formDataToSend.append("cv", cvFile);
      }
      if (coverLetterFile) {
        formDataToSend.append("coverLetter", coverLetterFile);
      }

      const response = await fetch("/api/apply", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit application");
      }

      // Success
      setSubmitStatus({
        type: "success",
        message:
          "Thank you! Your application has been submitted successfully. We'll review it and get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setSelectedService("");
      setCvFile(null);
      setCoverLetterFile(null);
      // Reset file inputs
      if (cvInputRef.current) {
        cvInputRef.current.value = "";
      }
      if (coverLetterInputRef.current) {
        coverLetterInputRef.current.value = "";
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="pt-10 w-full bg-white pb-[104px] max-xl:pb-40 max-lg:pb-28 max-md:pb-20 max-sm:!pb-20 rounded-bl-[60px] rounded-br-[60px]"
      style={{ width: "100%" }}
    >
      <div className="max-w-7xl mx-auto px-14 max-sm:px-4">
        <AnimateOnScroll delay={0}>
          <h3 className="text-[#232061] font-semibold text-[30px] max-sm:text-[22px]">
            Apply Now
          </h3>
        </AnimateOnScroll>
        <p className="text-[#232061] text-xl font-roboto mb-[31px] max-sm:text-base max-sm:mb-6">
          Find your Career with Veritas Accounting & Tax Consultants
        </p>

        <form onSubmit={handleSubmit}>
          {submitStatus.type && (
            <div
              className={`mb-6 p-4 rounded-2xl ${
                submitStatus.type === "success"
                  ? "bg-green-50 border-2 border-green-500 text-green-700"
                  : "bg-red-50 border-2 border-red-500 text-red-700"
              }`}
            >
              <p className="text-base font-roboto max-sm:text-sm">
                {submitStatus.message}
              </p>
            </div>
          )}

          <div className="relative mb-[42px] max-sm:!mb-[22px]">
            <div className="relative" ref={dropdownRef}>
              <div
                className="border-2 border-[#232061] bg-[#F2F8FA] rounded-full py-2 px-8 cursor-pointer hover:border-opacity-80 transition-colors max-sm:px-6 w-full"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-roboto text-xl text-[#232061] max-sm:!text-xs ${
                      selectedService ? "" : "text-opacity-40"
                    }`}
                  >
                    {selectedService
                      ? services.find((s) => s.value === selectedService)?.label
                      : "Positions"}
                  </span>
                  <svg
                    width="27"
                    height="17"
                    viewBox="0 0 27 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-6 h-6 text-[#232061] transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M0.746094 0.666016L13.2461 14.666L25.7461 0.666016"
                      stroke="#232061"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>

              {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-[#232061] rounded-2xl shadow-lg z-50 max-h-60 overflow-y-auto w-[384px] max-sm:w-full">
                  {services.map((service) => (
                    <div
                      key={service.value}
                      className="px-4 py-3 hover:bg-gray-50 cursor-pointer first:rounded-t-2xl last:rounded-b-2xl transition-colors"
                      onClick={() => handleServiceSelect(service)}
                    >
                      <span className="text-xl text-[#232061] max-sm:!text-xs">
                        {service.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="relative mb-[22px]">
            <label className="absolute -top-3 left-14 bg-white px-2 text-xl text-[#232061] z-10 font-roboto max-sm:!text-xs max-sm:!left-4 max-sm:!-top-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Full Name here"
              required
              className="w-full border-2 border-[#232061] rounded-full px-14 py-4 text-xl text-[#232061] placeholder-[rgba(35,32,97,0.4)] outline-none bg-white max-sm:px-6 max-sm:py-3 max-sm:!text-xs"
            />
          </div>

          <div className="relative mb-[22px]">
            <label className="absolute -top-3 left-14 bg-white px-2 text-xl text-[#232061] z-10 font-roboto max-sm:!text-xs max-sm:!left-4 max-sm:!-top-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email address here"
              required
              className="w-full border-2 border-[#232061] rounded-full px-14 py-4 text-xl text-[#232061] placeholder-[rgba(35,32,97,0.4)] outline-none bg-white max-sm:px-6 max-sm:py-3 max-sm:!text-xs"
            />
          </div>

          <div className="relative mb-[22px]">
            <label className="absolute -top-3 left-14 bg-white px-2 text-xl text-[#232061] z-10 font-roboto max-sm:!text-xs max-sm:!left-4 max-sm:!-top-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Your Phone number here"
              className="w-full border-2 border-[#232061] rounded-full px-14 py-4 text-xl text-[#232061] placeholder-[rgba(35,32,97,0.4)] outline-none bg-white max-sm:px-6 max-sm:py-3 max-sm:!text-xs"
            />
          </div>

          <div className="grid grid-cols-2 gap-15 mt-[16px] mb-[27px] max-sm:grid-cols-1 max-sm:!mt-[30px] max-sm:!gap-4">
            <input
              type="file"
              ref={cvInputRef}
              onChange={handleCvUpload}
              accept=".pdf,.doc,.docx"
              className="hidden"
            />
            <input
              type="file"
              ref={coverLetterInputRef}
              onChange={handleCoverLetterUpload}
              accept=".pdf,.doc,.docx"
              className="hidden"
            />

            <div
              className={`flex flex-col gap-[25px] items-center justify-center py-[30px] rounded-[26px] bg-[#F2F8FA] cursor-pointer transition-all hover:bg-[#E8F4F8] ${
                cvFile
                  ? "border-2 border-green-500"
                  : isCvDragging
                  ? "border-2 border-[#232061] bg-[#E8F4F8] scale-105"
                  : "border-2 border-transparent"
              }`}
              onClick={handleCvAreaClick}
              onDragOver={handleCvDragOver}
              onDragLeave={handleCvDragLeave}
              onDrop={handleCvDrop}
            >
              {cvFile ? (
                <>
                  <Image src="/check.svg" width={36} height={33} alt="check" />
                  <h3 className="text-[#232061] font-semibold">
                    CV/Resume Uploaded
                  </h3>
                  <div className="flex items-center gap-3">
                    <Image src="/pdf.png" width={26} height={26} alt="pdf" />
                    <p className="text-[#232061] text-sm max-w-[200px] truncate">
                      {cvFile.name}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <svg
                    width="36"
                    height="33"
                    viewBox="0 0 36 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#232061]"
                  >
                    <path
                      d="M18 8V25M8 16.5H28"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                  <h3 className="text-[#232061] font-semibold">
                    {isCvDragging
                      ? "Drop your CV/Resume here"
                      : "Upload Your CV/ Resume"}
                  </h3>
                  <p className="text-[#232061] text-sm opacity-60">
                    {isCvDragging
                      ? "Release to upload"
                      : "Click or drag to upload"}
                  </p>
                </>
              )}
            </div>

            <div
              className={`flex flex-col gap-[25px] items-center justify-center py-[30px] rounded-[26px] bg-[#F2F8FA] max-sm:!mb-3 cursor-pointer transition-all hover:bg-[#E8F4F8] ${
                coverLetterFile
                  ? "border-2 border-green-500"
                  : isCoverLetterDragging
                  ? "border-2 border-[#232061] bg-[#E8F4F8] scale-105"
                  : "border-2 border-transparent"
              }`}
              onClick={handleCoverLetterAreaClick}
              onDragOver={handleCoverLetterDragOver}
              onDragLeave={handleCoverLetterDragLeave}
              onDrop={handleCoverLetterDrop}
            >
              {coverLetterFile ? (
                <>
                  <Image src="/check.svg" width={36} height={33} alt="check" />
                  <h3 className="text-[#232061] font-semibold">
                    Cover Letter Uploaded
                  </h3>
                  <div className="flex items-center gap-3">
                    <Image src="/pdf.png" width={26} height={26} alt="pdf" />
                    <p className="text-[#232061] text-sm max-w-[200px] truncate">
                      {coverLetterFile.name}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <svg
                    width="36"
                    height="33"
                    viewBox="0 0 36 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#232061]"
                  >
                    <path
                      d="M18 8V25M8 16.5H28"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                  <h3 className="text-[#232061] font-semibold">
                    {isCoverLetterDragging
                      ? "Drop your Cover Letter here"
                      : "Upload Your Cover Letter"}
                  </h3>
                  <p className="text-[#232061] text-sm opacity-60">
                    {isCoverLetterDragging
                      ? "Release to upload"
                      : "Click or drag to upload"}
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="relative">
            <label className="absolute -top-3 left-14 bg-white px-2 text-xl text-[#232061] z-10 font-roboto max-sm:!text-xs max-sm:!left-4 max-sm:!-top-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Type your brief message here"
              rows={6}
              required
              className="w-full border-2 border-[#232061] rounded-3xl px-14 py-6 text-xl text-[#232061] placeholder-[rgba(35,32,97,0.4)] outline-none resize-none bg-white max-sm:px-6 max-sm:py-4 max-sm:!text-xs"
            />
          </div>

          <div className="flex justify-center pt-10 max-sm:pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#232061] text-white text-[25px] font-semibold px-16 py-4 rounded-full hover:bg-opacity-90 transition-colors cursor-pointer max-sm:px-8 max-sm:py-3 max-sm:!text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>

        <div className="space-y-8 pt-[106px] max-lg:pt-10 max-sm:!pt-0 hidden max-sm:!block mt-[94px]">
          <div className="border-2 border-[#232061] rounded-3xl p-10 max-sm:p-6">
            <AnimateOnScroll delay={0}>
              <h3 className="text-4xl font-bold text-[#232061] mb-2 text-center max-sm:text-2xl">
                What Happens Next?
              </h3>
            </AnimateOnScroll>
            <p className="text-3xl text-[#232061] text-center mb-8 font-light italic max-sm:text-xl max-sm:mb-5">
              In 3 easy steps
            </p>

            <div className="space-y-8 relative">
              <div className="flex items-start space-x-4 mb-22 max-sm:mb-10 max-sm:!space-x-6">
                <div className="w-5 h-5 bg-[#003B6633] rounded-full flex-shrink-0 flex max-sm:!mt-[0.5] items-center justify-center">
                  <div className="h-2 w-2 bg-[#232061] rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#232061] mb-3 font-roboto">
                    Step 1: Review & Response
                  </h4>
                  <p className="text-base text-[#232061] leading-[20px] font-roboto max-sm:text-sm max-sm:leading-5">
                    We will review your form and contact you within 1–2 business
                    days to confirm your details.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-22 max-sm:mb-10 max-sm:!space-x-6">
                <div className="w-5 h-5 bg-[#003B6633] rounded-full flex-shrink-0 flex max-sm:!mt-[0.5] items-center justify-center">
                  <div className="h-2 w-2 bg-[#232061] rounded-full"></div>
                </div>

                <div className="flex flex-col gap-5 absolute top-10 left-2">
                  <div className="h-[3px] w-[3px] bg-[#232061]"></div>
                  <div className="h-[3px] w-[3px] bg-[#232061]"></div>
                  <div className="h-[3px] w-[3px] bg-[#232061]"></div>
                  <div className="h-[3px] w-[3px] bg-[#232061] max-sm:!hidden"></div>
                  <div className="h-[3px] w-[3px] bg-[#232061] max-sm:!hidden"></div>
                  <div className="h-[3px] w-[3px] bg-[#232061] max-sm:!hidden"></div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-[#232061] mb-3 font-roboto">
                    Step 2: Consultation
                  </h4>
                  <p className="text-base text-[#232061] leading-[20px] font-roboto max-sm:text-sm max-sm:leading-5">
                    We&apos;ll schedule a short call to understand your needs
                    and recommend the right accounting solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 max-sm:!space-x-6 max-sm:!mb-10">
                <div className="w-5 h-5 bg-[#003B6633] rounded-full flex-shrink-0 flex max-sm:!mt-[0.5] items-center justify-center">
                  <div className="h-2 w-2 bg-[#232061] rounded-full"></div>
                </div>

                <div className="flex flex-col gap-5 absolute top-[208px] left-2">
                  <div className="h-[3px] w-[3px] bg-[#232061]"></div>
                  <div className="h-[3px] w-[3px] bg-[#232061]"></div>
                  <div className="h-[3px] w-[3px] bg-[#232061]"></div>
                  <div className="h-[3px] w-[3px] bg-[#232061] max-sm:!hidden"></div>
                  <div className="h-[3px] w-[3px] bg-[#232061] max-sm:!hidden"></div>
                  <div className="h-[3px] w-[3px] bg-[#232061] max-sm:!hidden"></div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#232061] mb-3 font-roboto">
                    Step 3: Proposal & Onboarding
                  </h4>
                  <p className="text-base text-[#232061] leading-[20px] font-roboto max-sm:text-sm max-sm:leading-5">
                    You&apos;ll receive a customized service proposal, and once
                    approved, we&apos;ll begin your onboarding process right
                    away.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyNow;
