import React from "react";
import { Link } from "react-router-dom";
import "./PricingTable.css";

const Pricing = () => {
  const pricingPlans = [
    {
      price: "Free",
      plan: "Startup",
      features: ["Standard Learner functionality"],
      unavailable: [
        "Admin Functionalities",
        "Teacher Mode",
        "User base minimum viable",
        "Employee Analytics",
      ],
    },
    {
      price: "R20.00",
      plan: "SME",
      features: ["Standard Learner functionality", "Admin Functionalities"],
      unavailable: [
        "Teacher Mode",
        "User base minimum viable",
        "Employee Analytics",
      ],
    },
    {
      price: "R50.00",
      plan: "Corporation",
      features: [
        "Standard Learner functionality",
        "Admin Functionalities",
        "Teacher Mode",
      ],
      unavailable: ["User base minimum viable", "Employee Analytics"],
    },
    {
      price: "R60.00",
      plan: "Enterprise",
      features: [
        "Standard Learner functionality",
        "Admin Functionalities",
        "Teacher Mode",
        "User base minimum",
        "Employee Analytics",
        "CRM plugin (Coming soon)",
        "HR Plugin (Coming Soon)",
      ],
      unavailable: [],
    },
  ];

  return (
    <div id="mainContainer">
      <header className="pricing-header">
        <h1>Pricing Plans</h1>
        <p>Choose the plan that fits your needs best.</p>
      </header>
      <div
        className="pricing-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {pricingPlans.map((plan, index) => (
          <div
            className="pricing-column-wrapper"
            key={index}
            style={{
              flex: "1 1 calc(25% - 20px)",
              maxWidth: "25%",
              margin: "10px",
              boxSizing: "border-box",
            }}
          >
            <div className="pricing-column">
              <div className="pricing-price-row">
                <div className="pricing-price-wrapper">
                  <div className="pricing-price">
                    <div className="pricing-cost">{plan.price}</div>
                    <div className="time">Per User pm</div>
                  </div>
                </div>
              </div>
              <div className="pricing-row-title">
                <div className="pricing_row_title">{plan.plan}</div>
              </div>
              {plan.features.map((feature, i) => (
                <figure className="pricing-row" key={i}>
                  {feature}
                </figure>
              ))}
              {plan.unavailable.map((unavailable, i) => (
                <figure className="pricing-row strike" key={i}>
                  {unavailable}
                </figure>
              ))}
              <div className="pricing-footer">
                <div className="gem-button-container gem-button-position-center">
                  <Link to="/Contact" className="gem-button gem-green">
                    Order Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
