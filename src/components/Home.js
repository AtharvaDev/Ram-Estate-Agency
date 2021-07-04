import React from "react";
import bg from "../img/bg-1.png";
import NavBar from "./NavBar";
import "./home.css";

function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <main className="home__container">
        <img className="home__container__img" src={bg} alt="bg" />
        <section className="home__container__text">
          <h1>welcomeeee</h1>
        </section>
      </main>

      {/* <iframe
          title="contact us"
          src="https://docs.google.com/forms/d/e/1FAIpQLSf-xsxuLztuWZk7k5GzFuzjT8DpTAZgNt1etzKPgNsUmSEeDQ/viewform?embedded=true"
          width="640"
          height="943"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe> */}
    </div>
  );
}

export default Home;
