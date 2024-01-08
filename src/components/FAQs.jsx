import React from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQs = () => {
  const faqsData = [
    {
      question: "?איזה ארגונים יכולים להשתתף בעשייה",
      answer:

      "ארגונים ועמותות לא למטרות רווח"
    },
    {
      question: "?רק ארגונים יכולים להשתתף ",
      answer:
"אנחנו מקבלים בברכה גם יוזמות של אנשים פרטים, נשמח לשמוע עוד על יוזמות מדהימות"
    },
    {
      question: "?האם רק אנשי פיתוח מתאימים לקהילה",
      answer:
"ממש לא, יש מגוון תפקידים, כולם מוזמנים לקחת חלק באחד מהמיזמים שלנו"    },
    // {
    //   question: "למה ל",
    //   answer:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
    // },
    // {
    //   question: "Why app showcase one page template?",
    //   answer:
    //     "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus squid. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. <br /> Craft beer labore wes anderson cred nesciunt sapiente ea proident. Nihil anim keffiyeh helvetica, Ad vegan excepteur butcher vice lomo.",
    // },
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
            <hr className="mb-0 opacity-1 text-end" />
            <Accordion flush defaultActiveKey="0" className="arrow-end text-end">
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
