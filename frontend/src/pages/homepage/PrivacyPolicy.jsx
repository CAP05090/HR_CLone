import React from 'react'
import { Navbar } from '../../components/home/navbar/Navbar'
import { Footer } from '../../components/home/footer/Footer'
import style from "./privacy.module.css"

export const PrivacyPolicy = () => {
  return (
    <>
    <Navbar />
    <div className={style.heading}>
      <h1>Privacy Policy for [Your Web Application]</h1>
      <h3>Last Updated: [Date]</h3>
      <p>[Your Web Application] ("we", "our", or "us") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [www.yourwebapp.com], use our services, or interact with us in any other manner. Please read this policy carefully to understand our views and practices regarding your personal data and how we will treat it.</p>
    </div>
    <div className={style.policy}>
      <h2>Information We Collect</h2>
      <h3>Personal Data</h3>
      <p>We may collect and process the following personal data about you:</p>
      <ul>
        <li>Identity Data: Name, username, or similar identifier.</li>
        <li>Contact Data: Email address, phone number, postal address.</li>
        <li>Technical Data: IP address, browser type, version, time zone setting, browser plug-in types and versions, operating system, and platform.</li>
        <li>Usage Data: Information about how you use our website, products, and services.</li>
        <li>Marketing and Communications Data: Your preferences in receiving marketing from us and your communication preferences.</li>
      </ul>
      <h3>Non-Personal Data</h3>
      <p>We may also collect non-personal data which cannot be used to identify you. This may include aggregated data such as statistical or demographic data.</p>
    </div>
    <div className={style.policy}>
      <h2>How We Collect Your Information</h2>
      <p>We use different methods to collect data from and about you including through:</p>
      <ul>
        <li>Direct Interactions: You may give us your Identity and Contact Data by filling in forms or by corresponding with us by post, phone, email, or otherwise.</li>
        <li>Automated Technologies or Interactions: As you interact with our website, we may automatically collect Technical Data about your equipment, browsing actions, and patterns.</li>
        <li>Third Parties or Publicly Available Sources: We may receive personal data about you from various third parties and public sources.</li>
      </ul>
    </div>
    <div className={style.policy}>
      <h2>How We Collect Your Information</h2>
      <p>We use different methods to collect data from and about you including through:</p>
      <ul>
        <li>Direct Interactions: You may give us your Identity and Contact Data by filling in forms or by corresponding with us by post, phone, email, or otherwise.</li>
        <li>Automated Technologies or Interactions: As you interact with our website, we may automatically collect Technical Data about your equipment, browsing actions, and patterns.</li>
        <li>Third Parties or Publicly Available Sources: We may receive personal data about you from various third parties and public sources.</li>
      </ul>
    </div>
    <div className={style.policy}>
      <h2>How We Use Your Information</h2>
      <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
      <ul>
        <li>To provide and maintain our service.</li>
        <li>To manage your account and provide customer support.</li>
        <li>To notify you about changes to our service.</li>
        <li>To allow you to participate in interactive features of our service.</li>
        <li>To gather analysis or valuable information so that we can improve our service.</li>
        <li>To monitor the usage of our service.</li>
        <li>To detect, prevent, and address technical issues.</li>
        <li>To provide you with news, special offers, and general information about other goods, services, and events which we offer.</li>
      </ul>
    </div>
    <div className={style.policy}>
      <h2>Disclosure of Your Information</h2>
      <p>We may share your personal data with:</p>
      <ul>
        <li>Service Providers: To monitor and analyze the use of our service.</li>
        <li>Business Transfers: In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
        <li>Legal Requirements: If required to do so by law or in response to valid requests by public authorities.</li>
      </ul>
    </div>
    <div className={style.policy}>
      <h2>Data Security</h2>
      <p>We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. We also limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.</p>
    </div>
    <div className={style.policy}>
      <h2>Data Retention</h2>
      <p>We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>
    </div>
    <div className={style.policy}>
      <h2>Your Data Protection Rights</h2>
      <p>Depending on your location and subject to applicable law, you may have the following rights with regard to your personal data:</p>
      <ul>
        <li>The right to access – You have the right to request copies of your personal data.</li>
        <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate.</li>
        <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
        <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
        <li>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</li>
        <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
      </ul>
    </div>
    <div className={style.policy}>
      <h2>Changes to This Privacy Policy</h2>
      <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top.</p>
    </div>
    <div className={style.policy}>
      <h2>Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us:</p>
      <ul>
        <li>By email: [your-email@yourwebapp.com]</li>
        <li>By visiting this page on our website: [www.yourwebapp.com/contact]</li>
        <li>By mail: [Your Company Address]</li>
      </ul>
    </div>
    <div className={style.policy}>
      <h2>Grievance Redressal</h2>
      <p>In accordance with the Information Technology Act, 2000 and the rules made thereunder, the name and contact details of the Grievance Officer are provided below:</p>
      <ul>
        <li>Name: [Grievance Officer Name]</li>
        <li>Email: [Grievance Officer Email]</li>
        <li>Address: [Grievance Officer Address]</li>
      </ul>
    </div>
    <div className={style.policy}>
      <p>This policy complies with the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 under the Information Technology Act, 2000 of India.</p>
    </div>
    <Footer />
    </>
  )
}
