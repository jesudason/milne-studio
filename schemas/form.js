export default {
  name: "form",
  type: "object",
  title: "Form",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "form",
      type: "string",
      title: "Form",
      description: "Select form type",
      options: {
        list: ["newsletter", "contact"],
      },
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
