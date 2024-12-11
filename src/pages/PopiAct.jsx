import React, { useState } from "react";
import "./PopiAct.css";

const PopiAct = () => {
  const [openSections, setOpenSections] = useState({}); // Tracks open/close for each section

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section], // Toggle the specific section
    }));
  };

  return (
    <div id="popiContainer">
      <div className="popi-content">
        <h1 className="popi-title">POPI Act Compliance</h1>

        <div className="faq">
          {/* Data Privacy Disclaimer */}
          <div
            className={`faq-item ${openSections["disclaimer"] ? "open" : ""}`}
            onClick={() => toggleSection("disclaimer")}
          >
            <h3>Data Privacy Disclaimer</h3>
            {openSections["disclaimer"] && (
              <p>
                SafeSkill (Pty) Ltd ("we," "us," or "our") is committed to
                protecting your personal information and your right to privacy.
                This Data Privacy Disclaimer outlines how we collect, use,
                disclose, and safeguard your personal information when you use
                our online Training Management System ("Service").
              </p>
            )}
          </div>

          {/* Collection of Personal Information */}
          <div
            className={`faq-item ${
              openSections["collection"] ? "open" : ""
            }`}
            onClick={() => toggleSection("collection")}
          >
            <h3>Collection of Personal Information</h3>
            {openSections["collection"] && (
              <ul>
                <li>Full name</li>
                <li>Identity number or passport number</li>
                <li>Contact information (email address, phone number)</li>
                <li>Educational background and qualifications</li>
                <li>
                  Any other information required by the Quality Council for
                  Trades and Occupations (QCTO) for certification purposes
                </li>
              </ul>
            )}
          </div>

          {/* Use of Personal Information */}
          <div
            className={`faq-item ${openSections["use"] ? "open" : ""}`}
            onClick={() => toggleSection("use")}
          >
            <h3>Use of Personal Information</h3>
            {openSections["use"] && (
              <ul>
                <li>To comply with the requirements of the QCTO</li>
                <li>To accurately generate and issue training certificates</li>
                <li>To provide and maintain the Service</li>
                <li>To manage your account and provide customer support</li>
                <li>
                  To communicate with you about updates, notifications, and
                  administrative messages
                </li>
              </ul>
            )}
          </div>

          {/* Protection of Personal Information */}
          <div
            className={`faq-item ${
              openSections["protection"] ? "open" : ""
            }`}
            onClick={() => toggleSection("protection")}
          >
            <h3>Protection of Personal Information</h3>
            {openSections["protection"] && (
              <ul>
                <li>Encryption of data during transmission and storage</li>
                <li>Secure servers and firewalls</li>
                <li>Regular security assessments and audits</li>
                <li>Access controls and authentication procedures</li>
              </ul>
            )}
          </div>

          {/* Compliance with POPI Act and GDPR */}
          <div
            className={`faq-item ${openSections["compliance"] ? "open" : ""}`}
            onClick={() => toggleSection("compliance")}
          >
            <h3>Compliance with POPI Act and GDPR</h3>
            {openSections["compliance"] && (
              <>
                <p>
                  We adhere to all statutory and regulatory requirements of the
                  Protection of Personal Information Act (POPI Act) and the
                  General Data Protection Regulation (GDPR). This includes:
                </p>
                <ul>
                  <li>
                    Lawful Processing: Process data lawfully, fairly, and
                    transparently.
                  </li>
                  <li>
                    Purpose Limitation: Collect data for specified, legitimate
                    purposes.
                  </li>
                  <li>Data Minimization: Only collect necessary data.</li>
                  <li>Accuracy: Ensure data is accurate and up to date.</li>
                  <li>Storage Limitation: Keep data only as long as necessary.</li>
                  <li>Integrity and Confidentiality: Secure personal data.</li>
                </ul>
              </>
            )}
          </div>

          {/* Your Rights */}
          <div
            className={`faq-item ${openSections["rights"] ? "open" : ""}`}
            onClick={() => toggleSection("rights")}
          >
            <h3>Your Rights</h3>
            {openSections["rights"] && (
              <ul>
                <li>Access: Request copies of your personal information.</li>
                <li>
                  Rectification: Request correction of inaccurate or incomplete
                  data.
                </li>
                <li>
                  Erasure: Request deletion of your personal information under
                  certain conditions.
                </li>
                <li>
                  Restriction: Request restriction of processing your personal
                  data.
                </li>
                <li>
                  Objection: Object to the processing of your personal
                  information.
                </li>
                <li>
                  Data Portability: Request transfer of your data to another
                  organization or directly to you.
                </li>
              </ul>
            )}
          </div>

          {/* Data Retention */}
          <div
            className={`faq-item ${openSections["retention"] ? "open" : ""}`}
            onClick={() => toggleSection("retention")}
          >
            <h3>Data Retention</h3>
            {openSections["retention"] && (
              <p>
                We retain your personal information only for as long as
                necessary to fulfill the purposes outlined in this Disclaimer
                or as required by law and the QCTO. Once the information is no
                longer needed, it will be securely deleted or anonymized.
              </p>
            )}
          </div>

          {/* Contact Information */}
          <div
            className={`faq-item ${openSections["contact"] ? "open" : ""}`}
            onClick={() => toggleSection("contact")}
          >
            <h3>Contact Information</h3>
            {openSections["contact"] && (
              <ul>
                <li>Email: [Email Address]</li>
                <li>Phone: [Phone Number]</li>
                <li>Address: [Physical Address]</li>
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="starsec"></div>
      <div className="starthird"></div>
      <div className="starfourth"></div>
      <div className="starfifth"></div>
    </div>
  );
};

export default PopiAct;
