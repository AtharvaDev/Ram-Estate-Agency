import React from "react";
import { Link } from "react-router-dom";
// import bg from "../img/bg-1.png";
import NavBar from "./NavBar";
import "./home.css";
import homebg1 from "../img/homeAssets/b-shape4.png";
import homebg2 from "../img/homeAssets/b-shape2.png";
import homebg3 from "../img/homeAssets/b-shape3.png";
import homebg6 from "../img/homeAssets/b-shape6.png";
import testbg1 from "../img/bg-slide-img-1.png";
import testbg2 from "../img/bg-slide-img-2.png";

// import LottieAnimation from "./lottieFiles/Lottie";
import Testimonials from "./smallParts/Testimonials";

function Home() {
  return (
    <div className="home">
      <NavBar></NavBar>
      <section className="home__banner">
        <div className="container">
          <div className="row">
            <div className="home__banner__content">
              <div>
                <h1>Welcome to Ram Estate Agency</h1>
                <p>
                  We build trust. Our specialized team would help you in every
                  step of your journey whether it’s buying, renting, and
                  investing. Our client-focused service approach has helped us
                  achieve a 90% client retention rate.
                </p>
                <p>It’s Time To Find Your Next Property In Mumbai</p>
                <div className="home__banner_button">
                  <Link to="/post">View Properties</Link>
                </div>
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

      {/* <section style={{ height: "100vh", backgroundColor: "blue" }}></section> */}
    </div>
  );
}

export default Home;
