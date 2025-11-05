import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <section className="bg-white pt-40 max-lg:pt-20 px-4 pb-[198px] max-xl:pb-40 max-lg:pb-20 max-md:pb-32 rounded-bl-[60px] rounded-br-[60px]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 max-sm:mb-20">
            <nav className="text-[#232061] text-xl font-flex max-sm:text-xs">
              <span className="font-normal">Home</span>
              <span className="font-black mx-5">&gt;</span>
              <span className="font-normal">Privacy Policy</span>
              <span className="font-black mx-5">&gt;</span>
              <span className="font-normal underline">
                Veritas Accounting & Tax Consultants
              </span>
            </nav>
          </div>

          <div className="font-flex text-[#232061] text-xl mb-12 max-sm:text-sm max-sm:mb-6">
            <h3 className="text-[30px] font-semibold mb-12 max-sm:mb-6 max-sm:text-xl">
              Privacy Policy
            </h3>
            <p>Effective Date: 01/11/2025</p>
            <p>Last Updated: 01/11/2025</p>

            <p>
              At Veritas Accounting & Tax Consultants (“we,” “our,” or “us”),
              your privacy is our top priority. We are committed to protecting
              your personal information and maintaining transparency about how
              we collect, use, and safeguard it. This policy outlines our
              practices in compliance with Canada’s Personal Information
              Protection and Electronic Documents Act (PIPEDA) and other
              applicable laws.
            </p>
          </div>

          <div className="font-flex flex flex-col gap-12 max-sm:gap-6 text-[#232061] text-xl max-sm:text-sm">
            <div>
              <h3 className="font-bold">1. Information We Collect</h3>
              <p>
                We collect personal and business information necessary to
                provide our accounting, tax, and advisory services. This may
                include:
              </p>
              <ul className="pl-8 list-disc">
                <li>Full name, address, email, and phone number</li>
                <li>
                  Business name, registration details, and financial records
                </li>
                <li>Tax information (e.g., SIN, BN, or CRA account details)</li>
                <li>Payment and billing information</li>
                <li>Website usage data through cookies and analytics</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold">2. How We Use Your Information</h3>
              <p>We use the collected information to:</p>
              <ul className="pl-8 list-disc">
                <li>Deliver accounting, tax, and consulting services</li>
                <li>
                  Communicate with you regarding your account or inquiries
                </li>
                <li>Prepare and file tax returns and financial reports</li>
                <li>Maintain accurate business records</li>
                <li>Improve our website, services, and client experience</li>
                <li>Meet legal, regulatory, and compliance requirements</li>
              </ul>
              <p>
                We will never sell, rent, or share your personal information for
                commercial purposes.
              </p>
            </div>

            <div>
              <h3 className="font-bold">3. How We Protect Your Information</h3>
              <p>
                We take data security seriously. Your information is protected
                through:
              </p>
              <ul className="pl-8 list-disc">
                <li>Secure, encrypted data storage and transfer</li>
                <li>Limited access to authorized staff only</li>
                <li>Regular monitoring and system updates</li>
                <li>Use of secure client portals for document sharing</li>
              </ul>
              <p>
                Despite these measures, no electronic system is completely
                secure. However, we continuously work to maintain the highest
                possible level of protection.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                4. Information Sharing and Disclosure
              </h3>
              <p>We may share information only when:</p>
              <ul className="pl-8 list-disc">
                <li>Required by law, regulation, or court order</li>
                <li>
                  Necessary to complete tax filings, audits, or other services
                  (e.g., CRA correspondence)
                </li>
                <li>
                  With trusted third-party service providers who support our
                  operations (e.g., cloud storage, payment processors)
                </li>
              </ul>
            </div>

            <p>
              All third parties are bound by confidentiality and data protection
              obligations.
            </p>

            <div>
              <h3 className="font-bold">5. Your Rights</h3>
              <p>You have the right to:</p>
              <ul className="pl-8 list-disc">
                <li>Access the personal information we hold about you</li>
                <li>
                  Request corrections to inaccurate or incomplete information
                </li>
                <li>
                  Withdraw consent (subject to legal or contractual limitations)
                </li>
                <li>
                  Request deletion of your data when it’s no longer required
                </li>
              </ul>
              <p>
                To exercise these rights, please contact us using the
                information below.
              </p>
            </div>

            <div>
              <h3 className="font-bold">6. Data Retention</h3>
              <p>
                We retain your information only as long as necessary to fulfill
                the purposes for which it was collected and to comply with legal
                and professional obligations.
              </p>
            </div>

            <div>
              <h3 className="font-bold">7. Cookies and Website Tracking</h3>
              <div>
                Our website uses cookies to improve your experience and collect
                anonymous analytics data.You can manage your cookie preferences
                at any time through your browser settings.For more details,
                please review our{" "}
                <Link href="/cookies" className="underline">
                  Cookies Policy
                </Link>{" "}
                .
              </div>
            </div>

            <div>
              <h3 className="font-bold">8. Links to Other Websites</h3>
              <p>
                Our website may contain links to external sites. We are not
                responsible for the privacy practices or content of those
                websites.
              </p>
            </div>

            <div>
              <h3 className="font-bold">9. Updates to This Policy</h3>
              <p>
                We may update this Privacy Policy periodically to reflect
                changes in our practices or legal requirements. Updates will be
                posted on this page with a revised “Last Updated” date.
              </p>
            </div>

            <div>
              <h3 className="font-bold">10. Contact Us</h3>
              <p>
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or our data practices, please contact us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
