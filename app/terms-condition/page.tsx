"use client";

import Footer from "../components/footer";

export default function TermsAndConditions() {
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
                  TERMS AND CONDITIONS
                </h1>
              </div>
              <div className="mt-6 md:mt-0 md:ml-8 text-right">
                <div className="text-sm md:text-base text-white ">
                  <div className="mb-2">
                    <span className="font-semibold jakarta">
                      EFFECTIVE DATE:{" "}
                    </span>
                    <span>03/27/2024</span>
                  </div>
                  <div>
                    <span className="font-semibold jakarta">
                      LAST UPDATED:{" "}
                    </span>
                    <span>04/16/2024</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm jakarta md:text-base lg:text-[16px] leading-relaxed  text-white/80 w-full">
              Welcome to influencer. These Terms and Conditions
              (&quot;Terms&quot;) govern your use of our website located at
              www.influencer.app (&quot;Website&quot;), as well as any
              associated services, features, or content provided by Influencer
              (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or
              &quot;our&quot;).
            </p>
            <p className="text-sm jakarta md:text-base lg:text-[16px] leading-relaxed  text-white/80 w-full">
              By accessing or using the Website or our services, you agree to be
              bound by these Terms. If you do not agree, you may not access or
              use our services.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-6 py-12 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto space-y-12">
            {/* Section 1: Eligibility */}
            <section>
              <h2 className="text-2xl text-white uppercase jakarta md:text-[38px] font-bold mb-4">
                1. ELIGIBILITY
              </h2>
              <p className="jakarta text-white/80 leading-relaxed">
                You must be at least 18 years old to use our services. By using
                the Website, you confirm that you meet this requirement.
              </p>
            </section>

            {/* Section 2: Services Overview */}
            <section>
              <h2 className="text-2xl text-white uppercase md:text-[38px] jakarta font-bold mb-4">
                2. SERVICES OVERVIEW
              </h2>
              <p className="jakarta text-white/80 leading-relaxed mb-4">
                Influencer operates a creator management platform that provides:
              </p>
              <ul className="list-disc jakarta list-inside text-white/80 space-y-2 ml-4">
                <li>
                  Digital marketing, audience growth, and monetization solutions
                  for content creators
                </li>
                <li>Analytics and performance tracking tools</li>
                <li>
                  Crypto recommendations designed to support platform growth
                  through systems and burn strategies
                </li>
                <li>
                  Educational consulting, and community resources for creator
                  platform participants
                </li>
                <li>
                  Token-based rewards and incentive programs for qualifying
                  users
                </li>
              </ul>
            </section>

            {/* Section 3: Not Financial or Investment Advice */}
            <section>
              <h2 className="text-2xl text-white uppercase md:text-[38px] jakarta font-bold mb-4">
                3. NOT FINANCIAL OR INVESTMENT ADVICE
              </h2>
              <p className="jakarta text-white/80 leading-relaxed">
                Information provided on the Website, including token-related
                information, does not constitute financial, investment, legal,
                or tax advice. You should consult with qualified professionals
                before making any investment or financial decisions. With
                respect to any cryptocurrencies, digital assets, or tokens
                mentioned or featured on the Website.
              </p>
            </section>

            {/* Section 4: Token Disclaimer */}
            <section>
              <h2 className="text-2xl text-white uppercase md:text-[38px] jakarta font-bold mb-4">
                4. TOKEN DISCLAIMER
              </h2>
              <p className="jakarta text-white/80 leading-relaxed">
                Information provided on the Website, including token-related
                information, does not constitute financial, investment, legal,
                or tax advice. You should consult with qualified professionals
                before making any investment or financial decisions. Tokens are
                inherently volatile and speculative.
              </p>
            </section>

            {/* Section 5: Creator Management */}
            <section>
              <h2 className="text-2xl text-white uppercase md:text-[38px] jakarta font-bold mb-4">
                5. CREATOR MANAGEMENT
              </h2>
              <p className="jakarta text-white/80 leading-relaxed mb-4">
                For creators managed by Influencer:
              </p>
              <ul className="list-disc jakarta list-inside text-white/80 space-y-2 ml-4">
                <li>
                  Additional agreements will outline respective roles,
                  management terms, and services provided
                </li>
                <li>
                  Creators are responsible for ensuring they publish and any
                  illegal obligations associated with their content
                </li>
                <li>
                  Influencer is not responsible for content posted by creators
                  on third-party platforms
                </li>
              </ul>
            </section>

            {/* Section 6: Intellectual Property */}
            <section>
              <h2 className="text-2xl text-white uppercase md:text-[38px] jakarta font-bold mb-4">
                6. INTELLECTUAL PROPERTY
              </h2>
              <p className="jakarta text-white/80 leading-relaxed">
                All content, logos, trademarks, and intellectual property on the
                Website are owned by Influencer or its licensors. You may not
                copy, reproduce, distribute, or use any such content without
                express written permission.
              </p>
            </section>

            {/* Section 7: User Conduct */}
            <section>
              <h2 className="text-2xl text-white uppercase md:text-[38px] jakarta font-bold mb-4">
                7. USER CONDUCT
              </h2>
              <p className="jakarta text-white/80 leading-relaxed mb-4">
                By using the Website, you agree not to:
              </p>
              <ul className="list-disc jakarta list-inside text-white/80 space-y-2 ml-4">
                <li>Use the platform for any unlawful purpose</li>
                <li>Violate any applicable laws or regulations</li>
                <li>
                  Attempt to gain unauthorized access to any part of the Website
                  or its security
                </li>
                <li>
                  Interfere with or disrupt the Website or servers connected to
                  the Website
                </li>
              </ul>
            </section>

            {/* Section 8: Limitation of Liability */}
            <section>
              <h2 className="text-2xl text-white uppercase md:text-[38px] jakarta font-bold mb-4">
                8. LIMITATION OF LIABILITY
              </h2>
              <p className="jakarta text-white/80 leading-relaxed mb-4">
                To the maximum extent permitted by law, Influencer and its
                affiliates, officers, employees, and partners shall not be
                liable for any direct, indirect, incidental, or consequential
                damages, including but not limited to:
              </p>
              <ul className="list-disc jakarta list-inside text-white/80 space-y-2 ml-4">
                <li>Loss of profits, data, or business opportunities</li>
                <li>Any reliance on information provided by the Website</li>
                <li>
                  Any malfunction or loss to or alteration of your transmissions
                  or data
                </li>
                <li>Any other matter relating to the Website</li>
              </ul>
            </section>

            {/* Section 9: Indemnification */}
            <section>
              <h2 className="text-2xl text-white uppercase md:text-[38px] jakarta font-bold mb-4">
                9. INDEMNIFICATION
              </h2>
              <p className="jakarta text-white/80 leading-relaxed">
                You agree to indemnify and hold harmless Influencer and its
                affiliates from any claims, damages, liabilities, or expenses
                arising out of your use of the Website, violation of these
                Terms, or infringement of any rights of a third party.
              </p>
            </section>

            {/* Section 10: Governing Law */}
            <section>
              <h2 className="text-2xl text-white uppercase md:text-[38px] jakarta font-bold mb-4">
                10. GOVERNING LAW
              </h2>
              <p className="jakarta text-white/80 leading-relaxed">
                These Terms shall be governed by and construed in accordance
                with the laws of [Delaware], without regard to conflict of law
                principles. Any disputes will be resolved exclusively in the
                courts of [Delaware].
              </p>
            </section>

            {/* Section 11: Modifications */}
            <section>
              <h2 className="text-2xl text-white uppercase md:text-[38px] jakarta font-bold mb-4">
                11. MODIFICATIONS
              </h2>
              <p className="jakarta text-white/80 leading-relaxed">
                We reserve the right to modify these Terms at any time. Any
                changes will be posted on this page with an updated effective
                date. Continued use of the Website constitutes acceptance of the
                revised Terms.
              </p>
            </section>

            {/* Section 12: Contact Information */}
            <section>
              <h2 className="text-2xl text-white uppercase md:text-[38px] jakarta font-bold mb-4">
                12. CONTACT INFORMATION
              </h2>
              <p className="jakarta text-white/80 leading-relaxed mb-2">
                For questions regarding these Terms, please contact us at:
              </p>
              <p className="text-white/80">Email: mgmt@influencer.app</p>
            </section>

            {/* Summary Disclaimers */}
            <section>
              <h2 className="text-2xl text-white uppercase md:text-[38px] jakarta font-bold mb-4">
                SUMMARY DISCLAIMERS FOR CRYPTO-COMPLIANCE:
              </h2>
              <ul className="list-disc jakarta list-inside text-white/80 space-y-2 ml-4">
                <li>This product is not a security or investment advisory</li>
                <li>No income or profit claims are made</li>
                <li>
                  The token market is not guaranteed regular or primary digital
                  products price appreciation or future financial returns
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
