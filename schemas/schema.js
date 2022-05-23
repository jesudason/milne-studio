// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import textWithIllustration from "./textWithIllustration";
import callToAction from "./callToAction";
import gallery from "./gallery";
import form from "./form";
import pages from "./pages";
import video from "./video";
import people from "./people";
import testimonials from "./testimonials";
import siteSettings from "./siteConfig";
import tilesBlock from "./tilesBlock";
import blockquote from "./blockquote";
import map from "./map";
import locations from "./locations";
import socialMedia from "./socialMedia";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    pages,
    people,
    testimonials,
    blockquote,
    textWithIllustration,
    callToAction,
    video,
    gallery,
    form,
    siteSettings,
    tilesBlock,
    map,
    locations,
    socialMedia,
  ]),
});
