import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import bg from "../img/bg-1.png";
import "./post.css";
import LottieAnimation from "./lottieFiles/Lottie";
import house from "./lottieFiles/22271-house-animation.json";
import key from "./lottieFiles/36506-housekey.json";
import cube from "./lottieFiles/58687-3d-cubes.json";
import areaMap from "./lottieFiles/47956-area-map.json";
import callback from "./lottieFiles/34446-call-icon.json";
import { motion } from "framer-motion";
import { pageAnimation } from "../components/style/animation";

function Post() {
  const [postData, setPost] = useState(null);
  //   * means all the data
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,slug,author,category,propertyType,bhk,area,          
        "location": author->name,
        "categories": category->name,
        mainImage{
            asset->{
                _id,url
            },
            alt
        }
    }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <NavBar></NavBar>
      {/* {console.log(postData)} */}
      {/* {postData && console.log(postData[0].author._ref)} */}
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <main
          style={{ maxWidth: "100vw", overflowX: "hidden" }}
          className="post__container"
        >
          <img
            style={{ maxWidth: "100vw", overflowX: "hidden" }}
            className="post__container__img"
            src={bg}
            alt="bg"
          />
          <section className="post__container__text">
            <h1 class="typo-header-text">
              <span class="font-normal">Discover your </span> Dream Place.
            </h1>
          </section>
        </main>

        <section style={{ maxWidth: "100vw" }} className="container mx-auto">
          {/* <h1 className="text-5xl flex justify-center cursive">
          Blog Posts Page
        </h1>
        <h2 className="text-lg text-grey-600 flex justify-center mb-12">
          Welcome to my page of blog posts
        </h2> */}

          <div className="post__grid__title" style={{ margin: "30px" }}>
            <h1 className="flex justify-center mb-0">
              Let’s find a place that’s perfect for you
            </h1>
            <p className="flex justify-center mt-1 ">
              Our team ensures buyers with exposure to possibilities by finding
              a property as per the requirements, budgets, and objective of
              Investment.
            </p>
            <div className="min-h-screen grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {postData &&
                postData.map((post, index) => (
                  <article className="singlePost" key={index}>
                    <Link
                      to={"/post/" + post.slug.current}
                      key={post.slug.current}
                    >
                      <span
                        className="block h-64 relative shadow leading-snug bg-white "
                        key={index}
                      >
                        <img
                          src={post.mainImage.asset.url}
                          alt={post.mainImage.asset.alt}
                          className="w-100 h-full rounded-r object-cover absolute"
                        />
                        <span className="absolute ">
                          <div>{/* <p>ABC</p> */}</div>
                        </span>
                        <span className="block relative h-full flex justify-end ">
                          <div className="singlePost__grid__text text-gray-800 font-blog px-10 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                            <b>
                              <h1 style={{}}> {post.title}</h1>
                            </b>
                            <br />
                          </div>
                        </span>
                      </span>
                      <div className="singlePost__grid__body">
                        <div className="singlePost__grid__body_head"></div>
                        <div className="singlePost__grid__body_desc">
                          <div className="flex">
                            <LottieAnimation
                              lotti={key}
                              height="18px"
                              width="18px"
                            />
                            <span style={{ marginLeft: "10px", flex: "1" }}>
                              <b>{post.propertyType}</b>
                            </span>
                          </div>
                          <div className="flex">
                            <LottieAnimation
                              lotti={house}
                              height="18px"
                              width="18px"
                            />

                            <span style={{ marginLeft: "10px", flex: "1" }}>
                              {post.bhk}
                            </span>
                          </div>
                          <div>
                            <div className="flex">
                              <LottieAnimation
                                lotti={cube}
                                height="18px"
                                width="18px"
                              />
                              <span style={{ marginLeft: "10px", flex: "1" }}>
                                {post.area}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>

                    <div className="singlePost__grid__footer">
                      <div style={{ flex: 1 }}>
                        <div className="flex">
                          <LottieAnimation
                            lotti={areaMap}
                            height="24px"
                            width="24px"
                          />
                          {/* <FontAwesomeIcon
                        className="singlePost__grid__faLocation"
                        icon={faMapMarkerAlt}
                      /> */}
                          <span style={{ flex: "1", marginLeft: "10px" }}>
                            {post.location}
                          </span>
                        </div>
                      </div>
                      <div
                        className="singlePost__grid__btn mr-2"
                        style={{ zIndex: "100" }}
                      >
                        <a href="tel:+91 9987130717">
                          <LottieAnimation
                            lotti={callback}
                            height="24px"
                            width="24px"
                          />
                          {/* <FontAwesomeIcon icon={faPhone} /> */}
                        </a>
                      </div>
                      <Link
                        to={"/post/" + post.slug.current}
                        key={post.slug.current}
                      >
                        <div className="singlePost__grid__btn">View</div>
                      </Link>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </section>
      </motion.div>
    </main>
  );
}

export default Post;
