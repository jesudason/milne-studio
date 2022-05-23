export default {
  name: "tilesBlock",
  type: "object",
  title: "3 Tiles Block",
  fields: [
    {
      name: "tilesBlockHeading",
      type: "string",
      title: "Tiles Block Heading",
    },
    {
      name: "tileHeading1",
      type: "string",
      title: "1. Tile Heading",
    },
    {
      name: "tileText1",
      type: "string",
      title: "1. Tile Text",
    },
    {
      name: "hexColour1",
      type: "string",
      title: "1. Background Colour Hex",
    },
    {
      name: "image1",
      type: "image",
      title: "1. Image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt2",
          type: "string",
          title: "2. Alternative text",
        },
      ],
    },
    {
      name: "url1",
      type: "reference",
      title: "1. URL",
      to: [{ type: "pages" }],
    },
    {
      name: "tileHeading2",
      type: "string",
      title: "2. Tile Heading",
    },
    {
      name: "tileText2",
      type: "string",
      title: "1. Tile Text",
    },
    {
      name: "hexColour2",
      type: "string",
      title: "2. Background Colour Hex",
    },
    {
      name: "image2",
      type: "image",
      title: "2. Image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt2",
          type: "string",
          title: "2. Alternative text",
        },
      ],
    },
    {
      name: "url2",
      type: "reference",
      title: "2. URL",
      to: [{ type: "pages" }],
    },
    {
      name: "tileHeading3",
      type: "string",
      title: "3. Tile Heading",
    },
    {
      name: "tileText3",
      type: "string",
      title: "3. Tile Text",
    },
    {
      name: "hexColour3",
      type: "string",
      title: "3. Background Colour Hex",
    },
    {
      name: "image3",
      type: "image",
      title: "3. Image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt3",
          type: "string",
          title: "3. Alternative text",
        },
      ],
    },
    {
      name: "url3",
      type: "reference",
      title: "3. URL",
      to: [{ type: "pages" }],
    },
  ],
};
