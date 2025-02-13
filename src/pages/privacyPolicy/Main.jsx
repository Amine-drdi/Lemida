import React, { useState } from "react";

const Main = () => {
  const [toggleParag1, setToggoleParag1] = useState(true);
  const [toggleParag2, setToggoleParag2] = useState(true);
  const [toggleParag3, setToggoleParag3] = useState(true);
  const [toggleParag4, setToggoleParag4] = useState(true);
  const [toggleParag5, setToggoleParag5] = useState(true);
  const [toggleParag6, setToggoleParag6] = useState(true);
  return (
    <section className="flex flex-col gap-[22px] w-full">
      <div className="flex flex-col gap-8">
        <h1 className="sm:font-bold font-semibold sm:text-[42px] text-[21px]">
          Politique de confidentialité
        </h1>
      </div>
      <div
        className={`${
          toggleParag1 ? "pb-8" : "pb-0"
        } flex flex-col gap-3 lg:pr-[53px] scroll-mt-16`}
        id="policy-1"
      >
        <div className="flex flex-row justify-between items-center">
          <p className="text-lg sm:font-bold font-semibold">
            Privacy Agreement
          </p>
          <button
            className="flex items-center justify-center"
            onClick={() => setToggoleParag1((prev) => !prev)}
          >
            {toggleParag1 ? (
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.75 8.375L8 1.625L1.25 8.375"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.25 1.625L8 8.375L14.75 1.625"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
        <div className={`${!toggleParag1 && "hidden"}`}>
          <p>
            This privacy policy describes the information CLOCKPACE LLC d/b/a
            The Luxury Consumer (“CLOCKPACE”, “we” or “us”) collect from End
            Users (“you”) of our website (the “Site”) and the information we
            collect on behalf of our clients who employ our technology to use
            our email messaging, analytics, and other services (the “Services”).
            <br />
            <br />
            This policy does not apply to third parties that CLOCKPACE does not
            own or control. Such third parties are not under CLOCKPACE’s control
            and CLOCKPACE is not responsible for their privacy or security
            practices.
            <br />
            <br /> Any order forms or additional agreements to which users agree
            governing the provision of optional CLOCKPACE features shall take
            precedence over the terms of this Privacy Policy to the extent of
            any differences, so please read such order forms or additional
            agreements carefully.
            <br />
            <br /> CLOCKPACE participates in and complies with the EU-U.S.
            Privacy Shield Framework and the Swiss-U.S. Privacy Shield
            Framework. CLOCKPACE’s accountability for personal data that it
            receives under the Privacy Shield and subsequently transfers to a
            third party is described in EU-U.S. Privacy Shield and Swiss-U.S.
            Privacy Shield Frameworks below.
          </p>
        </div>
      </div>
      <div
        className={`${
          toggleParag2 ? "pb-8" : "pb-0"
        } flex flex-col gap-3 lg:pr-[53px] scroll-mt-16`}
        id="policy-2"
      >
        <div
          className="flex flex-row justify-between items-center"
          id="policy-1"
        >
          <p className="text-lg sm:font-bold font-semibold">
            Site Privacy Policy
          </p>
          <button
            className="flex items-center justify-center"
            onClick={() => setToggoleParag2((prev) => !prev)}
          >
            {toggleParag2 ? (
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.75 8.375L8 1.625L1.25 8.375"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.25 1.625L8 8.375L14.75 1.625"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
        <div className={`${!toggleParag2 && "hidden"}`}>
          <p>
            We collect, process, and retain information from you and any devices
            you may use when you use or interact with our Site and Services, and
            in other ways described below.
            <br /> We receive and store information you enter on our Site or
            give us in any other way, including your name, mailing address,
            phone number, and email address, as well as company name, and
            colleagues’ names and email addresses. We collect information about
            your use of our Site, such as the pages you view and other
            interactions you have. We receive and store certain types of
            information whenever you interact with our Site. Our Site uses
            “cookies,” tagging and other tracking technologies to help enable us
            to enhance or personalize your online browsing experience. This
            information includes computer and connection information such as
            statistics on your page views, traffic to and from our Site,
            referral URL, ad data, your IP address, and device identifiers. This
            information also may include your browsing history, transaction
            history, and your web log information.
            <br /> We use your information to help us personalize and
            continually improve your experience on the Site, including
            fulfilling requests for information, analyzing and compiling trends
            and statistics, and communicating with you. For information about
            how to manage your information and the choices you have, see how to
            limit the use of your information below.
          </p>
        </div>
      </div>
      <div
        className={`${
          toggleParag3 ? "pb-8" : "pb-0"
        } flex flex-col gap-3 lg:pr-[53px] scroll-mt-16`}
        id="policy-3"
      >
        <div
          className="flex flex-row justify-between items-center"
          id="policy-1"
        >
          <p className="text-lg sm:font-bold font-semibold">
            Cookies and Interest-Based Advertising
          </p>
          <button
            className="flex items-center justify-center"
            onClick={() => setToggoleParag3((prev) => !prev)}
          >
            {toggleParag3 ? (
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.75 8.375L8 1.625L1.25 8.375"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.25 1.625L8 8.375L14.75 1.625"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
        <div className={`${!toggleParag3 && "hidden"}`}>
          <p>
            Cookies are alphanumeric identifiers transferred to your computer’s
            hard drive through your Web browser to enable our systems to
            recognize your browser and tell us how and when pages in our Site
            are visited and by how many people. Like most internet sites, we use
            cookies to enhance our users’ experience on the internet. These
            cookies do not collect personal information, and we do not combine
            information collected through cookies with other personal
            information to tell us who you are or what your name or e-mail
            address is.
            <br />
            <br /> Most browsers allow you to prevent the browser from accepting
            new cookies, to be notified when you receive a new cookie, or to
            disable cookies. If you delete your cookies or if you set your
            browser to decline cookies, some features of the Site may not work
            or may not work as designed. Note that if you choose to remove
            cookies, you may remove opt-out cookies that affect your advertising
            preferences.
            <br />
            <br /> We partner with third-party advertising companies who also
            use these tracking tools to provide advertisements on other
            websites. These third parties may use these technologies to collect
            information about you when you use the Site. They may collect
            information about your online activities over time and across
            different websites and other online services. They may also use
            persistent identifiers to track your Internet usage across other
            websites in their networks beyond the Site. They may use this
            information to provide you with interest-based advertising or other
            targeted content. While we do not knowingly provide these entities
            with information that personally identifies you such third parties
            may, with sufficient data from other sources, be able to personally
            identify you, unknownst to us.
            <br />
            <br /> Some content or applications on the Site may be served by
            unaffiliated third parties. We do not control these third parties’
            tracking technologies or how they may be used. We are not
            responsible for the content or privacy practices on any website not
            operated by us to which our Site links or that links to our Site.
            <br />
            <br />
            Your browser or device may include “Do Not Track” functionality. Our
            information collection and disclosure practices, and the choices
            that we provide to visitors, will continue to operate as described
            in this privacy notice, whether or not a Do Not Track signal is
            received.
            <br />
            <br /> We use Google Analytics, a web analytics service provided by
            Google, Inc., on our Site. Google Analytics uses cookies or other
            tracking technologies to help us analyze how users interact with and
            use the Site, compile reports on the Site’s activity, and provide
            other services related to Site activity and usage. The technologies
            used by Google may collect information such as your IP address, time
            of visit, whether you are a return visitor, and any referring
            website. The Site does not use Google Analytics to gather
            information that personally identifies you. The information
            generated by Google Analytics will be transmitted to and stored by
            Google and will be subject to Google’s privacy policies. To learn
            more about Google’s partner services and to learn how to opt out of
            tracking of analytics by Google, click here.
            <br />
            <br /> Many of the third party advertisers that place tracking tools
            on our Site are members of programs that offer you additional
            choices regarding the collection and use of your information. You
            can learn more about the options available to limit these third
            parties’ collection and use of your information by visiting the
            websites for the Network Advertising Initiative and the Digital
            Advertising Alliance.
            <br />
            <br /> Similarly, you can learn about your options to opt-out of
            mobile app tracking by certain advertising networks through your
            device settings.
            <br />
            <br /> Please note that opting-out of advertising networks services
            does not mean that you will not receive advertising on other
            websites, nor will it prevent the receipt of interest-based
            advertising from third parties that do not participate in these
            programs. It will, however, exclude you from interest-based
            advertising conducted through participating networks, as provided by
            their policies and choice mechanisms.
          </p>
        </div>
      </div>
      <div
        className={`${
          toggleParag4 ? "pb-8" : "pb-0"
        } flex flex-col gap-3 lg:pr-[53px] scroll-mt-16`}
        id="policy-4"
      >
        <div
          className="flex flex-row justify-between items-center"
          id="policy-1"
        >
          <p className="text-lg sm:font-bold font-semibold">
            Collection, Use, and Disclosure of End Users’ Information Through
            Our Services
          </p>
          <button
            className="flex items-center justify-center"
            onClick={() => setToggoleParag4((prev) => !prev)}
          >
            {toggleParag4 ? (
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.75 8.375L8 1.625L1.25 8.375"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.25 1.625L8 8.375L14.75 1.625"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
        <div className={`${!toggleParag4 && "hidden"}`}>
          <p>
            This section describes our policies for handling information about
            End Users provided to us by our clients using our Services or other
            sources of their choosing. We provide our clients with the ability
            to create profiles of their End Users in order to effectively
            communicate with them via marketing communications tools like email,
            analytics services. To do this, our clients integrate our technology
            into their applications, websites, or other online services.
            <br /> Our clients’ collection, use, and disclosure of data is
            separately governed by their privacy policies. Our clients may
            collect information about their users directly; in that case, each
            of our clients is responsible for ensuring that their data
            collection follows their privacy policies and terms of use.
            <br />
            Collection
            <br /> In the course of providing Services to our clients, we
            collect customer information, purchases or product views (WITHOUT
            customer’s emails, credit card information, customer’s addresses, or
            any personally identifiable information (“PII”) ) about End Users of
            our clients.
            <br /> We use this information to provide our Services to our
            clients. We may automatically collect information about your use,
            navigation of, and interactions with our clients’ applications,
            websites, or other online services when our client has installed our
            technology on its properties.
            <br /> Cookies that we set on our clients’ websites expire after
            three years and the expiration date updates every time you encounter
            our server. We retain standard web log data 5 years after you visit
            a client’s website, and aggregations and reports for up to 10 years
            after you visit a client’s website.
            <br /> Use and Disclosure
            <br /> We collect information about End Users at our clients’
            direction and may append information to End Users’ profiles from
            third party sources. We do this to provide our Services, which
            enable our clients to optimize their communications with, and
            understanding of, their End Users. We consider our clients’ End
            Users’ information to be confidential to that client. Accordingly,
            we do not disclose End User information to unaffiliated third
            parties except in response to our clients’ explicit instructions, as
            provided for in an agreement between us and our client, or as
            otherwise described in this Privacy Policy (for example, as
            necessary to respond to legal requirements).
            <br /> We may provide services or sell products jointly with
            affiliated businesses. We may share End User information collected
            from our clients that is related to such transactions with those
            affiliated businesses. We require our affiliates, via contract, to
            provide the same level of privacy protection as set forth in this
            policy and they do not have the right to share or use PII for any
            purpose other than for an authorized transaction.
            <br /> If we ever were to engage in any onward transfers of your
            data with third parties for a purpose other than which it was
            originally collected or subsequently authorized, we would provide
            you with an opt-out choice to limit the use and disclosure of your
            personal data.
          </p>
        </div>
      </div>
      <div
        className={`${
          toggleParag5 ? "pb-8" : "pb-0"
        } flex flex-col gap-3 lg:pr-[53px] scroll-mt-16`}
        id="policy-5"
      >
        <div
          className="flex flex-row justify-between items-center"
          id="policy-1"
        >
          <p className="text-lg sm:font-bold font-semibold">
            Information Clients Provide to Us
          </p>
          <button
            className="flex items-center justify-center"
            onClick={() => setToggoleParag5((prev) => !prev)}
          >
            {toggleParag5 ? (
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.75 8.375L8 1.625L1.25 8.375"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.25 1.625L8 8.375L14.75 1.625"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
        <div className={`${!toggleParag5 && "hidden"}`}>
          <p>
            We receive and store any information clients enter on the Site,
            through the Services, or provide to us in any other way. Clients can
            choose not to provide us with certain information, but then they may
            not be able to take advantage of many of our features. We use
            clients’ information for such purposes as responding to their
            requests for Services, customizing the content they see,
            communicating with them about our Services, and marketing our
            Services to them.
            <br /> Further information may be required if clients choose to
            purchase paid components of the Services, such as credit card and
            billing information. We use third party partners for credit card
            processing who may require and store your credit card and billing
            information.
          </p>
        </div>
      </div>
      <div
        className={`${
          toggleParag6 ? "pb-8" : "pb-0"
        } flex flex-col gap-3 lg:pr-[53px] scroll-mt-16`}
        id="policy-6"
      >
        <div
          className="flex flex-row justify-between items-center"
          id="policy-1"
        >
          <p className="text-lg sm:font-bold font-semibold">
            Site Privacy Policy
          </p>
          <button
            className="flex items-center justify-center"
            onClick={() => setToggoleParag6((prev) => !prev)}
          >
            {toggleParag6 ? (
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.75 8.375L8 1.625L1.25 8.375"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.25 1.625L8 8.375L14.75 1.625"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
        <div className={`${!toggleParag6 && "hidden"}`}>
          <p>
            If a client purchases CLOCKPACE’s Services, we will communicate with
            it about the Services it purchases by email. Clients consent to
            receiving such confirmations by email. If clients contact us via
            email, we may retain a record of their contact information and any
            information they provide us in their messages to respond to them. We
            may receive a confirmation when clients open an email from us.
            <br /> We may also send emails with news or promotions. If clients
            do not want to receive news or promotional email from us, please
            contact us at 
            <span className="text-[#006D75] underline">
              theluxuryconsumer@gmail.com
            </span>
             (this will not affect emails related to certain important, legal,
            or service-related messages such as outage information).
            <br /> Other Important Information
            <br /> Your California Privacy Rights
            <br /> If you are a California resident, California law permits you
            to request certain information regarding the disclosure of your PII
            by us and our related companies to third parties for the third
            parties’ direct marketing purposes. To make such a request, please
            send your request, by mail or email, to the addresses listed at the
            end of this policy.
            <br /> Agents
            <br /> We employ other companies and people to perform tasks on our
            behalf and need to share client and End User information with them
            to provide products and services. Examples include billing,
            processing payments, providing marketing assistance, and providing
            customer service. Our agents use the same level of privacy
            protection as we do. Unless we tell you differently, CLOCKPACE does
            not share, and our agents do not have any right to use, PII
            collected from our Site and Services beyond what is necessary to
            assist us.
            <br /> Business Transfers
            <br /> In some cases, we may change our ownership or corporate
            organization, or may choose to buy or sell assets. End User
            information may be transferred to another entity, its affiliates, or
            service providers in connection with the transaction. You
            acknowledge that such transfers may occur, and that CLOCKPACE or its
            successor organization may continue to use your information as set
            forth in this policy.
            <br /> Protection of CLOCKPACE and Others
            <br /> We may release PII when we in our sole discretion believe in
            good faith that release is necessary or appropriate to comply with
            the law, enforce or apply our conditions of use and other
            agreements, or protect the rights, property, or safety of CLOCKPACE,
            our employees, our clients, or others. We also may be required to
            disclose an individual’s PII in response to a lawful request by
            public authorities, including to meet national security or law
            enforcement requirements.
            <br /> Information Security
            <br /> We use reasonable safeguards to protect the security of
            clients’ information during transmission, including by encrypting
            all of the information clients input. Only employees or agents who
            need PII to perform a specific job are granted access to it. All of
            our employees are kept up to date on our privacy and security
            practices.
            <br /> While we use commercially reasonable means to secure
            information provided to us, we do not guarantee that such
            information will not be improperly accessed, disclosed, or destroyed
            by breach of any of our safeguards. Clients and End Users are
            responsible for the security of their information that is
            transmitted to us or that is viewed, downloaded, or otherwise
            accessed when using unencrypted, public or otherwise unsecured
            networks.
            <br /> Accessing Information
            <br /> You are able to access, add to, update, correct, amend, or
            delete certain information about you, including PII. When you update
            information, however, we often maintain a copy of the unrevised
            information in our records. A client may deactivate its CLOCKPACE
            account by following the deactivation process set forth on the Site.
            Some information may remain in our records after account deletion.
            Please contact us at theluxuryconsumer@gmail.com if you have
            questions or concerns about accessing, correcting, or deleting your
            PII.
            <br /> EU and Swiss data subjects have a right to access their
            information. Please see the EU-U.S. Privacy Shield and Swiss-U.S.
            Privacy Shield Frameworks section below.
            <br /> Conditions of Use
            <br /> Your use of the Site and Services and any possible dispute
            over privacy are subject to this Privacy Policy and our Terms of
            Service, including limitations on damages, dispute resolution, and
            application of New Jersey state law.
            <br /> International Users (Except for EU and Swiss Data Subjects)
            <br />
            If you use our Websites outside of the United States, you understand
            and consent to the transfer of your personal information to, and the
            collection, processing, and storage of your personal information in,
            the United States and elsewhere. The laws in the U.S. and these
            countries regarding personal information may be different than the
            laws of your state or country.
            <br /> Use of CLOCKPACE’s Site by Children
            <br /> CLOCKPACE’s Site is not intended for children under the age
            of 18. Accordingly, we will not knowingly collect or use any PII
            from children that we know to be under the age of 18. If we become
            aware of PII in our database that was collected from a child under
            18, we will delete such information.
            <br /> EU-U.S. Privacy Shield and Swiss-U.S. Privacy Shield
            Frameworks
            <br /> Definitions
            <br /> For purposes of this section only, the following definitions
            shall apply:
            <br /> “Agent” means any third party that collects or uses personal
            information under the instructions of, and solely for, CLOCKPACE or
            to which CLOCKPACE discloses personal information for use on
            CLOCKPACE’s behalf.
            <br /> “Personal information” means any information or set of
            information that identifies or could be used by or on behalf of
            CLOCKPACE to identify (together with other information) a living
            individual. Personal information does not include information that
            is anonymized or aggregated. For the purposes of data received from
            Switzerland under the Swiss-U.S. privacy shield, personal
            information also includes ideological views or activities,
            information on social security measures or administrative or
            criminal proceedings and sanctions.
            <br /> “Sensitive information” means any personal information that
            reveals race, ethnic origin, political opinions, religious or
            philosophical beliefs, trade union membership, information that
            concerns health or sex life, and information about criminal or
            administrative proceedings and sanctions.
            <br /> EU-U.S. Privacy Shield and Swiss-U.S. Privacy Shield
            <br />
            CLOCKPACE LLC d/b/a The Luxury Consumer participates in and complies
            with the EU-U.S. Privacy Shield Framework and the Swiss-U.S. Privacy
            Shield Framework as set forth by the U.S. Department of Commerce
            regarding the collection, use, and retention of personal information
            from the European Union and Switzerland to the United States,
            respectively. CLOCKPACE has certified to the Department of Commerce
            that it adheres to the Privacy Shield Principles. If there is any
            conflict between the policies in this privacy policy and the Privacy
            Shield Principles, the Privacy Shield Principles shall govern. To
            learn more about the Privacy Shield program, and to view our
            certification page, please visit https://www.privacyshield.gov/.
            <br />
            Principles
            <br /> Notice: CLOCKPACE receives personal information about
            individuals in the EEA and Switzerland collected by CLOCKPACE and
            its clients, and personal information about clients in the EEA and
            Switzerland. The types of information collected and the uses of that
            information are described in the privacy policy above.
            <br /> CLOCKPACE will subject all personal information received via
            the EU-U.S. and Swiss-U.S. Privacy Shields to these Principles.
            <br />
            Choice: CLOCKPACE will offer individuals the opportunity to choose
            whether their information is to be used for a purpose other than the
            purpose for which it was originally collected or subsequently
            authorized by the individual. An individual may opt-out of such uses
            of their personal information by contacting us at the address given
            below. CLOCKPACE offers an opt-out to individuals whose personal
            information is disclosed to non-agent third parties. Additionally,
            CLOCKPACE will not use sensitive personal information for a purpose
            other than the purpose for which it was originally collected or
            subsequently authorized by the individual unless CLOCKPACE has
            received the individual’s affirmative and explicit consent (opt-in).
            CLOCKPACE will treat as sensitive any personal information received
            from a third party where the third party identifies and treats it as
            sensitive.
            <br /> Data Integrity: CLOCKPACE will use personal information only
            in ways that are compatible with the purposes for which it was
            collected or subsequently authorized by the individual. CLOCKPACE
            will take reasonable steps to ensure that personal information is
            relevant to its intended use, accurate, complete and current.
            <br />
            Transfers to Agents: CLOCKPACE contracts with third parties who
            perform business functions on our behalf. CLOCKPACE uses these third
            parties to assist with activities such as billing, processing
            payments, providing marketing assistance, and providing customer
            service. These entities may have access to personal information if
            needed to perform their functions for CLOCKPACE.
            <br /> For information received under the Privacy Shield, CLOCKPACE
            will require its agents to safeguard personal information consistent
            with this Policy by contract, obligating the agent to provide at
            least the same level of protection as is required by the Privacy
            Shield Principles.
            <br /> Under certain circumstances, CLOCKPACE may bear liability for
            onward transfers of personal data where its agent processes personal
            data inconsistent with the Privacy Shield Principles, unless
            CLOCKPACE proves that it is not responsible for the event giving
            rise to the damage.
            <br /> Access and Correction: Upon request, CLOCKPACE will grant
            individuals reasonable access to personal information that it holds
            about them. In addition, CLOCKPACE will take reasonable steps to
            permit individuals to correct, amend, or delete information that is
            demonstrated to be inaccurate or incomplete. An individual may
            request to access their information, or otherwise correct, amend, or
            delete their information by contacting us at the address given
            below.
            <br /> Security: See “Information Security,” above.
            <br /> Enforcement
            <br /> CLOCKPACE will conduct compliance audits of its relevant
            privacy practices to verify adherence to this Policy. Any employee
            that CLOCKPACE determines is in violation of this policy will be
            subject to disciplinary action.
            <br /> CLOCKPACE is subject to the investigatory and enforcement
            powers of the Federal Trade Commission (FTC).
            <br /> Dispute Resolution
            <br /> In compliance with the EU-U.S. and Swiss-U.S. Privacy Shield
            Principles, CLOCKPACE commits to resolve complaints about your
            privacy and our collection or use of your personal information.
            European Union or Swiss individuals with inquiries or complaints
            regarding this privacy policy should first contact CLOCKPACE
            at theluxuryconsumer@gmail.com
            <br /> or using the contact information below. CLOCKPACE will
            investigate and attempt to resolve complaints regarding use and
            disclosure of personal information by reference to the principles in
            this policy. CLOCKPACE has further committed to refer unresolved
            privacy complaints under the EU-U.S. and Swiss-U.S. Privacy Shield
            Principles to an independent dispute resolution mechanism, the BBB
            EU PRIVACY SHIELD, operated by the Council of Better Business
            Bureaus. If you do not receive timely acknowledgment of your
            complaint, or if your complaint is not satisfactorily addressed,
            please visit www.bbb.org/EU-privacy-shield/for-eu-consumers/ for
            more information and to file a complaint. Please note that if your
            complaint is not resolved through these channels, under limited
            circumstances, a binding arbitration option may be available before
            a Privacy Shield Panel.
            <br /> Questions or Concerns
            <br /> If you have any questions or concerns regarding privacy at
            CLOCKPACE, please send us a detailed message
            to theluxuryconsumer@gmail.com or to CLOCKPACE LLC at 221 River
            Street 9th Floor, Hoboken, NJ 07030.Your privacy is important to us
            and we will make every effort to resolve your concerns
          </p>
        </div>
      </div>
    </section>
  );
};

export default Main;
