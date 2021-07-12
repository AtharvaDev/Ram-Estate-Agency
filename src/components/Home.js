import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import bg from "../img/bg-1.png";
import NavBar from "./NavBar";
import VisibilitySensor from "react-visibility-sensor";
import "./home.css";
import homebg1 from "../img/homeAssets/b-shape4.png";
import homebg2 from "../img/homeAssets/b-shape2.png";
import homebg3 from "../img/homeAssets/b-shape3.png";
import homebg6 from "../img/homeAssets/b-shape6.png";
import testbg1 from "../img/bg-slide-img-1.png";
import testbg2 from "../img/bg-slide-img-2.png";
// import LottieAnimation from "./lottieFiles/Lottie";
import Testimonials from "./smallParts/Testimonials";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { titileAnimations, pageAnimation } from "../components/style/animation";
import preload from "../img/bg-1.png";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home">
      <NavBar></NavBar>
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <section className="home__banner">
          <div className="container">
            <div className="row">
              <div className="home__banner__content">
                <div>
                  <motion.h1 variants={titileAnimations}>
                    Welcome to Ram Estate Agency
                  </motion.h1>
                  <motion.p variants={titileAnimations}>
                    We build trust. Our specialized team would help you in every
                    step of your journey whether it’s buying, renting, and
                    investing. Our client-focused service approach has helped us
                    achieve a 90% client retention rate.
                  </motion.p>
                  <motion.p variants={titileAnimations}>
                    It’s Time To Find Your Next Property In Mumbai
                  </motion.p>
                  <motion.div
                    variants={titileAnimations}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    className="home__banner_button"
                  >
                    <Link to="/post">View Properties</Link>
                  </motion.div>
                </div>
                {/* <div style={{ flex: "0.6" }}>
                <LottieAnimation lotti={building} />
              </div> */}
              </div>
            </div>
          </div>
        </section>
        <div class="home__banner__shapeOne">
          <img src={homebg1} alt=""></img>
        </div>
        <div className="home__banner__shapeTwo">
          <img src={homebg2} alt="" />
        </div>
        <div className="home__banner__shapeThree">
          <img src={homebg3} alt="" />
        </div>
        <div className="home__banner__shapefour">
          <img src={homebg6} alt="" />
        </div>

        <section>
          <div class="testimonial__banner__shapeOne">
            <img src={testbg1} alt=""></img>
          </div>
          <div className="testimonial__banner__shapeTwo">
            <img src={testbg2} alt="" />
          </div>
          <Testimonials />
        </section>

        <section className="section__achieve">
          <h1>Find Your Dream Home With Our Guidance.</h1>
          <div className="achieve pt-5 pb-5 ">
            <div className="container mx-auto">
              <div className="achieve__body mt-5 ">
                <div className="achieve__one">
                  <CountUp end={1000} suffix="+" redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  <h2 className="mt-2"> Satisfied Clients</h2>
                </div>
                <div className="achieve__two">
                  <CountUp end={450} suffix="+" redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  <h2 className="mt-2">Property Sale​</h2>
                </div>
                <div className="achieve__three">
                  <CountUp end={550} suffix="+" redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  <h2 className="mt-2">Property Rent​</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home__contact">
          <div>
            <iframe
              className="home__contact__form"
              title="contact us"
              src="https://docs.google.com/forms/d/e/1FAIpQLSf-xsxuLztuWZk7k5GzFuzjT8DpTAZgNt1etzKPgNsUmSEeDQ/viewform?embedded=true"
              width="640"
              height="943"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>

            <iframe
              className="home__contact__form__mobile"
              title="contact us mobile"
              src="https://docs.google.com/forms/d/e/1FAIpQLSf-xsxuLztuWZk7k5GzFuzjT8DpTAZgNt1etzKPgNsUmSEeDQ/viewform?embedded=true"
              width="350"
              height="840"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
          </div>
        </section>

        <section className="home__preload">
          <img
            className="absolute"
            height="1px"
            width="1px"
            src={preload}
            alt=""
          />
        </section>

        {/* <section style={{ height: "100vh", backgroundColor: "blue" }}></section> */}
      </motion.div>
    </div>
  );
}

export default Home;
