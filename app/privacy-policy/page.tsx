"use client";

import Footer from "../components/footer";

export default function PrivacyPolicy() {
  return (
    <>
      <div className="min-h-screen bg-black text-white">
        {/* Header Section with Background Image */}
        <div
          className="relative px-6 md:py-[90px] py-[50px] md:px-12 lg:px-24 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/terms.png")',
          }}
        >
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start pb-[30px] ">
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl md:text-left text-center jakarta lg:text-6xl font-[500] mb-6 text-white ">
                  PRIVACY POLICY
                </h1>
              </div>
              <div className="mt-6 md:mt-0 md:ml-8 text-right">
                <div className="text-sm md:text-base text-white ">
                  <div className="mb-2">
                    <span className="font-semibold jakarta">
                      EFFECTIVE DATE:{" "}
                    </span>
                    <span>03/27/2025</span>
                  </div>
                  <div>
                    <span className="font-semibold jakarta">
                      LAST UPDATED:{" "}
                    </span>
                    <span>06/12/2025</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm jakarta md:text-base lg:text-[16px] leading-relaxed text-white/80 w-full mb-4">
              Welcome to influencer. These Terms and Conditions
              (&quot;Terms&quot;) govern your use of our website located at
              www.influencer.app (&quot;Website&quot;), as well as any
              associated services, features, or content provided by Influencer
              (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or
              &quot;our&quot;).
            </p>
            <p className="text-sm jakarta md:text-base lg:text-[16px] leading-relaxed text-white/80 w-full">
              By using the Website, you agree to the collection and use of
              information in accordance with this Privacy Policy.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-6 py-12 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto space-y-12">
            {/* Section 1: Information We Collect */}
            <section>
              <h2 className="text-2xl text-white uppercase jakarta md:text-[38px] font-bold mb-4">
                1. INFORMATION WE COLLECT
              </h2>
              <p className="jakarta text-white/80 leading-relaxed mb-4">
                We may collect personal information directly from you or
                automatically when you use our Website or services:
              </p>

              <div className="mb-6">
                <h3 className="text-lg jakarta font-semibold text-white mb-2">
                  a. Information You Provide
                </h3>
                <ul className="list-disc jakarta list-inside text-white/80 space-y-1 ml-4">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Social media usernames (if applicable)</li>
                  <li>Contact information</li>
                  <li>
                    Billing and payment details (for SaaS or creator management
                    services)
                  </li>
                  <li>
                    KYC (Know Your Customer) or AML (Anti-Money Laundering)
                    documentation (if applicable)
                  </li>
                  <li>
                    Communication records (emails, chats, support inquiries)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg jakarta font-semibold text-white mb-2">
                  b. Automatically Collected Information
                </h3>
                <ul className="list-disc jakarta list-inside text-white/80 space-y-1 ml-4">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Device identifiers</li>
                  <li>Operating systems</li>
                  <li>
                    Usage data (pages visited, time on site, referral links)
                  </li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </section>

            {/* Section 2: How We Use Your Information */}
            <section>
              <h2 className="text-2xl text-white uppercase md:text-[38px] jakarta font-bold mb-4">
                2. HOW WE USE YOUR INFORMATION
              </h2>
              <p className="jakarta text-white/80 leading-relaxed mb-4">
                We may use your information to:
              </p>
              <ul className="list-disc jakarta list-inside text-white/80 space-y-2 ml-4">
                <li>Provide and maintain our services</li>
                <li>Process registrations, login, or account</li>
                <li>
                  Facilitate token access or participation (if applicable)
                </li>
                <li>Process payments and transactions</li>
                <li>
                  Communicate with you about your account or service updates
                </li>
                <li>Respond to inquiries, support requests, or feedback</li>
                <li>Analyze usage to improve our services and marketing</li>
                <li>
                  Comply with legal, regulatory, or contractual obligations
                </li>
              </ul>
            </section>

            {/* Section 3: Sharing of Information */}
            <section>
              <h2 className="text-2xl text-white uppercase md:text-[38px] jakarta font-bold mb-4">
                3. SHARING OF INFORMATION
              </h2>
              <p className="jakarta text-white/80 leading-relaxed mb-4">
                We do not sell or rent your personal data. We may share your
                information with:
              </p>
              <ul className="list-disc jakarta list-inside text-white/80 space-y-2 ml-4">
                <li>
                  Service providers and vendors who assist with operations
                  (e.g., payment processors, hosting, CRM platforms)
                </li>
                <li>Professional advisors or legal (tax accounting)</li>
                <li>Regulatory authorities (if required by law)</li>
                <li>
                  Business partners or affiliates (only with your consent)
                </li>
              </ul>
            </section>

            {/* Section 4: Cookies and Tracking Technologies */}
            <section>
              <h2 className="text-2xl text-white uppercase md:text-[38px] jakarta font-bold mb-4">
                4. COOKIES AND TRACKING TECHNOLOGIES
              </h2>
              <p className="jakarta text-white/80 leading-relaxed mb-4">
                We use cookies, web beacons, and similar technologies to:
              </p>
              <ul className="list-disc jakarta list-inside text-white/80 space-y-2 ml-4">
                <li>Enhance user experience</li>
                <li>Track usage data</li>
                <li>Analyze traffic patterns</li>
                <li>Personalize content and advertising (where applicable)</li>
                <li>
                  You can manage or disable cookies through your browser
                  settings.
                </li>
              </ul>
            </section>

            {/* Section 5: Data Retention */}
            <section>
              <h2 className="text-2xl text-white uppercase md:text-[38px] jakarta font-bold mb-4">
                5. DATA RETENTION
              </h2>
              <p className="jakarta text-white/80 leading-relaxed">
                We retain your personal data as long as necessary to fulfill the
                purposes outlined in this policy, unless a longer retention
                period is required by law.
              </p>
            </section>

            {/* Section 6: Data Security */}
            <section>
              <h2 className="text-2xl text-white uppercase md:text-[38px] jakarta font-bold mb-4">
                6. DATA SECURITY
              </h2>
              <p className="jakarta text-white/80 leading-relaxed">
                We implement appropriate technical and organizational measures
                to protect your personal data against unauthorized access,
                disclosure, alteration, or destruction. However, no system is
                100% secure, so use the Website at your own risk.
              </p>
            </section>

            {/* Section 7: International Transfers */}
            <section>
              <h2 className="text-2xl text-white uppercase md:text-[38px] jakarta font-bold mb-4">
                7. INTERNATIONAL TRANSFERS
              </h2>
              <p className="jakarta text-white/80 leading-relaxed">
                As a global platform, your data may be stored or processed in
                countries outside your jurisdiction. By using our services, you
                consent to the transfer of your information to such
                jurisdictions, including countries that may not have equivalent
                data protection laws.
              </p>
            </section>

            {/* Section 8: Rights Under GDPR / CCPA */}
            <section>
              <h2 className="text-2xl text-white uppercase md:text-[38px] jakarta font-bold mb-4">
                8. RIGHTS UNDER GDPR / CCPA
              </h2>
              <p className="jakarta text-white/80 leading-relaxed mb-4">
                Depending on your jurisdiction, you may have the right to:
              </p>
              <ul className="list-disc jakarta list-inside text-white/80 space-y-2 ml-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
              </ul>
              <p className="jakarta text-white/80 leading-relaxed mt-4">
                To exercise these rights, contact us at [Insert Contact Email].
              </p>
            </section>

            {/* Section 9: Third-Party Services */}
            <section>
              <h2 className="text-2xl text-white uppercase md:text-[38px] jakarta font-bold mb-4">
                9. THIRD-PARTY SERVICES
              </h2>
              <p className="jakarta text-white/80 leading-relaxed">
                Our Website may contain links to third-party websites or
                services. We are not responsible for the privacy practices or
                content of such third parties.
              </p>
            </section>

            {/* Section 10: Children's Privacy */}
            <section>
              <h2 className="text-2xl text-white uppercase md:text-[38px] jakarta font-bold mb-4">
                10. CHILDREN&apos;S PRIVACY
              </h2>
              <p className="jakarta text-white/80 leading-relaxed">
                Our services are not intended for individuals under 18 years of
                age. We do not knowingly collect personal data from children.
              </p>
            </section>

            {/* Section 11: Changes to This Privacy Policy */}
            <section>
              <h2 className="text-2xl text-white uppercase md:text-[38px] jakarta font-bold mb-4">
                11. CHANGES TO THIS PRIVACY POLICY
              </h2>
              <p className="jakarta text-white/80 leading-relaxed">
                We may update this Privacy Policy periodically. Any changes will
                be posted on this page with an updated effective date. Your
                continued use of the Website constitutes acceptance of the
                updated policy.
              </p>
            </section>

            {/* Section 12: Contact Us */}
            <section>
              <h2 className="text-2xl text-white uppercase md:text-[38px] jakarta font-bold mb-4">
                12. CONTACT US
              </h2>
              <p className="jakarta text-white/80 leading-relaxed mb-2">
                If you have questions about this Privacy Policy or your personal
                data, please contact us at:
              </p>
              <p className="text-white/80">Email: info@influencer.app</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
