export default {
  name: "textWithIllustration",
  type: "object",
  title: "Text with Illustration",
  fields: [
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    },
    {
      name: "imagePlacement",
      type: "string",
      title: "Image Placement",
      description: "Select side of text for image to sit",
      options: {
        list: ["Left", "Right"],
      },
    },
    {
      name: "tagline",
      type: "string",
      title: "Tagline",
    },
    {
      name: "content",
      type: "array",
      title: "Content",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
        },
      ],
    },
  ],
};
