import React, { useState } from "react";
import Confetti from "react-confetti";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    industry: "",
    email: "",
    phone: "",
    country: "",
    address: "",
    enquiry: "",
    referral: "",
  });

  const [errors, setErrors] = useState({});
  const [showConfetti, setShowConfetti] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (value.trim() !== "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: false,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = [
      "name",
      "surname",
      "industry",
      "email",
      "phone",
      "country",
      "address",
      "enquiry",
      "referral",
    ];
    const newErrors = {};
    let hasError = false;

    requiredFields.forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = true;
        hasError = true;
      }
    });

    if (hasError) {
      setErrors(newErrors);
      alert("Please fill in all the required fields.");
      return;
    }

    try {
      await fetch("https://formsubmit.co/ajax/ruan.dejongh19@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      // Show confetti and success message
      setShowConfetti(true);
      setSuccessMessage(true);

      // Clear the form
      setFormData({
        name: "",
        surname: "",
        industry: "",
        email: "",
        phone: "",
        country: "",
        address: "",
        enquiry: "",
        referral: "",
      });

      // Remove confetti and message after 5 seconds
      setTimeout(() => {
        setShowConfetti(false);
        setSuccessMessage(false);
      }, 5000);
    } catch (error) {
      alert("There was an error sending your message.");
    }
  };

  return (
    <div id="mainContainer">
      {/* Background Animation */}
      <div>
        <div className="starsec"></div>
        <div className="starthird"></div>
        <div className="starfourth"></div>
        <div className="starfifth"></div>
      </div>

      {/* Confetti Effect */}
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}

      {/* Success Message */}
      {successMessage && (
        <div className="success-message">
          Submitted Successfully!
        </div>
      )}

      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          {[
            { name: "name", label: "Name", type: "text" },
            { name: "surname", label: "Surname", type: "text" },
            { name: "industry", label: "Industry", type: "text" },
            { name: "email", label: "Contact Email", type: "email" },
            { name: "phone", label: "Phone Number", type: "tel" },
            { name: "country", label: "Country", type: "text" },
            { name: "address", label: "Address", type: "textarea" },
            { name: "enquiry", label: "Enquiry", type: "textarea" },
            { name: "referral", label: "How did you hear about us?", type: "text" },
          ].map(({ name, label, type }) => (
            <div className="form-group" key={name}>
              <label htmlFor={name} className={errors[name] ? "error-label" : ""}>
                {label}
              </label>
              {type === "textarea" ? (
                <textarea
                  id={name}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className={errors[name] ? "error-input" : ""}
                ></textarea>
              ) : (
                <input
                  id={name}
                  name={name}
                  type={type}
                  value={formData[name]}
                  onChange={handleChange}
                  className={errors[name] ? "error-input" : ""}
                />
              )}
            </div>
          ))}
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
