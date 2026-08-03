import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

const Terms = () => {
  return (
    <div className="w-full bg-[#232061] p-3 min-h-screen rounded-bl-[60px] rounded-br-[60px]">
      <main
        className="w-full min-h-screen relative rounded-tl-[60px] rounded-tr-[60px] overflow-hidden"
        style={{ width: "100%", minHeight: "100vh" }}
      >
        <Navbar />
        <section
          className="w-full bg-white pb-[198px] max-xl:pb-40 max-lg:pb-20 max-md:pb-32 rounded-bl-[60px] rounded-br-[60px] max-sm:pb-14"
          style={{ width: "100%" }}
        >
          <div className="relative z-[10] max-lg:z-[1] max-w-7xl mx-auto px-14 max-sm:px-4 pt-52 max-lg:!pt-0 max-sm:mt-0 max-sm:!pt-3">
            <div className="mb-14">
              <nav className="text-[#232061] font-flex text-xs">
                <Link href="/" className="font-normal">
                  Home
                </Link>{" "}
                <span className="font-black mx-5">&gt;</span>
                <Link href="/terms" className="font-normal">
                  Terms & Conditions
                </Link>
                <span className="font-black mx-5">&gt;</span>
                <span className="font-normal underline">
                  Veritas Accounting & Tax Consultants
                </span>
              </nav>
            </div>

            <div className="font-flex text-[#232061] text-xl mb-12 max-sm:text-sm max-sm:mb-6">
              <h1 className="text-[30px] font-semibold mb-12 max-sm:mb-6 max-sm:text-xl">
                Terms & Conditions
              </h1>
              <p>Effective Date: 01/11/2025</p>
              <p>Last Updated: 01/11/2025</p>

              <p>
                Welcome to Veritas Accounting & Tax Consultants (“we,” “our,” or
                “us”). By accessing or using our website
                https://www.veritasaccounting.ca or engaging our services, you
                agree to comply with and be bound by these Terms and Conditions.
                Please read them carefully before proceeding.
              </p>
            </div>

            <div className="font-flex flex flex-col gap-12 max-sm:gap-6 text-[#232061] text-xl max-sm:text-sm">
              <div>
                <h3 className="font-bold">1. Acceptance of Terms</h3>
                <p>
                  By using our website or services, you acknowledge that you
                  have read, understood, and agree to these Terms. If you do not
                  agree, please do not use our website or services.
                </p>
              </div>

              <div>
                <h3 className="font-bold">2. Services</h3>
                <p>
                  Veritas Accounting & Tax Consultants provides professional
                  accounting, bookkeeping, payroll, tax, and advisory
                  services.All services are subject to a written agreement or
                  engagement letter that outlines the specific scope, fees, and
                  timelines for your engagement.
                </p>
              </div>

              <div>
                <h3 className="font-bold">3. Client Responsibilities</h3>
                <p>
                  Clients are responsible for providing accurate, complete, and
                  timely information necessary for us to perform our services.We
                  are not liable for errors or delays resulting from incomplete,
                  inaccurate, or late submissions.
                </p>
              </div>

              <div>
                <h3 className="font-bold">4. Fees and Payment</h3>
                <p>
                  Service fees will be communicated and agreed upon before
                  engagement.
                </p>
                <p>
                  Invoices are due as per the terms outlined in your service
                  agreement. Late payments may incur interest or service
                  suspension until payment is received.
                </p>
              </div>

              <div>
                <h3 className="font-bold">5. Confidentiality</h3>
                <p>
                  We respect your privacy and maintain strict confidentiality of
                  all client information.
                </p>
                <div>
                  Your data will not be shared with third parties except as
                  required by law or with your written consent. Please refer to
                  our{" "}
                  <Link href="/privacy" className="underline">
                    Privacy Policy
                  </Link>{" "}
                  for more details.
                </div>
              </div>

              <div>
                <h3 className="font-bold">6. Limitation of Liability</h3>
                <p>
                  While we take every effort to ensure accuracy and quality in
                  our work, Veritas Accounting & Tax Consultants is not liable
                  for any indirect, incidental, or consequential losses arising
                  from the use of our services or website.
                </p>
                <p>
                  Our total liability shall not exceed the fees paid for the
                  specific services in question.
                </p>
              </div>

              <div>
                <h3 className="font-bold">7. Use of Website</h3>
                <p>
                  While we take every effort to ensure accuracy and quality in
                  our work, Veritas Accounting & Tax Consultants is not liable
                  for any indirect, incidental, or consequential losses arising
                  from the use of our services or website.
                </p>
                <p>
                  Our total liability shall not exceed the fees paid for the
                  specific services in question.
                </p>
              </div>

              <div>
                <h3 className="font-bold">8. Third-Party Links</h3>
                <p>
                  Our website may contain links to third-party websites. We are
                  not responsible for the content, accuracy, or privacy
                  practices of those external sites.
                </p>
              </div>

              <div>
                <h3 className="font-bold">9. Termination</h3>
                <p>
                  We reserve the right to suspend or terminate access to our
                  website or services at our discretion, without prior notice,
                  if we believe there has been a violation of these Terms.
                </p>
              </div>

              <div>
                <h3 className="font-bold">10. Governing Law</h3>
                <p>
                  These Terms are governed by and construed in accordance with
                  the laws of the Province of Ontario and the laws of Canada
                  applicable therein.
                </p>
                <p>Any disputes will be resolved in the courts of Ontario.</p>
              </div>

              <div>
                <h3 className="font-bold">11. Changes to These Terms</h3>
                <p>
                  We may update these Terms and Conditions periodically. Changes
                  will be effective immediately upon posting on our website, and
                  your continued use constitutes acceptance of the revised
                  Terms.
                </p>
              </div>

              <div>
                <h3 className="font-bold">12. Contact Us</h3>
                <p>
                  If you have any questions about these Terms and Conditions,
                  please contact us.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Terms;
