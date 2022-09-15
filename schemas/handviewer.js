export default {
  name: "handviewer",
  type: "object",
  title: "Handviewer",
  fields: [
    {
      name: "auction",
      type: "string",
      title: "Auction",
    },
    {
      name: "north",
      type: "string",
      title: "North",
      fields: [
        {
          name: "spades",
          type: "string",
          title: "Spades",
        },
        {
          name: "hearts",
          type: "string",
          title: "Hearts",
        },
        {
          name: "diamonds",
          type: "string",
          title: "Diamonds",
        },
        {
          name: "clubs",
          type: "string",
          title: "Clubs",
        },
      ],
    },
    {
      name: "south",
      type: "string",
      title: "South",
    },
    {
      name: "east",
      type: "string",
      title: "East",
    },
    {
      name: "west",
      type: "string",
      title: "West",
    },
  ],
};
