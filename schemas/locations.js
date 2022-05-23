import LeafletGeopointInput from "sanity-plugin-leaflet-input";

export default {
  title: "Locations",
  type: "document",
  name: "locations",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "marker",
      title: "Marker",
      type: "geopoint",
      validation: (Rule) => Rule.required(),
      inputComponent: LeafletGeopointInput,
    },
    {
      name: "phone",
      title: "Phone",
      type: "number",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
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
