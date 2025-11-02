import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white sticky bottom-0 left-0 right-0 h-[800px] z-10">
      <Image
        src="/footer-bg.png"
        alt="footer-bg"
        width={1440}
        height={100}
        className="w-full h-full object-cover absolute top-0 left-0 z-0 max-sm:blur-[0.3px]"
      />
      <div className="flex items-end justify-start h-full relative z-10 pb-40 max-sm:pb-26">
        <div
          className="grid max-w-7xl mx-auto max-sm:!grid-cols-1 max-sm:flex max-sm:flex-col"
          style={{ gridTemplateColumns: "2fr 2.5fr" }}
        >
          <div className="flex flex-col gap-10 mr-20 max-sm:mr-0 max-sm:items-center max-sm:justify-center">
            <Image
              src="/logo-white.png"
              alt="logo"
              width={200}
              height={200}
              className="h-max w-[300px]"
            />
            <p className="font-roboto text-white text-xs max-w-[350px] max-sm:text-center">
              We provide bookkeeping, corporate and personal tax filing, payroll
              management, financial reporting, business advisory, and virtual
              CFO services.
            </p>
          </div>

          <div className="grid grid-cols-3 items-center gap-10 max-sm:mt-10">
            <div className="flex flex-col gap-4">
              <h3
                className="text-white text-[30px] max-sm:text-xs font-bold pr-3 border-1 border-none"
                style={{ borderRight: "3px solid white" }}
              >
                Quick Links
              </h3>
              <div className="font-flex text-white text-[15px] flex flex-col gap-3 max-sm:text-[10px]">
                <Link href="/" className="underline">
                  Home
                </Link>
                <Link href="/expertise" className="underline">
                  Expertise
                </Link>
                <Link href="/careers" className="underline">
                  We’re Hiring
                </Link>
                <Link href="/faq" className="underline">
                  FAQ
                </Link>
                <Link href="/contact-us" className="underline">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-white text-[20px] max-sm:text-xs font-bold">
                Services
              </h3>
              <div className="font-flex text-white text-[15px] flex flex-col gap-3 max-sm:text-[10px]">
                <Link href="/" className="underline">
                  Accounting
                </Link>
                <Link href="/tax-services" className="underline">
                  Tax Services
                </Link>
                <Link href="/payroll-services" className="underline">
                  Payroll Services
                </Link>
                <Link href="/audit-and-compliance-support" className="underline">
                  Audit & Compliance Support
                </Link>
                <Link href="/cfo-services" className="underline">
                  CFO Services
                </Link>
                <Link href="/business-advisory" className="underline">
                  Business Advisory
                </Link>
                <Link href="/business-administration" className="underline">
                  Business Administration
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-white text-[20px] font-bold max-sm:text-xs">
                Follow us
              </h3>
              <div className="font-flex text-white text-[15px] flex flex-col gap-3 max-sm:text-[10px]">
                <Link href="/" className="underline">
                  Instagram
                </Link>
                <Link href="/expertise" className="underline">
                  X
                </Link>
                <Link href="/careers" className="underline">
                  Linkedin
                </Link>
               
              </div>
            </div>
          </div>
        </div>
        <div
          className="pt-10 absolute bottom-10 w-full max-sm:pt-4 max-sm:bottom-4"
          style={{ borderTop: "1px solid white" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between w-full text-white text-xs font-flex max-sm:flex-col max-sm:text-[10px] max-sm:gap-4">
              <p>© 2025 Veritas Accounting & Tax Consultants</p>
              <div className="flex gap-16">
                <Link
                  href="/privacy-policy"
                  className="max-sm:underline max-sm:text-center"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="max-sm:underline max-sm:text-center"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/cookies"
                  className="max-sm:underline max-sm:text-center"
                >
                  Cookies Settings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
