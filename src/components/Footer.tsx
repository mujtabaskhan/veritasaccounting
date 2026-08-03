// import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer
      className={`bg-white sticky -bottom-40 left-0 right-0 h-screen z-[10] ${className} relative`}
      style={{
        WebkitTransform: "translateZ(0)",
        transform: "translateZ(0)",
        WebkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
        willChange: "transform",
      }}
    >
      <Image
        src="/footer-bg.webp"
        alt="footer-bg"
        width={1440}
        height={100}
        className="w-full h-full object-cover absolute top-0 left-0 z-0 max-sm:blur-[0.3px]"
      />
      {/* <Link
        href="#"
        className="view-more-btn group/btn inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#232061] hover:bg-[#232061]/90 text-white font-medium transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40 hover:scale-105 absolute right-20 top-72 z-20 max-lg:bottom-32 max-lg:top-auto max-lg:right-20 h-max w-max max-lg:bg-white max-lg:text-[#232061] max-sm:px-4 max-sm:py-2 max-sm:right-4 max-sm:text-xs"
      >
        <span>Top</span>
        <ChevronLeft className="w-4 h-4 rotate-90" />
      </Link> */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#232061] via-[#232061]/90 to-transparent flex items-end justify-start z-10 pb-20 max-sm:pb-26 max-lg:pb-20 h-[500px] max-sm:h-[600px]">
        <div
          className="grid max-w-7xl mx-auto max-sm:!grid-cols-1 max-lg:flex max-lg:flex-col"
          style={{ gridTemplateColumns: "2fr 2.5fr" }}
        >
          <Link
            href="/"
            className="flex flex-col gap-10 mr-20 max-sm:mr-0 max-sm:items-center max-sm:justify-center px-4"
          >
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
          </Link>

          <div className="grid grid-cols-3 gap-10 max-sm:mt-10 max-lg:px-4">
            <div className="flex flex-col gap-4">
              <h3
                className="text-white text-[28px] max-sm:text-xs font-bold pr-3 border-1 border-none"
                style={{ borderRight: "3px solid white" }}
              >
                Quick Links
              </h3>
              <div className="font-flex text-white text-[15px] flex flex-col gap-2 max-sm:text-[10px]">
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
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-white text-[20px] max-sm:text-xs font-bold">
                Services
              </h3>
              <div className="font-flex text-white text-[15px] flex flex-col gap-3 max-sm:text-[10px] max-sm:gap-2">
                <Link href="/services#accounting" className="underline">
                  Accounting
                </Link>
                <Link href="/services#tax" className="underline">
                  Tax Services
                </Link>
                <Link href="/services#payroll" className="underline">
                  Payroll Services
                </Link>
                <Link href="/services#compliance" className="underline">
                  Audit & Compliance Support
                </Link>
                <Link href="/services#cfo-services" className="underline">
                  CFO Services
                </Link>
                <Link href="/services#advisory" className="underline">
                  Business Advisory
                </Link>
                <Link href="/services#administration" className="underline">
                  Business Administration
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-white text-[20px] font-bold max-sm:text-xs">
                Follow us
              </h3>
              <div className="font-flex text-white text-[15px] flex flex-col gap-3 max-sm:text-[10px] max-sm:gap-2">
                <Link
                  href="https://www.instagram.com/veritas_accounting/"
                  target="_blank"
                  className="underline"
                >
                  Instagram
                </Link>

                <Link href="#" className="underline">
                  Linkedin
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="pt-5 absolute bottom-5 w-full max-sm:pt-4 max-sm:bottom-4 px-4"
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
