"use client";

import { useEffect, useRef, useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function ContactSection({
  hideHeading = true,
}: {
  hideHeading?: boolean;
}) {
  const [selectedService, setSelectedService] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
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
    { value: "accounting", label: "Accounting" },
    { value: "tax", label: "Tax Services" },
    { value: "payroll", label: "Payroll Services" },
    { value: "audit", label: "Audit & Compliance Support" },
    { value: "cfo", label: "CFO Services" },
    { value: "advisory", label: "Business Advisory" },
    { value: "admin", label: "Business Administration" },
  ];

  const handleServiceSelect = (service: { value: string; label: string }) => {
    setSelectedService(service.value);
    setIsOpen(false);
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

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceLabel = selectedService
        ? services.find((s) => s.value === selectedService)?.label
        : undefined;

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
          service: serviceLabel,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      // Success
      setSubmitStatus({
        type: "success",
        message:
          "Thank you! Your message has been sent successfully. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setSelectedService("");
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

  return (
    <section
      id="contact-section"
      className="w-full bg-white py-32 max-xl:py-16 max-lg:py-14 max-md:py-12 max-sm:py-10 rounded-bl-[60px] rounded-br-[60px] relative z-[5]"
      style={{
        width: "100%",
        position: "relative",
        zIndex: 6,
        WebkitTransform: "translateZ(0)",
        transform: "translateZ(0)",
        isolation: "isolate",
        WebkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
      }}
    >
      <div className="max-w-7xl mx-auto px-14 max-sm:px-4">
        {hideHeading && (
          <div className="text-center mb-[185px] max-sm:!mb-[81px]">
            <AnimateOnScroll delay={0}>
              <h2 className="text-[70px] font-normal text-[#232061] leading-[70px] max-xl:text-[60px] max-xl:leading-[64px] max-lg:text-[52px] max-lg:leading-[56px] max-md:text-[44px] max-md:leading-[48px] max-sm:text-[36px] max-sm:!text-xl max-sm:!leading-[20px] max-sm:!text-center">
                Curious about what we <br />
                can do for you?
              </h2>
            </AnimateOnScroll>
          </div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-lg:gap-10 max-sm:!gap-[96px]">
          <div>
            <div className="pb-[24px]">
              <h3 className="text-[32px] font-semibold text-[#232061] max-sm:text-2xl mb-2">
                Let&apos;s Connect!
              </h3>
              <p
                className="text-2xl text-[#232061] max-sm:!text-xl"
                style={{
                  fontWeight: 300,
                  fontFamily: '"Roboto", sans-serif',
                  WebkitFontSmoothing: "antialiased",
                  MozOsxFontSmoothing: "grayscale",
                }}
              >
                No matter how big or small your queries are, we are here to
                help.{" "}
              </p>
            </div>

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

              <div className="relative mb-[24px]">
                <div className="relative" ref={dropdownRef}>
                  <div
                    className="border-1 border-[#232061] rounded-full py-4 px-8 cursor-pointer hover:border-opacity-80 transition-colors max-sm:px-6"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-roboto font-semibold text-base text-[#232061] max-sm:!text-sm ${
                          selectedService ? "" : "text-opacity-40"
                        }`}
                      >
                        {selectedService
                          ? services.find((s) => s.value === selectedService)
                              ?.label
                          : "Select your Service"}
                      </span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-4 h-4 text-[#232061] transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          d="M15.8215 4.5L17.1587 5.83853L9.87064 13.1292C9.75386 13.2467 9.61499 13.3399 9.46202 13.4036C9.30906 13.4672 9.14501 13.5 8.97934 13.5C8.81366 13.5 8.64962 13.4672 8.49665 13.4036C8.34369 13.3399 8.20482 13.2467 8.08804 13.1292L0.796143 5.83853L2.13341 4.50126L8.97744 11.344L15.8215 4.5Z"
                          fill="#232061"
                        />
                      </svg>
                    </div>
                  </div>

                  {isOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-[#232061] rounded-2xl shadow-lg z-50 max-h-60 overflow-y-auto">
                      {services.map((service) => (
                        <div
                          key={service.value}
                          className="px-4 py-3 hover:bg-gray-50 cursor-pointer first:rounded-t-2xl last:rounded-b-2xl transition-colors"
                          onClick={() => handleServiceSelect(service)}
                        >
                          <span className="text-xl text-[#232061] max-sm:text-base">
                            {service.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-[24px]">
                <label className="block text-base text-[#232061] font-roboto font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Full Name here"
                  required
                  className="w-full border-1 border-[#232061] rounded-full px-8 py-4 text-base text-[#232061] placeholder-[rgba(35,32,97,0.4)] outline-none bg-white max-sm:px-6 max-sm:py-3 max-sm:!text-sm"
                />
              </div>

              <div className="mb-[24px]">
                <label className="block text-base text-[#232061] font-roboto font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email address here"
                  required
                  className="w-full border-1 border-[#232061] rounded-full px-8 py-4 text-base text-[#232061] placeholder-[rgba(35,32,97,0.4)] outline-none bg-white max-sm:px-6 max-sm:py-3 max-sm:!text-sm"
                />
              </div>

              <div className="mb-[24px]">
                <label className="block text-base text-[#232061] font-roboto font-semibold mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your Phone number here"
                  className="w-full border-1 border-[#232061] rounded-full px-8 py-4 text-base text-[#232061] placeholder-[rgba(35,32,97,0.4)] outline-none bg-white max-sm:px-6 max-sm:py-3 max-sm:!text-sm"
                />
              </div>

              <div>
                <label className="block text-base text-[#232061] font-roboto font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your brief message here"
                  rows={6}
                  required
                  className="w-full border-1 border-[#232061] rounded-3xl px-8 py-6 text-base text-[#232061] placeholder-[rgba(35,32,97,0.4)] outline-none resize-none bg-white max-sm:px-6 max-sm:py-4 max-sm:!text-sm"
                />
              </div>

              <div className="flex items-center gap-3 justify-end max-sm:!justify-center mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group px-10 py-4 rounded-full font-semibold text-white transition-all inline-flex items-center gap-3 hover:opacity-90 text-xl leading-[10px] max-sm:text-[15px] max-sm:py-3 max-sm:px-6 max-sm:leading-[20px] cursor-pointer"
                  style={{
                    backgroundColor: "#232061",
                  }}
                >
                  <span className="relative inline-block overflow-hidden">
                    <span className="inline-block transition-all duration-300 ease-out group-hover:opacity-0 group-hover:-translate-y-full leading-normal">
                      {isSubmitting ? "Sending..." : "Submit"}
                    </span>
                    <span className="absolute inset-0 inline-block transition-all duration-300 ease-out opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 leading-normal">
                      {isSubmitting ? "Sending..." : "Submit"}
                    </span>
                  </span>
                  <span className="relative inline-block overflow-hidden w-6 h-6 max-sm:!w-[18px] max-sm:!h-[18px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="inline-block transition-all duration-300 ease-out group-hover:opacity-0 group-hover:-translate-y-full max-sm:!w-[18px] max-sm:!h-[18px] max-sm:mb-[4px]"
                    >
                      <path
                        d="M12 22L22 12M22 12L12 2M22 12L2 12"
                        stroke="white"
                        strokeWidth="1.42857"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="absolute inset-0 inline-block transition-all duration-300 ease-out opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 max-sm:!w-[18px] max-sm:!h-[18px]"
                    >
                      <path
                        d="M12 22L22 12M22 12L12 2M22 12L2 12"
                        stroke="white"
                        strokeWidth="1.42857"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-8 contact-card flex items-center justify-center">
            <div className="rounded-3xl py-[73.5px] px-12 max-sm:p-8 h-full flex justify-center flex-col">
              <h3 className="text-[56px] leading-[48px] text-[#232061] mb-2 max-sm:text-[40px] font-extralight">
                What Happens Next?
              </h3>
              <p className="text-2xl text-[#232061] mb-16 font-semibold font-roboto max-sm:text-xl max-sm:mb-12">
                3 easy steps
              </p>

              <div className="space-y-16 relative max-sm:space-y-12">
                <div className="flex items-start space-x-4 max-sm:!space-x-6 max-sm:!mb-10">
                  <div className="flex gap-6">
                    <h3 className="font-roboto text-xl text-[#232061] font-light shrink-0 max-sm:text-base">
                      Step 1
                    </h3>
                    <div className="font-roboto flex flex-col gap-2">
                      {" "}
                      <h4 className="text-xl text-[#232061] font-semibold max-sm:text-base">
                        Review & Response
                      </h4>
                      <p className="text-lg text-[#232061] leading-[26px] !font-roboto !font-light max-sm:text-sm max-sm:leading-5">
                        We will review your form and contact you within 1–2
                        business days to confirm your details.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 max-sm:!space-x-6 max-sm:!mb-10">
                  <div className="flex gap-6">
                    <h3 className="font-roboto text-xl text-[#232061] font-light shrink-0 max-sm:text-base">
                      Step 2
                    </h3>
                    <div className="font-roboto flex flex-col gap-2">
                      {" "}
                      <h4 className="text-xl text-[#232061] font-semibold max-sm:text-base">
                        Consultation
                      </h4>
                      <p className="text-lg text-[#232061] leading-[26px] !font-roboto !font-light max-sm:text-sm max-sm:leading-5">
                        We&apos;ll schedule a short call to understand your
                        needs and recommend the right accounting solutions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 max-sm:!space-x-6 max-sm:!mb-10">
                  <div className="flex gap-6">
                    <h3 className="font-roboto text-xl text-[#232061] font-light shrink-0 max-sm:text-base">
                      Step 3
                    </h3>
                    <div className="font-roboto flex flex-col gap-2">
                      {" "}
                      <h4 className="text-xl text-[#232061] font-semibold max-sm:text-base">
                        Proposal & Onboarding
                      </h4>
                      <p className="text-lg text-[#232061] leading-[26px] !font-roboto !font-light max-sm:text-sm max-sm:leading-5">
                        You&apos;ll receive a customized service proposal, and
                        once approved, we&apos;ll begin your onboarding process
                        right away.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
