export default {
  name: "featureText",
  type: "object",
  title: "FeatureText",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "text",
      type: "string",
      title: "Text",
    },
    {
      title: "Background Colour",
      name: "backgroundColor",
      type: "string",
      options: {
        list: ["primary", "secondary", "tertiary", "black", "white"],
      },
    },
  ],
};
