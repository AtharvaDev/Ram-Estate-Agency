import React, { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import "./Testimonials.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Testimonials() {
  const [TestData, setTest] = useState(null);
  //   * means all the data
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "testimonials"]{
          name,description,
        mainImage{
            asset->{
                _id,url
            },
            alt
        }
    }`
      )
      .then((data) => setTest(data))
      .catch(console.error);
  }, []);

  console.log(TestData);

  return (
    <>
      <div className="tests">
        <h1>CLIENTS TESTIMONIALS</h1>
        <p>Realize all your real estate needs in a promising locality.</p>
      </div>

      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        {TestData &&
          TestData.map((post, index) => (
            <div className="testimonials" key={index}>
              <img src={post.mainImage.asset.url} alt="" />
              <h3>{post.name}</h3>
              <p>{post.description}</p>
            </div>
          ))}
      </Carousel>
    </>
  );
}

export default Testimonials;
