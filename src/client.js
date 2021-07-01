import sanityClient from "@sanity/client";

// React knows which project to select
export default sanityClient({
  projectId: "d7sx6gi2",
  dataset: "production",
});
