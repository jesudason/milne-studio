export default {
  name: "socialMedia",
  type: "object",
  title: "SocialMedia",
  fields: [
    {
      name: "platform",
      title: "Platform",
      type: "string",
      options: {
        list: [
          { title: "Facebook", value: "facebook" },
          { title: "Twitter", value: "twitter" },
          { title: "Instagram", value: "instagram" },
          { title: "Codepen", value: "codepen" },
          { title: "Github", value: "github" },
          { title: "Gitlab", value: "gitlab" },
          { title: "LinkedIn", value: "linkedin" },
        ],
      },
    },
    {
      name: "link",
      type: "string",
      title: "Link",
    },
  ],
};
