"use client";
import React from "react";

export default function Faqs() {
  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="page-faqs-wrap">
          <div className="list-faqs">
            <div>
              <ul
                className="accordion-product-wrap style-faqs"
                id="accordion-faq-1"
              >
                <li className="accordion-product-item">
                  <a
                    href="#accordion-1"
                    className="accordion-title collapsed current"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="accordion-1"
                  >
                    <h6>
                      How does COVID-19 affect my online orders and store
                      purchases?
                    </h6>
                    <span className="btn-open-sub" />
                  </a>
                  <div
                    id="accordion-1"
                    className="collapse show"
                    data-bs-parent="#accordion-faq-1"
                  >
                    <div className="accordion-faqs-content">
                      <p className="text-secondary">
                        The courier companies have adapted their procedures to
                        guarantee the safety of our employees and our community.
                        We thank you for your patience, as there may be some
                        delays to deliveries. We remind you that you can still
                        find us at Mango.com and on all our online channels. Our
                        customer services are still there for you, to answer any
                        questions you may have, although due to the current
                        situation, we are operating with longer waiting times.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="accordion-product-item">
                  <a
                    href="#accordion-2"
                    className="accordion-title current"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="accordion-2"
                  >
                    <h6>
                      I have a promotional or discount code. How do I use it for
                      an online purchase?
                    </h6>
                    <span className="btn-open-sub" />
                  </a>
                  <div
                    id="accordion-2"
                    className="collapse"
                    data-bs-parent="#accordion-faq-1"
                  >
                    <div className="accordion-faqs-content">
                      <p className="text-secondary">
                        The courier companies have adapted their procedures to
                        guarantee the safety of our employees and our community.
                        We thank you for your patience, as there may be some
                        delays to deliveries. We remind you that you can still
                        find us at Mango.com and on all our online channels. Our
                        customer services are still there for you, to answer any
                        questions you may have, although due to the current
                        situation, we are operating with longer waiting times.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="accordion-product-item">
                  <a
                    href="#accordion-3"
                    className="accordion-title collapsed current"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="accordion-3"
                  >
                    <h6>NEW! Plus sizes for Woman</h6>
                    <span className="btn-open-sub" />
                  </a>
                  <div
                    id="accordion-3"
                    className="collapse"
                    data-bs-parent="#accordion-faq-1"
                  >
                    <div className="accordion-faqs-content">
                      <p className="text-secondary">
                        The courier companies have adapted their procedures to
                        guarantee the safety of our employees and our community.
                        We thank you for your patience, as there may be some
                        delays to deliveries. We remind you that you can still
                        find us at Mango.com and on all our online channels. Our
                        customer services are still there for you, to answer any
                        questions you may have, although due to the current
                        situation, we are operating with longer waiting times.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
