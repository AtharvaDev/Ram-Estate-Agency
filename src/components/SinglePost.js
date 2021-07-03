import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import { useParams } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import { faMapMarker, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();
  console.log({ slug });

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
          "location": author->name,
          "authorImage": author->image
      }
      `
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, []);
  console.log(setSinglePost);

  if (!singlePost) return <div>Loading...</div>;

  return (
    <main className="bg-gray-200 min-h-screen p-12">
      {console.log(singlePost)}
      <article className="container shadow-lg mx-auto bg-green-100 rounded-lg">
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
              <p className="cursive flex items-center pl-2 text-2xl">
                <FontAwesomeIcon className="mx-3" icon={faMapMarkerAlt} />
                {singlePost.location}
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
        <div className="px-16 lg:px-48 py-12 lg:py-20 lg:prose-xl max-w-full">
          <BlockContent
            blocks={singlePost.body}
            projectId="d7sx6gi2"
            dataset="production"
          />
        </div>
      </article>
    </main>
  );
}

export default SinglePost;
