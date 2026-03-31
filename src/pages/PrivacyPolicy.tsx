import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Introduction",
    content: `Delexity ("we", "our", or "us") operates the website www.delexity.com (the "Service"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.

By using our Service, you agree to the collection and use of information in accordance with this policy. We respect your privacy and are committed to protecting your personal information.`,
  },
  {
    title: "2. Information We Collect",
    content: `We collect information in the following ways:

Contact Form Data: When you fill out our contact form, we collect your name, email address, and any message or project details you choose to share. This information is provided voluntarily.

Analytics Data: We use analytics tools to understand how visitors interact with our website. This may include information such as your IP address (anonymised), browser type, pages visited, time spent on pages, and referring URLs.

Cookies: We use cookies and similar tracking technologies to enhance your experience on our website. See Section 5 for details.

We do not collect sensitive personal information such as payment card details, national identification numbers, or health data.`,
  },
  {
    title: "3. How We Use Your Information",
    content: `We use the information we collect for the following purposes:

— To respond to your enquiries and project requests submitted via our contact form.
— To communicate with you about potential or ongoing engagements.
— To improve and personalise your experience on our website.
— To analyse usage trends and monitor the effectiveness of our site.
— To comply with legal obligations and protect our legal interests.

We will not use your information for any purpose not described in this policy without your prior consent.`,
  },
  {
    title: "4. Data Sharing",
    content: `We do not sell, trade, or rent your personal information to third parties.

We may share your information with trusted third-party service providers who assist us in operating our website and delivering our services, subject to confidentiality agreements. These include:

— Analytics providers (e.g., Google Analytics, Plausible) that help us understand site traffic.
— Email service providers used to manage and respond to contact form submissions.
— Cloud infrastructure providers that host our website and data.

All third parties we work with are required to handle your data securely and in accordance with applicable data protection laws. We require that they not use your personal information for their own marketing purposes.`,
  },
  {
    title: "5. Cookies",
    content: `Our website uses the following types of cookies:

Strictly Necessary Cookies: These are essential for the website to function correctly and cannot be disabled. They do not store any personally identifiable information.

Analytics Cookies: These help us understand how visitors interact with our website by collecting information anonymously. This includes page views, session duration, and navigation paths.

Preference Cookies: These allow the website to remember choices you make and provide enhanced features.

You can control and manage cookies through your browser settings. Most browsers allow you to refuse cookies or to delete cookies that have already been set. Please note that disabling certain cookies may affect the functionality of our website.

To opt out of Google Analytics tracking, you can use the Google Analytics Opt-out Browser Add-on available at tools.google.com/dlpage/gaoptout.`,
  },
  {
    title: "6. Data Retention",
    content: `We retain your personal information only for as long as necessary to fulfil the purposes outlined in this policy.

Contact form submissions are retained for a period of 24 months from the date of receipt, after which they are securely deleted unless an ongoing business relationship requires longer retention.

Analytics data is retained in aggregated, anonymised form and is not subject to deletion requests.

If you wish to request deletion of your data at any time, please contact us using the details in Section 8.`,
  },
  {
    title: "7. Your Rights",
    content: `Depending on your location, you may have the following rights regarding your personal data:

Right of Access: You have the right to request a copy of the personal data we hold about you.

Right to Rectification: You have the right to request correction of any inaccurate or incomplete information.

Right to Erasure: You have the right to request that we delete your personal data under certain circumstances ("right to be forgotten").

Right to Restriction: You have the right to request that we restrict the processing of your data in certain circumstances.

Right to Portability: You have the right to receive your personal data in a structured, machine-readable format.

Right to Object: You have the right to object to the processing of your personal data for certain purposes, including direct marketing.

GDPR (European Union): If you are located in the EU or EEA, the above rights apply to you under the General Data Protection Regulation.

CCPA (California): If you are a California resident, you have additional rights under the California Consumer Privacy Act, including the right to know what personal information we have collected and the right to opt out of the sale of personal information (note: we do not sell personal information).

To exercise any of these rights, please contact us at privacy@delexity.com.`,
  },
  {
    title: "8. Contact",
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal data, please contact us at:

Email: privacy@delexity.com

We aim to respond to all privacy-related enquiries within 30 days of receipt.`,
  },
  {
    title: "9. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.

When we make material changes, we will update the "Last Updated" date at the top of this page. For significant changes that materially affect your rights, we will make reasonable efforts to notify you, which may include displaying a notice on our website.

We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information. Your continued use of our website following the posting of changes constitutes your acceptance of those changes.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#F5F2EC", color: "#1A1A2E" }}
    >
      {/* Header bar */}
      <div
        className="sticky top-0 z-50 border-b"
        style={{
          background: "rgba(245, 242, 236, 0.92)",
          backdropFilter: "blur(12px)",
          borderColor: "rgba(26, 26, 46, 0.1)",
        }}
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 font-space text-sm font-medium transition-colors duration-200 hover:opacity-70"
            style={{ color: "#1A1A2E" }}
          >
            <ArrowLeft size={16} />
            Back to Delexity
          </Link>
          <span
            className="font-syne font-bold text-lg"
            style={{ color: "#1A1A2E" }}
          >
            DELEXITY
          </span>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 lg:px-8 py-20">
        {/* Title block */}
        <div className="mb-16 pb-12 border-b" style={{ borderColor: "rgba(26, 26, 46, 0.12)" }}>
          <p
            className="font-mono-jet text-xs mb-4 tracking-widest uppercase"
            style={{ color: "#6B7A99" }}
          >
            Legal Document
          </p>
          <h1
            className="font-syne font-extrabold leading-tight mb-4"
            style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: "#1A1A2E" }}
          >
            Privacy Policy
          </h1>
          <p className="font-space text-sm" style={{ color: "#6B7A99" }}>
            Last Updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
          </p>
          <p
            className="font-space text-base mt-4 leading-relaxed"
            style={{ color: "#3a3a5c" }}
          >
            This policy explains how Delexity collects, uses, and protects your
            personal data. Please read it carefully.
          </p>
        </div>

        {/* Policy sections */}
        <div className="flex flex-col gap-14">
          {sections.map((section) => (
            <div key={section.title}>
              <h2
                className="font-syne font-bold text-xl mb-5"
                style={{ color: "#1A1A2E" }}
              >
                {section.title}
              </h2>
              <div className="font-space text-base leading-[1.8]" style={{ color: "#3a3a5c" }}>
                {section.content.split("\n\n").map((para, i) => (
                  <p key={i} className="mb-4 last:mb-0">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact block */}
        <div
          className="mt-16 p-8 rounded-2xl border"
          style={{
            background: "rgba(26, 26, 46, 0.04)",
            borderColor: "rgba(26, 26, 46, 0.1)",
          }}
        >
          <h3
            className="font-syne font-bold text-lg mb-2"
            style={{ color: "#1A1A2E" }}
          >
            Privacy Questions?
          </h3>
          <p
            className="font-space text-sm leading-relaxed mb-4"
            style={{ color: "#6B7A99" }}
          >
            If you have any questions about this Privacy Policy or would like to
            exercise your data rights, please contact us:
          </p>
          <a
            href="mailto:privacy@delexity.com"
            className="font-space text-sm font-medium transition-opacity duration-200 hover:opacity-70"
            style={{ color: "#1A1A2E", textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            privacy@delexity.com
          </a>
        </div>
      </main>

      {/* Dark footer */}
      <div
        className="mt-20 py-12 border-t"
        style={{ borderColor: "rgba(26, 26, 46, 0.1)" }}
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link
            to="/"
            className="font-syne font-extrabold text-xl tracking-tight"
            style={{ color: "#1A1A2E" }}
          >
            DELEXITY
          </Link>
          <p
            className="font-mono-jet text-xs"
            style={{ color: "#6B7A99" }}
          >
            © {new Date().getFullYear()} Delexity. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="font-space text-xs hover:opacity-70"
              style={{ color: "#6B7A99" }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="font-space text-xs hover:opacity-70"
              style={{ color: "#6B7A99" }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
