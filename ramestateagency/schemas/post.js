export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Property Name",
      description: "Keep it short!!",
      type: "string",
    },
    {
      name: "slug",
      title: "Url Extension (Slug)",
      type: "slug",
      description: "Click generate button",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "propertyType",
      title: "Property Type",
      description: "Example - Resale, Brand New, Rental",
      type: "string",
    },
    {
      name: "bhk",
      title: "BHK",
      description: "Example - '2/3BHK' or '2BHK'",
      type: "string",
    },
    {
      name: "area",
      title: "Area",
      description: "Example - 1200 sqft",
      type: "string",
    },
    {
      name: "author",
      title: "Location",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "imagesGallery",
      discription: "You can more images of property here for slideshow",
      title: "Images gallery",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "category",
      title: "Categories",
      description: "You can skip this part no",

      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
