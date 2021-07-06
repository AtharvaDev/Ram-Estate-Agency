import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import { useParams } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import {
  faCube,
  faHome,
  faKey,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import NavBar from "./NavBar";
import "./singlePost.css";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();
  // console.log({ slug });

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
          title,_id,slug,mainImage{
              asset->{
                  _id,url
              }
          },
          body,
          imagesGallery,propertyType,bhk,area, 
          "location": author->name,
          "authorImage": author->image
      }
      `
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, []);

  if (!singlePost) return <div>Loading...</div>;

  return (
    <>
      <NavBar></NavBar>

      <main className="singlePost bg-gray-200 min-h-screen p-12">
        {/* {console.log(singlePost)} */}

        {/* {console.log(urlFor(singlePost.imagesGallery[0].asset).url())} */}

        <article className="container shadow-lg mx-auto bg-blue-100 rounded-lg">
          <header className="relative">
            <div className="absolute h-full w-full flex items-center justify-center">
              <div className="bg-white bg-opacity-75 rounded p-12">
                <h1 className="cursive text-3xl lg:text-6xl mb-4">
                  {singlePost.title}
                </h1>
                <div className="flex justify-center text-gray-800">
                  {/* <img
                  src={urlFor(singlePost.authorImage).url()}
                  alt="{singlePost.name}"
                /> */}
                </div>
                <p className="cursive  pl-2 ">
                  <div className="flex justify-between">
                    <div>
                      <FontAwesomeIcon
                        className="singlePost__grid__faLocation"
                        icon={faMapMarkerAlt}
                      />
                      {singlePost.location}
                    </div>
                    <div>
                      <FontAwesomeIcon
                        className="singlePost__grid__faLocation"
                        icon={faKey}
                      />
                      <b>{singlePost.propertyType}</b>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <FontAwesomeIcon
                        className="singlePost__grid__faLocation"
                        icon={faHome}
                      />
                      {singlePost.bhk}
                    </div>
                    <div>
                      <FontAwesomeIcon
                        className="singlePost__grid__faLocation"
                        icon={faCube}
                      />
                      {singlePost.area}
                    </div>
                  </div>
                </p>
              </div>
            </div>
            <img
              className="w-full object-cover rounded-t"
              style={{ height: "400px" }}
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
            />
          </header>
          <div className="singlePost__body px-16 lg:px-48 py-12 lg:py-20 lg:prose-xl max-w-full">
            <BlockContent
              blocks={singlePost.body}
              projectId="d7sx6gi2"
              dataset="production"
            />
          </div>
          {singlePost.imagesGallery && (
            <div className="singlePost__carousel">
              <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={2000}
              >
                {/* {singlePost && console.log(singlePost.imagesGallery[0])} */}
                {/* {console.log(singlePost.imagesGallery)} */}
                {singlePost &&
                  singlePost.imagesGallery.map((singleImage) => (
                    <div key={singleImage._key}>
                      {/* {console.log(singleImage)} */}
                      {/* {console.log(urlFor(singleImage.asset).url())} */}
                      <img src={urlFor(singleImage.asset).url()} alt="" />
                    </div>
                  ))}
              </Carousel>
            </div>
          )}
        </article>
      </main>
    </>
  );
}

export default SinglePost;
