import React, { useEffect } from "react";
import NavBar from "./NavBar";
import "./about.css";
import LottieAnimation from "./lottieFiles/Lottie";
import location from "./lottieFiles/7983-location.json";
import phone from "./lottieFiles/32459-phone-call.json";
import mail from "./lottieFiles/26605-email-icon.json";
import { motion } from "framer-motion";
import { pageAnimation } from "../components/style/animation";
// import bgHome from "../img/aboutUs/bg1.png";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about">
      <NavBar />
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <section className="About__topBar">
          <div className="About__topBar__mobileImg"></div>
          <div className="container mx-auto">
            <p>
              No matter what stage of the <span>home journey</span> you may be
              in, we’re here to empower you by making all things home simple,
              efficient, and enjoyable.
            </p>
          </div>
        </section>
        <section className="About__body">
          <div className="container mx-auto">
            <h1>About Ram Estate Agency</h1>
            <hr className="About__body__rdLine" />
            <p>
              Ram Estate Agency is benchmark as an unparalleled Real Estate
              Agent in Thane, Maharashtra. With new improved realty solutions in
              each sphere, we have carved a niche for ourselves in the realty
              sector. Our approach is based on professionalism, trust and
              respect for the consumer The experience of transacting and having
              a practical approach at work in each segments of real estate has
              given Mukesh Estate Agency an edge over its competition.
            </p>
            <p>
              Our services are for Residential Property, Commercial Property,
              Industrial Property and Agricultural Property. When it comes to
              realty solutions, Ram Estate Agency is the name that is most
              trusted. Our efforts have always been appreciated by clients,
              which motivates us to bring even better results for them.
            </p>
            <p>
              Our sales executives are professionally trained to deliver
              industry-best personalized service. We believe in creating real
              value for our clients by continuously setting new benchmarks in
              property optimization and customer service. Our phenomenal 90%
              client retention rate bears testimony to our client-focused
              service approach.
            </p>
          </div>
        </section>
        <section className="About__body__map ">
          <h1>Location</h1>
          <hr className="About__body__rdLine__location" />
          <div className="About__body__map__body ">
            <div className="About__body__map__body__one">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1293.7172786502474!2d72.96410928436245!3d19.264645064411685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf5329b9e3c39a0c0!2sKavya%20Residency!5e0!3m2!1sen!2sin!4v1625762179410!5m2!1sen!2sin"
                title="map"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="About__body__map__body__one__mobile">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1293.7172786502474!2d72.96410928436245!3d19.264645064411685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf5329b9e3c39a0c0!2sKavya%20Residency!5e0!3m2!1sen!2sin!4v1625762179410!5m2!1sen!2sin"
                title="map"
                width="350"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="About__body__map__body__two">
              <h2 className="mb-2">REACH US THROUGH</h2>
              <div className="flex mt-3">
                <LottieAnimation lotti={location} height="80px" width="80px" />
                <p className="pl-3">
                  Kavya Residencies Shop No 05, <br />
                  Gb Road, Kasarvadavali, <br />
                  Thane - 400615
                </p>
              </div>
              <div className="flex mt-3 About__body__contact">
                <LottieAnimation lotti={phone} height="80px" width="80px" />
                <p className="pl-3">
                  Ram Patel
                  <br />
                  <a href="tel:+91 99871 30717">+91 99871 30717</a>
                  <br />
                  <a href="tel:+91 81690 54927">+91 81690 54927</a>
                </p>
              </div>
              <div className="flex mt-3 About__body__mail">
                <span>
                  <LottieAnimation lotti={mail} height="30px" width="30px" />
                </span>
                <p className="pl-3">
                  <a href="mailto:ramsingh.r013@yahoo.com">
                    ramsingh.r013@yahoo.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}

export default About;
