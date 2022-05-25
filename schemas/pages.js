export default {
  name: "pages",
  title: "Pages",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "pageType",
      title: "Page Type",
      type: "string",
      options: {
        list: [
          { title: "Index", value: "index" },
          { title: "Content", value: "content" },
        ],
      },
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
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
      name: "content",
      type: "array",
      title: "Content",
      of: [
        {
          type: "block",
          marks: {
            annotations: [
              {
                name: "link",
                type: "object",
                title: "External link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                  {
                    title: "Open in new tab",
                    name: "blank",
                    description:
                      "Read https://css-tricks.com/use-target_blank/",
                    type: "boolean",
                  },
                ],
              },
              {
                name: "internalLink",
                type: "object",
                title: "Internal link",
                fields: [
                  {
                    name: "reference",
                    type: "reference",
                    title: "Reference",
                    to: [{ type: "pages" }],
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
        },
      ],
    },
    {
      name: "pageBuilder",
      type: "array",
      title: "Page builder",
      of: [
        { type: "people" },
        { type: "textWithIllustration" },
        { type: "form" },
        { type: "testimonials" },
        { type: "blockquote" },
        { type: "tilesBlock" },
        { type: "map" },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
};
