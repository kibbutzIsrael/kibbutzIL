import React from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQs = () => {
  const faqsData = [
    {
    },
  ];

  return (
    <section id="faq" className="section">
      <div className="container">
        <h2 className="text-9 fw-600 text-center">
        </h2>
        <hr className="heading-separator-line bg-primary opacity-10 mx-auto" />
        <p className="lead text-center mb-4">
        </p>
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto">
            <hr className="mb-0 opacity-1" />
            <Accordion flush defaultActiveKey="0" className="arrow-end">
              {faqsData.length > 0 &&
                faqsData.map((faq, index) => (
                  <Accordion.Item eventKey={index} key={index}>
                    <Accordion.Header>{faq.question}</Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    ></Accordion.Body>
                  </Accordion.Item>
                ))}
            </Accordion>
            <hr className="mt-0 opacity-1" />
          </div>
        </div>
        <div className="lead text-center mt-4">
          {/* Can't find it here?{" "} */}
          <a
          
            href="#contact"className
            ="smooth-scroll link-offset-2 link-underline link-underline-opacity-0-hover"
          >
            {/* Tell us your query here. */}
          </a>
        </div>
      </div>
    </section>



  );
};

export default FAQs;
