import React from "react";
import bg from "../img/bg6M.jpg";

function Home() {
  return (
    <div>
      <main>
        <img
          src={bg}
          alt="bg"
          className="absolute object-cover w-full h-full"
        />
        <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
          <h1 className="text-6xl text-white font-bold leading-none cursive leading-none lg:leading-snug home-name">
            welcomeeee
          </h1>
        </section>
      </main>
    </div>
  );
}

export default Home;
