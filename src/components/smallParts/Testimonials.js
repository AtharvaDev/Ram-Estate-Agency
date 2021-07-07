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
        `*[_type == "post"]{
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

  return <div> {console.log("TestData")}</div>;
}

export default Testimonials;
