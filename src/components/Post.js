import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import { Link } from "react-router-dom";

function Post() {
  const [postData, setPost] = useState(null);
  //   * means all the data
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,slug,author,mainImage{
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

  return (
    <main>
      {console.log(postData)}
      {postData && console.log(postData[0].author._ref)}
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">
          Blog Posts Page
        </h1>
        <h2 className="text-lg text-grey-600 flex justify-center mb-12">
          Welcome to my page of blog posts
        </h2>
        <div className="" style={{ margin: "30px" }}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postData &&
              postData.map((post, index) => (
                <article key={index}>
                  <Link
                    to={"/post/" + post.slug.current}
                    key={post.slug.current}
                  >
                    <span
                      className="block h-64 relative rounded shadow leading-snug bg-white border-r-8 border-green-500"
                      key={index}
                    >
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.asset.alt}
                        className="w-100 h-full rounded-r object-cover absolute"
                      />
                      <span className="block relative h-full flex justify-end ">
                        <h2
                          style={{ width: "45%" }}
                          className="text-gray-800 text-lg font-blog px-10 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded"
                        >
                          {post.title}
                        </h2>
                      </span>
                    </span>
                  </Link>
                </article>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Post;
