import React from "react";
import '../pages/Contact.css';

const contact = () => {
  return (
    <>
      <body>
        <section class="contact-page-section">
          <div class="container">
            <div class="sec-title">
              <h2>Let's Get in Touch.</h2>
            </div>
            <div class="inner-container">
              <div class="row clearfix">
                <div class="form-column col-md-8 col-sm-12 col-xs-12">
                  <div class="inner-column">
                    <div class="contact-form">
                      <form id="contact-form">
                        <div class="row clearfix">
                          <div class="form-group col-md-6 col-sm-6 co-xs-12">
                            <input
                              type="text"
                              name="name"
                              value=""
                              placeholder="Name"
                              required
                            />
                          </div>
                          <div class="form-group col-md-6 col-sm-6 co-xs-12">
                            <input
                              type="email"
                              name="email"
                              value=""
                              placeholder="Email"
                              required
                            />
                          </div>
                          <div class="form-group col-md-6 col-sm-6 co-xs-12">
                            <input
                              type="text"
                              name="subject"
                              value=""
                              placeholder="Subject"
                              required
                            />
                          </div>
                          <div class="form-group col-md-6 col-sm-6 co-xs-12">
                            <input
                              type="text"
                              name="phone"
                              value=""
                              placeholder="Phone"
                              required
                            />
                          </div>
                          <div class="form-group col-md-12 col-sm-12 co-xs-12">
                            <textarea
                              name="message"
                              placeholder="Message"
                            ></textarea>
                          </div>
                          <div class="form-group col-md-12 col-sm-12 co-xs-12">
                            <button
                              type="submit"
                              class="theme-btn btn-style-one"
                            >
                              Send Now
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div class="info-column col-md-4 col-sm-12 col-xs-12">
                  <div class="inner-column">
                    <h2>Contact Info</h2>

                    <ul class="list-info">
                      <li>
                        <i class="fas fa-globe"></i>2802 Wetmore Avenue,
                        Everett, WA 98201.
                      </li>
                      <li>
                        <i class="far fa-envelope"></i>WWW.GETYOURFUNKOS.COM
                      </li>
                      <li>
                        <i class="fas fa-phone"></i> (425) 783-3616 <br />{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
};

export default contact;
