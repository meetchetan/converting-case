import React from "react";

const ContactUs = () => {
  return (
    <>
      <h1>Contact Us !</h1>
      <h2 style={{ textAlign: "center" }}>
        Welcome to <span id="W_Name">ConvertingCase</span>!
      </h2>

      <p style={{ fontSize: "17px", textAlign: "center" }}>
        Please email us if you have any queries about the site, advertising, or
        anything else.
      </p>

      <div style={{ textAlign: "center" }}>
        <p style={{}}>
          <i
            className="fas fa-envelope-open-text"
            style={{ fontSize: "20px" }}
          ></i>{" "}
          <b>
            <i>
              <span id="W_Email">
                <a href="mailto:chetanplay525@gmail.com">
                  chetanplay525@gmail.com
                </a>
              </span>
            </i>
          </b>
          <i
            className="fab fa-whatsapp-square"
            style={{ fontSize: "20px" }}
          ></i>{" "}
          <b>
            <span id="W_whatsapp">
              <a href="tel:"></a>
            </span>
          </b>
          <br />
        </p>

        <h3 style={{}}>We will revert to you as soon as possible...!</h3>
        <p style={{ textAlign: "center" }}>
          Thank you for contacting us! <br />
          <b>Have a great day</b>
        </p>
        <span style={{ fontSize: "1px", opacity: "0" }}>
          This page is generated with the help of{" "}
          <a
            href="https://www.blogearns.com/2021/06/free-contact-us-page-generator.html"
            style={{}}
          >
            Contact Us Page Generator
          </a>
        </span>
      </div>
    </>
  );
};

export default ContactUs;
