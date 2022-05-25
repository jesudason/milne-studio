import LeafletGeopointInput from "sanity-plugin-leaflet-input";

export default {
  title: "Map",
  type: "object",
  name: "map",
  fields: [
    {
      name: "title",
      title: "Map Title",
      type: "string",
    },

    {
      name: "canZoom",
      title: "Zoomable",
      type: "boolean",
    },
    {
      name: "canDrag",
      title: "Draggable",
      type: "boolean",
    },
    {
      name: "points",
      title: "Points",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "locations" }],
        },
      ],
    },
    {
      name: "center",
      title: "Center of map",
      description: "Default center of map if no markers are added",
      type: "geopoint",
      validation: (Rule) => Rule.required(),
      inputComponent: LeafletGeopointInput,
    },
    {
      name: "zoom",
      title: "Zoom Level -- Override",
      description:
        "By default the map will zoom to the maximum zoom level that displays all markers. Input a value 1 - 12 to override default functionality",
      type: "number",
      validation: (Rule) => Rule.optional().min(1).max(12),
    },
  ],
  preview: {
    select: {
      title: "title",
      center: "center",
      zoom: "zoom",
      draggable: "canDrag",
      zoomable: "canZoom",
      points: "points",
    },
    // component: PreviewMap
  },
};
