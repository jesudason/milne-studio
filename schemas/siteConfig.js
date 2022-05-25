export default {
  name: "siteSettings",
  type: "document",
  title: "Site settings",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Site title",
    },
    {
      title: "URL",
      name: "url",
      type: "url",
      description: "The main site url.",
    },
    {
      name: "email",
      type: "string",
      title: "Email",
    },
    {
      name: "phone",
      type: "string",
      title: "Phone",
    },
    {
      name: "address",
      type: "string",
      title: "Address",
    },
    {
      title: "Socials",
      name: "socials",
      description: "Social media links to be displayed in the navigation bar",
      type: "array",
      of: [
        {
          type: "socialMedia",
        },
      ],
    },
    {
      title: "Main Navigation",
      name: "mainNav",
      description: "Select pages for the top menu",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "pages" }],
        },
      ],
    },
    {
      title: "Footer Navigation",
      name: "footerNav",
      description: "Select pages for the footer",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "pages" }],
        },
      ],
    },
  ],
};
